"use client";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ type, href, label }: { type: string; href: string; label?: string }) => {
  const currentPath = usePathname();
  const isActiveNavLink = "text-purple-500  duration-300 tracking-wider transition-colors";

  const linkClass =
    "text-gray-500  hover:text-gray-600 hover:text-purple-600 duration-300 tracking-wider transition-colors";

  const navLinkClass = currentPath === href ? isActiveNavLink : linkClass;

  return (
    <Link
      className={
        type === "navlink"
          ? navLinkClass
          : type === "link"
          ? linkClass
          : type === "signin-link"
          ? navLinkClass
          : linkClass
      }
      href={href}>
      {type === "signin-link" && <LogInIcon size="16" className="inline-block ml-2" />}

      {label}
    </Link>
  );
};
export default CustomLink;
