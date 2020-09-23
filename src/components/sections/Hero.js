import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

import Fundo from "../../assets/images/fundo.svg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const divStyle = {
  alignSelf: "flex-start",
  color: "white",
  display: "flex",
  flexDirection: "row",
  padding: "0px 20px",
  fontWeight: 600,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                <Image
                  src={require("./../../assets/images/zapelim.png")}
                  alt="Open"
                  width={60}
                  height={60}
                />
                <span>Zap</span>
                <span className="text-color-primary">elim</span>
              </h1>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  Seu robô de vendas para WhatsApp.
                </p>
              </div>
              <div
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="600"
              >
                <Image
                  src={require("./../../assets/images/maozinha123.png")}
                  alt="Features split 01"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <div className="hero-content">
              <div
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="1200"
                style={{
                  backgroundImage: `url(${Fundo})`,
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "180px",
                  // height: "520px"
                }}
              >
                <h4
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="1400"
                  style={{ color: "white", paddingTop: "20px" }}
                >
                  Com Zapelim, você vende mais.
                </h4>
                <div
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="1600"
                  style={divStyle}
                >
                  <Image
                    src={require("./../../assets/images/check.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />{" "}
                  <span style={{ marginLeft: "8px" }}>
                    0% de taxa por pedido.
                  </span>
                </div>
                <div
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="1600"
                  style={divStyle}
                >
                  <Image
                    src={require("./../../assets/images/check.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />{" "}
                  <span style={{ marginLeft: "8px" }}>
                    Gerencie e acompanhe seus pedidos.
                  </span>
                </div>
                <div
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="1600"
                  style={divStyle}
                >
                  <Image
                    src={require("./../../assets/images/check.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />{" "}
                  <span style={{ marginLeft: "8px" }}>
                    100% dos seus clientes atendidos na hora.
                  </span>
                </div>

                <div
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="1600"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  <Image
                    src={require("./../../assets/images/phone.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />{" "}
                  <span
                    style={{
                      color: "white",
                      marginLeft: "8px",
                      fontWeight: 700,
                      fontSize: 22
                    }}
                  >
                    Também quero experimentar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
