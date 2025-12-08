// src/Components/Navbar.jsx
import { Menu, X, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header>
      <div className="z-50 fixed top-0 right-0 container w-full mx-auto flex items-center justify-end h-16">
        <ThemeToggle />
      </div>
    </header>
  );
}
