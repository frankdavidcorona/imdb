import { HomeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex flex-row">
        <MenuItem title={"HOME"} address={"/"} icon={HomeIcon} />
        <MenuItem
          title={"ABOUT"}
          address={"/about"}
          icon={InformationCircleIcon}
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href={"/"} className="mb-2">
          <h2 className="text-2xl">
            <span className="text-sm text-slate-700 font-bold bg-amber-500 py-1 px-2 rounded-lg mr-3">
              IMDb
            </span>
            <span className="text-sm text-slate-700 dark:text-gray-200 font-bold hidden sm:inline uppercase hover:underline decoration-amber-500">
              Clone
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
