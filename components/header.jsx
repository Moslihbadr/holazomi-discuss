import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import Link from "next/link";
import NavbarAuth from "./navbar-auth";

export default function Header() {
  return (
    <>
      <Navbar className="mb-6 shadow">
        <NavbarBrand>
          <Link href={"/"} className="font-bold">HOLAZOMI Discuss</Link>
        </NavbarBrand>

        <NavbarContent justify="center">
          <NavbarItem>
            <Input />
          </NavbarItem>
        </NavbarContent>

        <NavbarAuth />
      </Navbar>
    </>
  )
};
