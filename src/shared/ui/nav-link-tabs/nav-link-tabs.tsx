import { FC } from "react";
import { NavLink } from "@mantine/core";
import classes from "./nav-link-tabs.module.css";

interface NavLinkTabsProps {
  href: string;
  component: any;
  active: boolean;
  label: string;
}

export const NavLinkTabs: FC<NavLinkTabsProps> = ({
  href,
  component,
  active,
  label,
}) => {
  return (
    <NavLink
      classNames={classes}
      component={component}
      href={href}
      active={active}
      label={label}
    />
  );
};
