import { createElement } from "react";
import { Menu, MenuProps, useResourceDefinitions } from "react-admin";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItem } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

const dropDownMenus = ["fuel-cards"];

export const CustomMenu = (props: MenuProps) => {
  const resources = useResourceDefinitions();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const createMenuItem = (name: string) => {
    return (
      <ListItemButton
        onClick={(e) => {
          navigate(`/${name}`);
        }}
      >
        <ListItemIcon>{createElement(resources[name]?.icon)}</ListItemIcon>
        <ListItemText
          primary={
            (resources[name].options && resources[name].options.label) || name
          }
        />
      </ListItemButton>
    );
  };

  const simpleMenus = Object.keys(resources).filter(
    (name) => !dropDownMenus.includes(name)
  );

  return (
    <Menu {...props}>
      <List>
        {simpleMenus.map((name) => {
          return createMenuItem(name);
        })}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalGasStationIcon />
          </ListItemIcon>
          <ListItemText primary="Dropdown" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItem sx={{ pl: 4 }}>{createMenuItem("fuel-cards")}</ListItem>
          </List>
        </Collapse>
      </List>
    </Menu>
  );
};
