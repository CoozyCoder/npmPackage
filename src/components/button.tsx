import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  childern: ReactNode;
};

const Button = ({ childern }: PropsType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "green",
        color: "white",
        cursor: "pointer",
      }}
    >
      {childern}
    </button>
  );
};

export { Button };
