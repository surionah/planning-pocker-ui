import ToggleTheme from "../ToggleTheme/toggleTheme";

export default function Header() {
  return (
    <div className="w-full h-12 flex justify-between items-center px-4">
      <div className="flex-1"></div>
      <ToggleTheme />
    </div>
  );
}
