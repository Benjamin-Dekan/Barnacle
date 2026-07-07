import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#111111]">
      <aside className="w-64 border-r border-gray-800 p-4 text-white">
        <h1 className="text-center text-xl font-bold mb-8">Watch Gallery</h1>

        <ul className="space-y-4">
          <li>
            <Link
              href="/discover"
              className="block px-4 py-3 rounded-lg bg-[#343434] hover:bg-[#232323] transition-colors duration-200"
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              href="/watchlist"
              className="block px-4 py-3 rounded-lg bg-[#343434] hover:bg-[#232323] transition-colors duration-200"
            >
              Watch List
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="block px-4 py-3 rounded-lg bg-[#343434] hover:bg-[#232323] transition-colors duration-200"
            >
              Profile
            </Link>
          </li>
        </ul>
      </aside>

      <main className="flex-1 overflow-y-auto p-8 text-white">{children}</main>
    </div>
  );
}
