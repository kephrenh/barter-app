import Link from "next/link";
import { SignOutButton } from "./sign-out-button";

const DropdownAvater = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content opacity-90 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link href={"/profile"} className="justify-between">
            Profil
          </Link>
        </li>
        <li>
          <Link href={"/parametres"}>Paramêtres</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
};
export default DropdownAvater;
