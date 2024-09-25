import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";

export default function Header() {
  return (
    <header className="flex justify-center items-center fixed h-20 w-screen bg-white/10 backdrop-blur-sm">
      <nav className="flex justify-between items-center w-9/12 p-3 box-border">
        <Image width={150} height={0} src={logo.src} alt="herbalife-logo" />
        <ul className="flex">
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
        <div>teste</div>
      </nav>
    </header>
  );
}
