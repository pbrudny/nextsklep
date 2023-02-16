import Link from "next/link";

export function Header() {
  return <header className={"max-w-md mx-auto w-full"}>
    <nav className={"bg-gray-700 text-white px-4 py-2"}>
      <Link href={"/"}>
        Główna
      </Link>
      <Link href={"/about"}>
        About
      </Link>
    </nav>
  </header>;
}
