import Image from "next/image";

export default function loading() {
  return (
    <div className="flex mx-auto justify-center mt-24">
      <Image src={"spinner.svg"} alt="spinner" width={100} height={75} />
    </div>
  );
}
