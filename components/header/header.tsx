import Link from "next/link";

import { HomeIcon } from "@/components/icons";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="w-full px-8 py-4 shadow-md shadow-gray-300">
      <Navbar />
    </header>
  );
};
export default Header;
