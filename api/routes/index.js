const express = require("express");
const router = express.Router();
const {guides} = require("../json/guides")
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://getrit-furniture-store.p.rapidapi.comhttps//getrit.com/API/Token',
  params: {Token: 'Demo'},
  headers: {
    'X-RapidAPI-Key': '5fa2f02eebmshf21a219959daf96p1bde6ejsne5bf58551296',
    'X-RapidAPI-Host': 'getrit-furniture-store.p.rapidapi.com'
  }
};

router.get("/", async(req,res) => {
  res.json(guides);
})

router.get("/api",async(req,res) => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data)
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;