import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes} style={{marginLeft:"15px"}}>
      <h1 className="m-0">
        <a href="https://teepad.com.br/" style={{ alignItems: "center" }}>
          <Image
            src={require("./../../../assets/images/teepad.png")}
            alt="Open"
            width={40}
            height={40}
          />
        </a>
      </h1>
    </div>
  );
};

export default Logo;
