import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 border-b-2 border-accentLightPrimary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/70 z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-4xl text-primary dark:text-primaryDark font-bold">
            BLOG<span className="text-4xl text-accentLightPrimary">NAME</span>
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-8 md:gap-x-16 font-semibold uppercase text-sm">
          <Link href={"/"}>Home</Link>
          <Link href={"/articles"}>Articles</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
        </nav>
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
