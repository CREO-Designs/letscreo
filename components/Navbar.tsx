import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Our Work",
      href: "/work",
    },
    {
      name: "Contact Us",
      href: "#contact-us",
    },
  ];
  return (
    <nav className="flex fixed w-full items-center bg-[#171717] justify-between px-4 py-[.62rem]">
      <Image
        className="w-[4.9375rem] h-[1.875rem]"
        src={logo}
        alt="CREO logo"
        width={168}
        height={66}
      />
      <ul className="hidden md:flex flex-row justify-center items-center gap-12 text-white">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-white hover:font-extrabold
                  transition-colors duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="p-2 border-[#484848] border rounded cursor-pointer">
              <TiThMenu className="text-white " />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 border-[#484848] border rounded bg-[#1E1E1E] text-white relative bottom-10 right-3">
            <ul className="flex-col flex justify-center items-start">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="w-full">
                  <li className="transition-colors px-[1.5rem] py-[.625rem] duration-300">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
