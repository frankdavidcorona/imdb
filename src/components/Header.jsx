import { HomeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
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
      <div className="">
        <Link href={"/"}>
          <h2 className="text-2xl">
            <span className="text-sm text-slate-700 font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-sm text-slate-700 font-bold hidden sm:inline uppercase hover:underline decoration-amber-500">
              Clone
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
