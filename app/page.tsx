import Image from "next/image";
import Link from "next/link";
import { Cormorant, Playfair_Display } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

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
            <h1 className={` ${cormorant.className} font-medium text-3xl`}>
              Barnacle
            </h1>
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
      <section className="min-h-[85vh] flex items-center">
        <div className="px-6 max-w-[1600px] mx-auto flex flex-col items-center text-center gap-2">
          <h2 className={` ${playfair.className} font-bold text-7xl `}>
            A place for movies to wash up.
          </h2>
          <h3 className="text-xl text-white/70">
            Search any movie, filter by streaming service, and keep a list of
            what&apos;s worth watching.
          </h3>
          <Link
            href="/discover"
            className="rounded-full mt-2 px-6 py-2 bg-[#004B5C] text-lg text-[#A2E0F1] transition-all duration-300 hover:shadow-[0_0_20px_#007B92]"
          >
            Dive Deep
          </Link>
        </div>
      </section>

      {/* Features */}
      <section></section>

      {/* Footer */}
      <footer></footer>
    </main>
  );
}
