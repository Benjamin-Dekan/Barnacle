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
              className="block px-4 py-3 rounded-lg hover:bg-[#343434]"
            >
              Discover Movies
            </Link>
          </li>
          <li>
            <Link
              href="/watchlist"
              className="block px-4 py-3 rounded-lg hover:bg-[#343434]"
            >
              Watch List
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="block px-4 py-3 rounded-lg hover:bg-[#343434]"
            >
              Profile
            </Link>
          </li>
        </ul>
      </aside>

      {/* RIGHT SIDE: The Page Content */}
      {/* flex-1 tells this side to take up all the remaining space. overflow-y-auto lets it scroll. */}
      <main className="flex-1 overflow-y-auto p-8 text-white">{children}</main>
    </div>
  );
}
