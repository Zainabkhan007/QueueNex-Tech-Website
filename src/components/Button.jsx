import React from "react";

const Button = ({ name, link, style }) => {
  return (
    <button className={`${style} font-semibold`}>
      <a href={link}>{name}</a>
    </button>
  );
};

export default Button;
