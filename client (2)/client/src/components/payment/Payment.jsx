import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

const Payment = ({checkOut}) => {
  return (
    <div>
      <PayPalScriptProvider
        options={{
          clientId:
            "AWHt2eysbxh9MOR2xrARU7lixXt2ZHOh0WeKTMHM97IixrX6vIoZrqf0GaJEPBOyPFmN2h6U9gHvbmR4",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.0",
                  },
                },
              ],
            });
          }}
          onApprove={async(data,actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            console.log("pay...");
            // checkOut();
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Payment;
