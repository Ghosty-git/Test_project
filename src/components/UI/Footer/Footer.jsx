import React from "react";
import logo from "../../../img/image2vector (1).svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <div style={{ width: "150px", height: "150px" }}>
                <img
                  src={logo}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="logo"
                />
              </div>
            </div>

            <div className="footer-col">
              <h4>Филиалы</h4>
              <ul>
                <li>г.Бишкек</li>
                <li>ул.Токтогула / К.Акиева</li>
                <li>ТЦ "Весна"</li>
                <li>+996 701 909070</li>
                <li>+996 555 082622</li>
              </ul>

              <ul>
                <li>г.Ош</li>
                <li>ул.Ленина 287</li>
                <li>зд.Долбоор</li>
                <li>+996 776 861010</li>
                <li>+996 552 961010</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Компания</h4>
              <ul>
                <li>О нас</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Трудоустройство в страны Персидского Залива:</h4>
              <ul>
                <li>ОАЭ</li>
                <li>Катар</li>
                <li>Кувейт</li>
                <li>Королевство Саудовской Аравии</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
