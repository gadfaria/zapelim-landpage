import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container" style={{ marginTop: "-200px" }}>
        <div className={innerClasses}>
          <div className={splitClasses}>
            <div className="split-item"> </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-delay="600"
              >
                <h3 className="mt-0 mb-12">Com Zapelim, você vende mais.</h3>
                <p className="m-0" style={{ display: "flex" }}>
                  <Image
                    src={require("./../../assets/images/check.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />
                  <div style={{ marginLeft: "8px" }}>
                    0% de taxa por pedido.
                  </div>
                </p>
                <p className="m-0" style={{ display: "flex" }}>
                  <Image
                    src={require("./../../assets/images/check.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />
                  <div style={{ marginLeft: "8px" }}>
                    Gerencie e acompanhe seus pedidos.
                  </div>
                </p>
                <p className="m-0" style={{ display: "flex" }}>
                  <Image
                    src={require("./../../assets/images/check.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />
                  <div style={{ marginLeft: "8px" }}>
                    100% dos seus clientes atendidos na hora.
                  </div>
                </p>

                <h5
                  className="m-0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <Image
                    src={require("./../../assets/images/phone.svg")}
                    alt="Open"
                    width={30}
                    height={30}
                  />
                  <div style={{ marginLeft: "8px" }}>
                    Também quero experimentar
                  </div>
                </h5>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-delay="800"
              >
                <Image
                  src={require("./../../assets/images/whats-fake.svg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
