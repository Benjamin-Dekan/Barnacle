import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navigation Bar */}
      <header className="p-6 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/barnacle.svg"
              width={52}
              height={52}
              alt="Picture of barnacle logo"
            />
            <h1 className="text-3xl font-medium">Barnacle</h1>
          </div>

          <Link
            href="/discover"
            className="rounded-full px-4 py-2 bg-black/50 backdrop-blur-md ring-1 ring-white/10 hover:bg-black/70 transition-colors active:scale-95"
          >
            Enter site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="px-6 max-w-[1600px] mx-auto flex flex-col items-start gap-2">
          <h2 className="font-bold text-6xl">A place for movies to wash up.</h2>
          <h3 className="">
            Search any movie, filter by streaming service, and keep a list of
            what's worth watching.
          </h3>
          <Link href="/discover">Dive Deep</Link>
        </div>
      </section>

      {/* Features */}
      <section></section>

      {/* Footer */}
      <footer></footer>
    </main>
  );
}
