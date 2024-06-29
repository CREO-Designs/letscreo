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
    <nav className="fixed flex w-full items-center justify-between bg-[#171717] px-4 py-[.62rem] md:px-14">
      <Image
        className="h-[1.875rem] w-[4.9375rem] md:h-[3.125rem] md:w-[9.375rem] 2xl:h-[4.125rem] 2xl:w-[10.5rem]"
        src={logo}
        alt="CREO logo"
        width={168}
        height={66}
      />
      <ul className="hidden flex-row items-center justify-center gap-12 text-white md:flex">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-white transition-colors duration-300 hover:font-extrabold"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer rounded border border-[#484848] p-2">
              <TiThMenu className="text-white" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative bottom-10 right-3 w-56 rounded border border-[#484848] bg-[#1E1E1E] text-white">
            <ul className="flex flex-col items-start justify-center">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="w-full">
                  <li className="px-[1.5rem] py-[.625rem] transition-colors duration-300">
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
