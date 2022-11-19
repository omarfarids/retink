import React, { useContext, useState } from "react";
import { Loader } from "@mantine/core";
import { AppContext } from "../app/context";

type ButtonProps = {
  label: string;
  type: "bordered" | "primary";
};

const Button = ({ label, type }: ButtonProps) => {
  const { setBusinessName, setEmail } = useContext<any>(AppContext);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleLoading = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      if (type === "bordered") {
        window.location.href = "https://retink.io/fap/";
      }
    }, 2000);
    setBusinessName("");
    setEmail("");
  };

  return (
    <button
      onClick={handleLoading}
      className={`${
        type === "bordered"
          ? "bg-white border border-primary1 text-primary1"
          : "bg-primary1 text-white hover:opacity-90"
      } rounded-xl px-5 py-2 hover:shadow-xl`}
    >
      {!buttonLoading ? label : <Loader color="gray" variant="dots" />}
    </button>
  );
};

export default Button;
