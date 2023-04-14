import React, { useState, useEffect } from "react";

export default function RandomText() {
  const textAlerts = [
    {
      text:
        "Do not think twice, create your free store today with a few simple clicks",
    },
    {
      text:
        "Accept payments from any method with MercadoPago integrated into your store",
    },
    {
      text: "A short and catchy name is key to the success of your online store",
    },
    { text: "Make your store visually appealing with a nice image and banner" },
  ];

  const [isRandomText, setRandomText] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textAlerts.length);
    setRandomText(textAlerts[randomIndex].text);
  }, []);

  return <div>{isRandomText}</div>;
}
