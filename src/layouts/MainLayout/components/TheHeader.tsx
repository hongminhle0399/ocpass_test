import { NavLink } from "react-router";
import {
  UserGroupIcon,
  ShoppingBagIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import { toggleDarkMode, useAppSettingsStore } from "@/store/appSettings.store";
import { Button } from "@heroui/react";
import { useMemo } from "react";

const HEADER_LINKS = [
  {
    to: "customers",
    text: "Customers",
    icon: <UserGroupIcon className="size-6" />,
  },
  { to: "orders", text: "Orders", icon: <ShoppingBagIcon className="size-6" /> },
];

const TheHeader = () => {
  const isDarkMode = useAppSettingsStore((state) => state.isDarkMode);

  const darkModeIcon = useMemo(() => isDarkMode ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />, [isDarkMode])

  return (
    <header className="flex items-center justify-between gap-x-4 p-4 border-b-3 rounded-b-lg">
      <div className="flex gap-x-4">
        {HEADER_LINKS.map((link) => {
          const { to, text, icon } = link;

          return (
            <NavLink key={to} to={to}>
              <Button color="default" className="flex gap-x-2" variant="light">
                {icon}
                <p className="text-lg">{text}</p>
              </Button>
            </NavLink>
          );
        })}
      </div>
      <Button isIconOnly onPress={toggleDarkMode} variant="light">
        {darkModeIcon}
      </Button>
    </header>
  );
};

export default TheHeader;
