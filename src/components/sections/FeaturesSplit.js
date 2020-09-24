import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
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
    // topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    // topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Facilidade e agilidade",
    paragraph: "Simples para o usuário e para você",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container" style={{ marginTop: "-200px" }}>
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>
            <div className="split-item"> </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                // data-reveal-container=".split-item"
                data-reveal-delay="600"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CHATBOT
                </div> */}
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
                // data-reveal-container=".split-item"
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

            {/* <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  FUNCIONAMENTO
                </div>
                <h3 className="mt-0 mb-12">Como funciona?</h3>
                <p className="m-0">NÃO SEI OQUE ESCREVER AQUI</p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div width={400} height={200}>
                  <Image
                    src={require("./../../assets/images/maozinhaa.png")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  VALOR
                </div>
                <h3 className="mt-0 mb-12">E quanto custa?</h3>
                <p className="m-0">
                  Como cada colaborador tem suas necessidades, o valor do WhatsBot será baseado em sua demanda.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/price.svg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}

            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
