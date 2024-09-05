import { HomeIcon, LogIn, LogInIcon } from "lucide-react";
import Link from "next/link";
import CustomLink from "../custom-link";

import DropdownAvater from "./dropdown-avatar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const navLinks = [
  {
    "label": "Accueil",
    "href": "/",
  },
  {
    "label": "Services",
    "href": "#services",
  },
  {
    "label": "Avantages",
    "href": "#avantages",
  },
  {
    "label": "Annonces",
    "href": "/annonces",
  },
  // {
  //   "label": "Profil",
  //   "href": "/profile",
  // },
];

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <div className="">
        <Link href={"/"}>
          <HomeIcon />
        </Link>
      </div>
      <div className="">
        <ul className="hidden md:flex gap-4">
          {navLinks.map((item) => (
            <li className=" " key={item.label}>
              <CustomLink type="navlink" href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
        <div className="block md:hidden">Mobile Menu</div>
      </div>
      <SignedOut>
        <ul className="flex">
          <li>
            <CustomLink type="signin-link" href={"/sign-in"} />
          </li>
        </ul>
      </SignedOut>
      <SignedIn>
        <DropdownAvater />
      </SignedIn>
    </nav>
  );
};
export default Navbar;
