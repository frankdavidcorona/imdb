import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-6">
      <NavbarItem title={"Trending"} param={"fetchTrending"} />
      <NavbarItem title={"Top Rated"} param={"fetchTopRated"} />
    </div>
  );
}
