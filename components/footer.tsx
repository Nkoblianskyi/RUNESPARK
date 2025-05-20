import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-black/10">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">RuneSpark Studio</h3>
            <p className="text-sm text-muted-foreground">
              Sosial plattform for underholdning. Ingen ekte penger er involvert, ingen premier eller belønninger.
            </p>
            <div className="flex items-center space-x-2">
              <div className="border border-red-500 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 rounded px-2 py-1 text-sm font-bold">
                18+
              </div>
              <span className="text-sm">Aldersgrense</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Juridisk Informasjon</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vilkar" className="text-sm text-muted-foreground hover:text-foreground">
                  Vilkår og Betingelser
                </Link>
              </li>
              <li>
                <Link href="/personvern" className="text-sm text-muted-foreground hover:text-foreground">
                  Personvern
                </Link>
              </li>
              <li>
                <Link href="/ansvarsfraskrivelse" className="text-sm text-muted-foreground hover:text-foreground">
                  Ansvarsfraskrivelse
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                  Informasjonskapsler
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>RuneSpark Studio</p>
              <p>Bryggen 13, 5003 Bergen, Norway</p>
              <p>
                <a href="mailto:info@runesparkstudio.com" className="hover:text-foreground">
                  info@runesparkstudio.com
                </a>
              </p>
              <p>
                <a href="tel:+4791748602" className="hover:text-foreground">
                  +47 917 486 021
                </a>
              </p>
            </address>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Støtte</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.hjelpelinjen.no"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground bg-black w-40 p-4"
              >
                <Image
                  src="/aware.webp"
                  alt="Hjelpelinjen logo"
                  width={100}
                  height={30}
                  className="h-14 w-auto"
                />
              </a>
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground bg-black w-40 p-4"
              >
                <Image src="/aware2.png" alt="GamCare logo" width={100} height={30} className="h-10 w-auto" />
              </a>
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground bg-black w-40 p-4"
              >
                <Image
                  src="/aware1.webp"
                  alt="GambleAware logo"
                  width={100}
                  height={30}
                  className="h-18 w-40"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RuneSpark Studio. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  )
}
