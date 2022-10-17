import { createElement } from "react";
import { Menu, MenuProps, useResourceDefinitions } from "react-admin";

const dropDownMenus = ["fuel-cards"];

export const CustomMenu = (props: MenuProps) => {
  const resources = useResourceDefinitions();
  const createMenuItem = (name: string) => {
    return (
      <Menu.Item
        key={name}
        to={`/${name}`}
        primaryText={
          (resources[name].options && resources[name].options.label) || name
        }
        leftIcon={createElement(resources[name].icon)}
      />
    );
  };

  const simpleMenus = Object.keys(resources).filter(
    (name) => !dropDownMenus.includes(name)
  );

  return (
    <Menu {...props}>
      {simpleMenus.map((name) => {
        return createMenuItem(name);
      })}
    </Menu>
  );
};
