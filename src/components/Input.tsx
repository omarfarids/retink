import React from "react";

type InlineInputProps = {
  type: string;
  data: string;
  setData: (data: string) => void;
  placeHolder: string;
  classes: string;
};

const InlineInput = ({
  type,
  data,
  setData,
  placeHolder,
  classes,
}: InlineInputProps) => {
  return (
    <input
      className={classes}
      type={type}
      value={data}
      onChange={(e) => setData(e.target.value)}
      placeholder={placeHolder}
    />
  );
};

export default InlineInput;
