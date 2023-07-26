const bcrypt = require("bcrypt");
require("dotenv").config();
const nodemailer = require("nodemailer");

const { UserModel, validSignUp, validLogin, createToken } = require("../models/userModel");
const Mailgen = require("mailgen");
// const {config} = require("../config/secret")

exports.userReq = {
    signUp: async(req,res) => {
        const validBody = validSignUp(req.body);
        if(validBody.error){
          return res.status(400).json(validBody.error.details);
        }
        try{
          const user = await UserModel.create(req.body);
          // encoding password
          user.password = await bcrypt.hash(user.password, 10);
          await user.save();
          user.password = "*****";
          res.status(201).json(user);
        }
        catch(error){
          if(error.code == 11000){
            return res.status(401).json({msg_err:"Email user already in system",code:11000})
          }
          console.log(error);
          res.status(502).json({msg_err:error})
        }
    },
    login: async(req,res) => {
        const validBody = validLogin(req.body);
        if(validBody.error){
          return res.status(400).json(validBody.error.details);
        }
        try{
          // cheking if email exists
          const user = await UserModel.findOne({email:req.body.email});
          if(!user){
            return res.status(401).json({msg_err:"Email or password worng !"});
          }
          // cheking if password match
          const passwordValid = await bcrypt.compare(req.body.password, user.password);
          if(!passwordValid){
            return res.status(401).json({msg_err:"Email or password worng !"});
          }
          // create token for user
          const token = createToken(user._id, user.role)
          res.json({token, role:user.role});
        }
        catch(error){
          console.log(error);
          res.status(502).json({msg_err:error})
        }
    },
    getInfo: async(req, res) => {
      try {
          const user = await UserModel.findOne({ _id: req.tokenData._id }, { password: 0, __v: 0, updatedAt: 0 })
          res.json( user )
      } catch (error) {
          console.log(error);
          res.status(502).json({msg_err:error});
      }
    },
    checkToken: async(req,res) => {
        res.json({status:true});
    },
    getbill: async (req, res) => {
      const {config} = require("../config/secret")

      console.log("get bill");
      const { user } = req.body;
    
      let confige = {
        service: "gmail",
        auth: {
          user: config.EMAIL_ADMIN,
          pass:config.PASS_GOOGLE_ADMIN,
        },
      };
    
      let transporter = nodemailer.createTransport(confige);
    
      let MailGenerator = new Mailgen({
        theme: "default",
        product: {
          name: "Mailgen",
          link: "http://mailgen.js/",
        },
      });
    
      let response = {
        body: {
          name: user.name,
          intro: "Your bill has arrived",
          table: {
            data: [
              {
                item: "Nodemailer Stack Book",
                description: "A Backend application",
                price: "$10.99",
              },
            ],
          },
          outro: "Looking forward to do more business",
        },
      };
    
      let mail = MailGenerator.generate(response);
    
      let message = {
        from: config.EMAIL_ADMIN,
        to: email,
        subject: "place Order",
        html: mail,
      };
    
      transporter.sendMail(message).then(() => {
        try {
          return res
          .status(201)
          .json({
            msg: "you should received an email ",
          })
        } catch (error) {
          return res.status(500).json({ error });
        }
      });
      // res.status(201).json("getbill success");
    }

}