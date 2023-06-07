import { FunctionComponent, SVGProps } from "react";

export type TLinkItems = {
  id: number;
  title: string;
  link: string;
  SVGComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
};
