import ToggleTheme from "../ToggleTheme/toggleTheme";

export default function Header() {
  return (
    <div className="w-full h-16 flex justify-between items-center px-4 border-b-2">
      <div className="flex-1"></div>
      <ToggleTheme />
    </div>
  );
}
