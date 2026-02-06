import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// This wrapper simplifies usage so we don't need to put the Provider everywhere
export default function Payment({ amount, onSuccess }) {
    const handleApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            const payerName = details.payer.name.given_name;
            console.log("Transaction completed by " + payerName);
            // Call the parent's success handler
            if (onSuccess) onSuccess(details);
            alert(`Payment Successful! Thank you, ${payerName}! +1000 Coins 🪙`);
        });
    };

    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            {/* 'test' client-id works for sandbox testing without real money */}
            <div className="w-full relative z-0">
                <PayPalButtons
                    style={{ layout: "horizontal", height: 40, tagline: false }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: amount.toString(), // e.g. "10.00"
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={handleApprove}
                />
            </div>
        </PayPalScriptProvider>
    );
}
