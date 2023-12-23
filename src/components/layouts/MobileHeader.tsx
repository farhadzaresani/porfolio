"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About me", "Contact me"];

  return (
    <Navbar className='!bg-gray-900/50' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Image
            width={80}
            height={80}
            src={"/images/global/logo.png"}
            alt='logo'
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-gray-900/60 '>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              //   color={
              //     index === 2
              //       ? "primary"
              //       : index === menuItems.length - 1
              //       ? "danger"
              //       : "foreground"
              //   }
              className='w-full text-gray-300'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
