import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./layout.module.css";
import Logo from "../../../public/Logo.svg";
import { NavLinkTabs } from "../../shared/ui/nav-link-tabs/nav-link-tabs";

interface Node {
  children?: ReactNode;
}

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

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
        <AppShell.Section className={classes.section_logo} onClick={toggle}>
          <Image src={Logo} alt="ArrowFlicks" />
          <span className={poppins.className}>ArrowFlicks</span>
        </AppShell.Section>
        <AppShell.Section className={classes.section_nav}>
          <NavLinkTabs
            href="/"
            component={Link}
            active={pathname === "/"}
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
