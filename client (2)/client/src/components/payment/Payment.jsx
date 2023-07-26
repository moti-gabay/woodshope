import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import { apiPost } from "../../constants/Requests";
import { MAILER_URL } from "../../constants/url";
import { useSelector } from "react-redux";
// import config from "./secret"


const Payment = () => {
  const {user} = useSelector(store => store.authReducer);
  const mailer = () => {
    user.cart = [
      {
        item:"10px",
        price:10,
      }

    ]
apiPost(MAILER_URL,user)
console.log("email send ..." )
console.log(user.cart);

  }
  console.log(user);
  return (
    <div>
      <PayPalScriptProvider
        options={{
          clientId:"AWHt2eysbxh9MOR2xrARU7lixXt2ZHOh0WeKTMHM97IixrX6vIoZrqf0GaJEPBOyPFmN2h6U9gHvbmR4",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "1.0",
                  },
                },
              ],
            });
          }}
          onApprove={async(data,actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            console.log("pay...");
            mailer();
            // checkOut();
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Payment;
