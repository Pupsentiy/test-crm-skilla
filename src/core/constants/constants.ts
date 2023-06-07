import { ReactComponent as timline } from "../../assets/img/sidebar/chart-timeline-variant.svg";
import { ReactComponent as orders } from "../../assets/img/sidebar/orders.svg";
import { ReactComponent as mail } from "../../assets/img/sidebar/mail_outline-24px.svg";
import { ReactComponent as calls } from "../../assets/img/sidebar/calls-24px.svg";
import { ReactComponent as people } from "../../assets/img/sidebar/people-24px.svg";
import { ReactComponent as docs } from "../../assets/img/sidebar/documents-24px.svg";
import { ReactComponent as perm } from "../../assets/img/sidebar/perm_identity_black_24dp.svg";
import { ReactComponent as brifcase } from "../../assets/img/sidebar/briefcase-outline.svg";
import { ReactComponent as library } from "../../assets/img/sidebar/local_library_black_24dp.svg";
import { ReactComponent as settings } from "../../assets/img/sidebar/settings-24px.svg";

import { TLinkItems } from "./constants.types";

export const linkItems: TLinkItems[] = [
  { id: 0, title: "Итоги", link: "!#", SVGComponent: timline },
  { id: 1, title: "Заказы", link: "!#", SVGComponent: orders },
  { id: 2, title: "Сообщения", link: "!#", SVGComponent: mail },
  { id: 3, title: "Звонки", link: "/", SVGComponent: calls },
  { id: 4, title: "Контрагенты", link: "!#", SVGComponent: people },
  { id: 5, title: "Документы", link: "!#", SVGComponent: docs },
  { id: 6, title: "Исполнители", link: "!#", SVGComponent: perm },
  { id: 7, title: "Отчеты", link: "!#", SVGComponent: brifcase },
  { id: 8, title: "База знаний", link: "!#", SVGComponent: library },
  { id: 9, title: "Настройки", link: "!#", SVGComponent: settings },
];

export const ruDate:string = new Intl.DateTimeFormat("ru", {
  day: "numeric",
  month: "short",
  weekday: "long",
}).format(new Date());