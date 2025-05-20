import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import GamePreview from "@/components/game-preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-800">
                KUN FOR UNDERHOLDNING
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skogens Vokter</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bli skogens vokter, samle bær og sopp, ta vare på skogen og beskytt den mot farer i dette avslappende og
                engasjerende spillet.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto flex justify-center">
              <Image
                src="/norwegian-forest-mushrooms-berries.png"
                alt="Norsk skog"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Description */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Om Skogens Vokter</h2>
              <p className="text-muted-foreground">
                Skogens Vokter er et avslappende spill der du tar rollen som den glade skogvokteren. Din oppgave er å
                samle bær, sopp og andre ressurser, samtidig som du tar vare på skogen og beskytter den mot farer.
              </p>
              <p className="text-muted-foreground">
                I dette spillet kan du oppleve gleden ved å utforske skogen gjennom alle fire årstider, hver med sine
                unike utfordringer og muligheter. Du må ta hensyn til værforhold, dyreliv og naturens syklus for å
                lykkes som skogens vokter.
              </p>
              <p className="text-muted-foreground">
                Som skogvokter vil du oppdage skogens hemmeligheter, møte vennlige skapninger og samle naturens skatter.
                Hver dag bringer nye eventyr og muligheter til å lære mer om skogens økosystem og hvordan du kan bidra
                til å bevare det.
              </p>
              <p className="font-medium">
                Skogens Vokter er designet for å være en avslappende og underholdende opplevelse for spillere i alle
                aldre. Det er ingen tidsbegrensninger eller stressende elementer - bare ren glede av å utforske og ta
                vare på naturen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Samle Ressurser</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Samle bær, sopp, urter og andre ressurser fra skogen for å øke din poengsum.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Beskytt Skogen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Beskytt skogen mot farer som skogbrann, forurensning og ulovlig hogst.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Opplev Årstidene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Opplev alle fire årstider med unike utfordringer og muligheter for hver sesong.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Utforsk Skogen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Utforsk forskjellige deler av skogen, fra tette granskoger til åpne lysninger.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Game Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bli Skogens Vokter</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ta på deg rollen som den glade skogvokteren Lars, samle bær og sopp, og beskytt skogen mot farer
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl mt-12">
            <GamePreview />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              <strong>MERK:</strong> Dette er et sosialt spill kun for underholdning. Ingen ekte penger er involvert,
              ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
            </p>
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skogens Skatter</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Utforsk mangfoldet av bær, sopp og andre ressurser du kan samle i Skogens Vokter
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Blåbær</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/blueberries.png"
                  alt="Blåbær"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p>En næringsrik bær som er vanlig i norske skoger og gir god poengsum.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kantarell</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/golden-chanterelle.png"
                  alt="Kantarell"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p>En verdifull matsopp som gir høy poengsum når du finner den.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tyttebær</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/lingonberries.png"
                  alt="Tyttebær"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p>En syrlig bær som er rik på antioksidanter og gir god poengsum.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Steinsopp</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/porcini-mushroom.png"
                  alt="Steinsopp"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p>En ettertraktet matsopp som gir høy poengsum når du finner den.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multer</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/cloudberries.png"
                  alt="Multer"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p>En sjelden og verdifull bær som gir ekstra høy poengsum.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grankongle</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/single-pine-cone.png"
                  alt="Grankongle"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p>En vanlig ressurs i skogen som gir lav poengsum, men er lett å finne.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Historien om Skogens Vokter</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Opplev eventyret til den glade skogvokteren som lever i harmoni med naturen
            </p>
          </div>

          <div className="mx-auto max-w-3xl mt-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/forest-ranger.png"
                  alt="Skogvokteren"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-xl font-bold">Møt Skogvokteren</h3>
                <p>
                  Dypt inne i den norske skogen bor en glad skogvokter ved navn Lars. Han har viet livet sitt til å ta
                  vare på skogen og alle dens innbyggere. Hver morgen står han opp ved soloppgang, klar til å utforske
                  skogens hemmeligheter og beskytte dens skjønnhet.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3 space-y-4 md:order-1">
                <h3 className="text-xl font-bold">Skogens Visdom</h3>
                <p>
                  Lars har lært skogens visdom gjennom årene. Han kjenner hver sti, hvert tre og hver plante. Han vet
                  når bærene er modne for høsting, hvilke sopper som er spiselige, og hvordan man kan leve i harmoni med
                  naturen. Denne kunnskapen deler han gjerne med alle som besøker skogen.
                </p>
              </div>
              <div className="md:w-1/3 md:order-2">
                <Image
                  src="/forest-wisdom-nature.png"
                  alt="Skogens visdom"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/forest-protection.png"
                  alt="Beskytte skogen"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-xl font-bold">Beskytteren</h3>
                <p>
                  Som skogens vokter er Lars alltid på vakt mot farer som truer skogen. Han slukker små skogbranner før
                  de blir store, plukker opp søppel etterlatt av besøkende, og sørger for at dyrene i skogen har et
                  trygt hjem. Hans kjærlighet til skogen er ubegrenset, og han vil gjøre alt for å beskytte den.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ofte stilte spørsmål</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Finn svar på de vanligste spørsmålene om Skogens Vokter
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Hvordan spiller jeg Skogens Vokter?</AccordionTrigger>
                <AccordionContent>
                  Skogens Vokter er enkelt å spille. Bare klikk på "Spill Nå" knappen og følg instruksjonene på
                  skjermen. Spillet går ut på å matche 3 eller flere like symboler for å samle poeng.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Er Skogens Vokter gratis å spille?</AccordionTrigger>
                <AccordionContent>
                  Ja, Skogens Vokter er helt gratis å spille. Det er ingen ekte penger involvert, ingen premier eller
                  belønninger, og ingen virtuelle gjenstander har noen reell verdi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Kan jeg spille på mobilen min?</AccordionTrigger>
                <AccordionContent>
                  Ja, Skogens Vokter er fullt responsivt og kan spilles på alle enheter, inkludert smarttelefoner og
                  nettbrett.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Hvordan fungerer poengene i spillet?</AccordionTrigger>
                <AccordionContent>
                  Du får poeng ved å matche 3 eller flere like symboler i rad, kolonne eller diagonal. Forskjellige
                  symboler gir forskjellig antall poeng. For eksempel gir sjeldne ressurser som multer og steinsopp
                  flere poeng enn vanlige ressurser som grankonglet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Kan jeg lagre fremgangen min i spillet?</AccordionTrigger>
                <AccordionContent>
                  Ja, fremgangen din lagres automatisk i nettleseren din. For å sikre at fremgangen din ikke går tapt,
                  anbefaler vi at du bruker samme enhet og nettleser hver gang du spiller.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Hvordan kan jeg kontakte support hvis jeg har problemer?</AccordionTrigger>
                <AccordionContent>
                  Du kan kontakte vår support ved å sende en e-post til info@runesparkstudio.com eller ved å bruke
                  kontaktskjemaet på vår kontaktside.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
