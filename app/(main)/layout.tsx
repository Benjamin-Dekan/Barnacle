import Header from "../ui/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="mt-3"></div>
      <Header />
      <main className="flex-1 overflow-y-auto p-8 text-white">{children}</main>
    </div>
  );
}
