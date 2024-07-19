"use client";

import { useSession } from "next-auth/react";
import UserAvatar from "./avatar";
import { Button, NavbarContent, NavbarItem } from "@nextui-org/react";
import { signIn } from "@/actions";

export default function NavbarAuth() {
  const session = useSession()

  return (
    <NavbarContent justify="end">
      {
        session.status === "loading" ? null : 
        session.data?.user ?
          <UserAvatar image={session.data.user.image} name={session.data.user.name} /> :
          <>
            <NavbarItem>
              <form action={signIn}>
                <Button type="submit" color="primary" variant="flat">Sign In</Button>
              </form>
            </NavbarItem>
            <NavbarItem>
              <form action={signIn}>
                <Button type="submit" color="primary" variant="bordered">Sign Up</Button>
              </form>
            </NavbarItem>
          </>
      }
    </NavbarContent>
  )
};
