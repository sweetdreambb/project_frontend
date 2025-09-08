import {useNavigate} from "@tanstack/react-router";
import image from "./thank-you.png";
import MyMeatShopIcon from "../../component/MyMeatShopIcon";
import React, {useEffect, useState} from "react";

export default function ThankYouPage() {
  const navigate = useNavigate({from: "/thankyou"});
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      navigate({to: "/"})
    }
    document.title="Thank You!";
    setTimeout(() => {
      setCountdown((prev) => (prev - 1));
    }, 1000)
  }, [countdown]);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm h-20 px-8 flex justify-between">
        <MyMeatShopIcon/>
      </div>
      <div className="flex flex-col justify-center items-center my-4">
        <h1 className="text-primary">
          Going back to main page after{" "}
          <span className="countdown font-extrabold">
            <span
              style={{"--value": countdown} as React.CSSProperties}
              aria-live="polite"
              aria-label={`${countdown} seconds`}
            >
              {countdown}
            </span>
          </span>{" "}
            seconds
        </h1>
        <img src={image}/>
      </div>
    </div>
  )
}