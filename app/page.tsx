import Image from "next/image";
import Link from "next/link";
import { Cormorant, Playfair_Display } from "next/font/google";
import { Compass, SlidersHorizontal, Search } from "lucide-react";

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
    <main className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <div>
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
      </div>

      {/* Hero */}
      <section className="py-24 md:py-32 flex items-center">
        <div className="px-6 max-w-[1600px] mx-auto flex flex-col items-center text-center gap-3">
          <h2 className={` ${playfair.className} font-bold text-7xl `}>
            A place for movies to <span className="text-[#A2E0F1]">wash</span>{" "}
            up.
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
      <section>
        <div className="px-8 py-6 gap-3 max-w-[1600px] mx-auto flex flex-col items-stretch sm:flex-row justify-between text-center">
          <div className="flex-1 rounded-xl py-2 px-4 ring-1 ring-[#A2E0F1] bg-[#004B5C]/20 hover:bg-[#004B5C]/20">
            <Compass className="w-6 h-6 mx-auto text-[#A2E0F1]" />
            <h4 className="text-2xl font-semibold">Discover</h4>
            <p className="text-lg text-[#A2E0F1]/80 tracking-wide">
              Explore the top movies today. Browse trending titles, critically
              acclaimed classics, and hidden gems you might have missed.
            </p>
          </div>

          <div className="flex-1 rounded-xl py-2 px-4 ring-1 ring-[#A2E0F1] bg-[#004B5C]/20">
            <SlidersHorizontal className="w-6 h-6 mx-auto text-[#A2E0F1]" />
            <h4 className="text-2xl font-semibold">Filter</h4>
            <p className="text-lg text-[#A2E0F1]/80 tracking-wide">
              Stop checking five apps to find out where a movie is streaming.
              Narrow results to the services you already pay for.
            </p>
          </div>

          <div className="flex-1 rounded-xl py-2 px-4 ring-1 ring-[#A2E0F1] bg-[#004B5C]/20">
            <Search className="w-6 h-6 mx-auto text-[#A2E0F1]" />
            <h4 className="text-2xl font-semibold">Search</h4>
            <p className="text-lg text-[#A2E0F1]/80 tracking-wide">
              Search by title, no matter how well you remember it. Whether you
              know the exact name or you&apos;re just chasing a half-remembered
              title, find it fast.
            </p>
          </div>
        </div>
      </section>

      {/* Pushes wave effect to bottom of visible screen*/}
      <div className="flex-1"></div>

      {/* Footer */}
      <footer>
        <div className="max-w-[1600px] mx-auto h-[clamp(150px,20vw,320px)]">
          <svg
            width="100%"
            height="100%"
            id="svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 590"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <style>{`
          .path-0{
            animation:pathAnim-0 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-0{
            0%{ d: path("M 0,600 L 0,150 C 115.19617224880383,180.2488038277512 230.39234449760767,210.4976076555024 329,220 C 427.60765550239233,229.5023923444976 509.62679425837325,218.2583732057416 608,216 C 706.3732057416267,213.7416267942584 821.1004784688996,220.4688995215311 898,215 C 974.8995215311004,209.5311004784689 1013.9712918660287,191.86602870813397 1098,179 C 1182.0287081339713,166.13397129186603 1311.0143540669856,158.06698564593302 1440,150 L 1440,600 L 0,600 Z"); }
            25%{ d: path("M 0,600 L 0,150 C 89.03349282296651,168.755980861244 178.06698564593302,187.51196172248802 283,177 C 387.933014354067,166.48803827751198 508.7655502392346,126.70813397129187 607,114 C 705.2344497607654,101.29186602870813 780.870813397129,115.65550239234449 857,133 C 933.129186602871,150.3444976076555 1009.7511961722489,170.66985645933013 1107,174 C 1204.248803827751,177.33014354066987 1322.1244019138755,163.66507177033492 1440,150 L 1440,600 L 0,600 Z"); }
            50%{ d: path("M 0,600 L 0,150 C 84.82296650717703,171.5023923444976 169.64593301435406,193.00478468899522 270,185 C 370.35406698564594,176.99521531100478 486.23923444976083,139.48325358851673 599,121 C 711.7607655502392,102.51674641148325 821.3971291866029,103.0622009569378 912,120 C 1002.6028708133971,136.9377990430622 1074.1722488038279,170.26794258373207 1159,178 C 1243.8277511961721,185.73205741626793 1341.9138755980862,167.86602870813397 1440,150 L 1440,600 L 0,600 Z"); }
            75%{ d: path("M 0,600 L 0,150 C 63.1866028708134,185.8755980861244 126.3732057416268,221.75119617224883 239,213 C 351.6267942583732,204.24880382775117 513.6937799043063,150.87081339712918 628,140 C 742.3062200956937,129.12918660287082 808.8516746411483,160.76555023923447 893,164 C 977.1483253588517,167.23444976076553 1078.8995215311004,142.06698564593302 1173,135 C 1267.1004784688996,127.933014354067 1353.5502392344497,138.9665071770335 1440,150 L 1440,600 L 0,600 Z"); }
            100%{ d: path("M 0,600 L 0,150 C 115.19617224880383,180.2488038277512 230.39234449760767,210.4976076555024 329,220 C 427.60765550239233,229.5023923444976 509.62679425837325,218.2583732057416 608,216 C 706.3732057416267,213.7416267942584 821.1004784688996,220.4688995215311 898,215 C 974.8995215311004,209.5311004784689 1013.9712918660287,191.86602870813397 1098,179 C 1182.0287081339713,166.13397129186603 1311.0143540669856,158.06698564593302 1440,150 L 1440,600 L 0,600 Z"); }
          }
          .path-1{
            animation:pathAnim-1 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-1{
            0%{ d: path("M 0,600 L 0,350 C 101.55023923444975,363.82775119617224 203.1004784688995,377.65550239234454 284,359 C 364.8995215311005,340.34449760765546 425.1483253588516,289.20574162679424 524,284 C 622.8516746411484,278.79425837320576 760.3062200956938,319.52153110047846 862,332 C 963.6937799043062,344.47846889952154 1029.6267942583731,328.70813397129183 1120,327 C 1210.3732057416269,325.29186602870817 1325.1866028708134,337.6459330143541 1440,350 L 1440,600 L 0,600 Z"); }
            25%{ d: path("M 0,600 L 0,350 C 78.43062200956936,378.60287081339715 156.86124401913872,407.2057416267943 254,389 C 351.1387559808613,370.7942583732057 466.9856459330143,305.77990430622003 568,278 C 669.0143540669857,250.22009569377994 755.1961722488039,259.6746411483254 841,284 C 926.8038277511961,308.3253588516746 1012.2296650717703,347.52153110047846 1112,361 C 1211.7703349282297,374.47846889952154 1325.8851674641148,362.2392344497608 1440,350 L 1440,600 L 0,600 Z"); }
            50%{ d: path("M 0,600 L 0,350 C 98.32535885167468,382.17224880382776 196.65071770334936,414.34449760765557 279,410 C 361.34928229665064,405.65550239234443 427.72248803827745,364.7942583732057 535,333 C 642.2775119617226,301.2057416267943 790.4593301435407,278.4784688995216 898,295 C 1005.5406698564593,311.5215311004784 1072.4401913875597,367.2918660287081 1156,383 C 1239.5598086124403,398.7081339712919 1339.77990430622,374.35406698564594 1440,350 L 1440,600 L 0,600 Z"); }
            75%{ d: path("M 0,600 L 0,350 C 101.26315789473685,383.0622009569378 202.5263157894737,416.1244019138756 288,405 C 373.4736842105263,393.8755980861244 443.1578947368421,338.5645933014354 552,313 C 660.8421052631579,287.4354066985646 808.8421052631578,291.6172248803828 898,316 C 987.1578947368422,340.3827751196172 1017.4736842105265,384.96650717703346 1098,394 C 1178.5263157894735,403.03349282296654 1309.2631578947367,376.51674641148327 1440,350 L 1440,600 L 0,600 Z"); }
            100%{ d: path("M 0,600 L 0,350 C 101.55023923444975,363.82775119617224 203.1004784688995,377.65550239234454 284,359 C 364.8995215311005,340.34449760765546 425.1483253588516,289.20574162679424 524,284 C 622.8516746411484,278.79425837320576 760.3062200956938,319.52153110047846 862,332 C 963.6937799043062,344.47846889952154 1029.6267942583731,328.70813397129183 1120,327 C 1210.3732057416269,325.29186602870817 1325.1866028708134,337.6459330143541 1440,350 L 1440,600 L 0,600 Z"); }
          }
                `}</style>
            <defs>
              <linearGradient
                id="gradient-1"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <stop offset="5%" stopColor="#004b5c" />
                <stop offset="95%" stopColor="#5eead4" />
              </linearGradient>
              <linearGradient
                id="gradient-2"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <stop offset="5%" stopColor="#004b5c" />
                <stop offset="95%" stopColor="#5eead4" />
              </linearGradient>
            </defs>
            <path
              d="M 0,600 L 0,150 C 115.19617224880383,180.2488038277512 230.39234449760767,210.4976076555024 329,220 C 427.60765550239233,229.5023923444976 509.62679425837325,218.2583732057416 608,216 C 706.3732057416267,213.7416267942584 821.1004784688996,220.4688995215311 898,215 C 974.8995215311004,209.5311004784689 1013.9712918660287,191.86602870813397 1098,179 C 1182.0287081339713,166.13397129186603 1311.0143540669856,158.06698564593302 1440,150 L 1440,600 L 0,600 Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#gradient-1)"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            />
            <path
              d="M 0,600 L 0,350 C 101.55023923444975,363.82775119617224 203.1004784688995,377.65550239234454 284,359 C 364.8995215311005,340.34449760765546 425.1483253588516,289.20574162679424 524,284 C 622.8516746411484,278.79425837320576 760.3062200956938,319.52153110047846 862,332 C 963.6937799043062,344.47846889952154 1029.6267942583731,328.70813397129183 1120,327 C 1210.3732057416269,325.29186602870817 1325.1866028708134,337.6459330143541 1440,350 L 1440,600 L 0,600 Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#gradient-2)"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            />
          </svg>
        </div>
      </footer>
    </main>
  );
}
