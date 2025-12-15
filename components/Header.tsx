import { MountainIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
      <div className="flex items-center space-x-2">
        <MountainIcon className="h-6 w-6" />
        <h1 className="text-lg font-bold">TravelBuddy</h1>
      </div>
    </header>
  );
}