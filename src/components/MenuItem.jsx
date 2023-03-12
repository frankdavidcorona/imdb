import Link from "next/link";

export default function MenuItem(props) {
  return (
    <div>
      <Link href={props.address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <props.icon className="h-6 w-6 sm:hidden mx-2" />
        <p className="text-slate-700 font-bold hidden sm:inline my-2 text-sm hover:underline decoration-amber-500">
          {props.title}
        </p>
      </Link>
    </div>
  );
}
