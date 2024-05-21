import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLinkTabs } from "../../shared/ui/nav-link-tabs/nav-link-tabs";
import { LogoUI } from "../../shared/ui/logo/logo";
import classes from "./layout.module.css";
import Logo from "../../../public/Logo.svg";

interface Node {
  children?: ReactNode;
}

export const Layout: FC<Node> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  return (
    <AppShell
      withBorder={false}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header
        className={classes.header}
        hiddenFrom="sm"
        bg="transparent"
      >
        <Image src={Logo} alt="ArrowFlicks" onClick={toggle} />
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar}>
        <AppShell.Section onClick={toggle}>
          <LogoUI cursor="pointer" />
        </AppShell.Section>
        <AppShell.Section className={classes.section_nav}>
          <NavLinkTabs
            href="/"
            component={Link}
            active={
              pathname === "/" ||
              (pathname ? pathname.includes("/movies") : false)
            }
            label="Movies"
          />
          <NavLinkTabs
            href="/rated-movies"
            component={Link}
            active={pathname === "/rated-movies"}
            label="Rated movies"
          />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main bg="gray.1">{children}</AppShell.Main>
    </AppShell>
  );
};
