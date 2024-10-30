import React from "react";
import { sprite } from "./sprite";

const Icon = (props) => {
  const {
    type = "white", // Default color
    name,
    className,
    // size = 24,
    mainClassName = "",
    dataTestId = "",
    onClick = () => {},
  } = props;

  return (
    <div
      data-testid={dataTestId}
      className={` ${mainClassName ? mainClassName : ""}`}
      // style={{ width: size, height: size }}
      onClick={onClick}
    >
      {sprite[name] &&
        React.cloneElement(sprite[name], {
          className: `icon-${type} ${className ? className : ""}`,
          // width: size,
          // height: size,
        })}
    </div>
  );
};

export default Icon;
