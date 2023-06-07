import { FC } from "react";

import Button from "../button/Button";

import { ruDate } from "../../core/constants/constants";

import serchIcon from "../../assets/img/sidebar/basicsearch.svg";
import keyArrowIcon from "../../assets/img/sidebar/keyboard_arrow_down_black_24dp 1.svg";
import avatarIcon from "../../assets/img/sidebar/avatar.svg";

import "./header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <p className="header-time">{ruDate}</p>

      <div className="header-container-progress-bar">
        <div className="header-progress-bar-wrapper">
          <p className="header-progress-bar-green__title">
            Новые звонки <span>20 из 30 шт</span>
          </p>
          <div className="header-progress-bar ">
            <span className="header-progress-bar__line-green"></span>
          </div>
        </div>

        <div className="header-progress-bar-wrapper">
          <p className="header-progress-bar-yellow__title">
            Качество разговоров <span>40%</span>
          </p>
          <div className="header-progress-bar">
            <span className="header-progress-bar__line-yellow"></span>
          </div>
        </div>

        <div className="header-progress-bar-wrapper">
          <p className="header-progress-bar-red__title">
            Конверсия в заказ <span>67%</span>
          </p>
          <div className="header-progress-bar ">
            <span className="header-progress-bar__line-red"></span>
          </div>
        </div>
      </div>

      <nav className="header-container-navbar">
        <Button type="button" classProps="button-serach">
          <img src={serchIcon} alt="search" />
        </Button>

        <Button type="button" classProps="button-owner">
          ИП Сидорова Александра Михайловна{" "}
          <img src={keyArrowIcon} alt="indicator menu" />
        </Button>

        <Button type="button" classProps="button-accout">
          <img src={avatarIcon} alt="avatar" />
          <img src={keyArrowIcon} alt="indicator menu" />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
