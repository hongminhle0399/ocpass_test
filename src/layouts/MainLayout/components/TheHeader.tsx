import { NavLink, useLocation } from "react-router";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@heroui/react";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useAppSettingsStore } from "@/store/appSettingsStore";
import { useMemo } from "react";
import { BrandLogo } from "@/shared/ui";

const NAVIGATION_ITEMS = [
  {
    to: "customers",
    text: "Customers",
  },
  {
    to: "orders",
    text: "Orders",
  },
];

const TheHeader = () => {
  const isDarkMode = useAppSettingsStore((state) => state.isDarkMode);
  const toggleDarkMode = useAppSettingsStore((state) => state.toggleDarkMode)
  const { pathname } = useLocation();

  const darkModeIcon = useMemo(() => {
    const Icon = isDarkMode ? SunIcon : MoonIcon;
    return (
      <Icon className="size-6 flex h-5 w-5 items-center justify-center text-slate-500" />
    );
  }, [isDarkMode]);

  return (
    <Navbar
      isBordered
      isBlurred
      // className="justify-center max-w-350 w-full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className="flex">
        <NavbarBrand className="basis-auto grow-0 mr-4">
          <BrandLogo isDark={isDarkMode} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5">
          {NAVIGATION_ITEMS.map((nav) => {
            const isActive = pathname.includes(nav.to);
            return (
              <NavbarItem key={nav.to} isActive={isActive}>
                <Link as={NavLink} color="foreground" to={nav.to}>
                  {nav.text}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button isIconOnly onPress={toggleDarkMode} variant="light">
            {darkModeIcon}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TheHeader;
