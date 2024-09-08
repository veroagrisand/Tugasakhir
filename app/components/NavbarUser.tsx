import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "@/app/components/Acmelogo";

export default function NavbarUser() {
     return (
          <Navbar>
               <NavbarBrand>
                    <AcmeLogo />
                    <Link href="/" className="font-bold text-inherit">ACME</Link>
               </NavbarBrand>
               <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                         <Link color="foreground" href="/albums">
                              Albums
                         </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                         <Link href="/posts" aria-current="page">
                              Posts
                         </Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Link color="foreground" href="#">
                              Integrations
                         </Link>
                    </NavbarItem>
               </NavbarContent>
               <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                         <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Button as={Link} color="primary" href="#" variant="flat">
                              Sign Up
                         </Button>
                    </NavbarItem>
               </NavbarContent>
          </Navbar>
     );
}
