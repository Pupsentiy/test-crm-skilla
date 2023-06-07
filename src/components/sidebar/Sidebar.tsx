import { FC } from "react";

import logo from "../../assets/img/sidebar/logo.svg";
import vectorBtn from "../../assets/img/sidebar/Vector.svg";
import alertBtn from "../../assets/img/sidebar/alert_24.svg";

import Button from "../button/Button";

import { linkItems } from "../../core/constants/constants";
import { TLinkItems } from "../../core/constants/constants.types";

import "./sidebar.scss";

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />

      <ul className="sidebar-menu">
        {linkItems &&
          linkItems.map((item: TLinkItems, i: number) => (
            <li className="sidebar-menu-item" key={i}>
              <a
                href={item.link}
                className={
                  window.location.pathname === item.link
                    ? "item__link item__link-active"
                    : "item__link"
                }
              >
                <item.SVGComponent className="link-img" />
                {item.title}
                <span className="link__dot"></span>
              </a>
            </li>
          ))}
      </ul>

     <div className="sidebar-container-buttons">
     <Button type="button" classProps={"sidebar-container-buttons__button"}>
        Добавить заказ <img src={vectorBtn} alt="добавить заказ" />
      </Button>
      <Button type="button" classProps={"sidebar-container-buttons__button"}>
        Оплата
        <img src={alertBtn} alt="оплата" />
      </Button>
     </div>
    </div>
  );
};

export default Sidebar;
