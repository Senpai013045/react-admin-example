import type { LayoutComponent } from "react-admin";
import { Layout } from "react-admin";
import { CustomMenu } from "./menu";

export const CustomLayout: LayoutComponent = (props) => {
  return <Layout {...props} menu={CustomMenu} />;
};
