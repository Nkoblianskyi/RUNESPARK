"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ForestGameGrid from "@/components/forest-game-grid"

export default function GamePage() {
  const [isVerified, setIsVerified] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if the user has verified their age in this session
    const sessionVerified = sessionStorage.getItem("ageVerified")
    if (sessionVerified === "true") {
      setIsVerified(true)
    } else {
      // If not verified, redirect to home page
      router.push("/")
    }
  }, [router])

  if (!isVerified) {
    return null // Don't render anything while checking or redirecting
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skogens Vokter</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Hjelp Lars med å samle bær, sopp og andre ressurser fra skogen. Match 3 eller flere like symboler for å
            fylle kurven din og beskytte skogen!
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-center">Lars - Skogens Vokter</CardTitle>
              <CardDescription className="text-center">
                Match 3 eller flere like ressurser for å hjelpe Lars
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ForestGameGrid />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>MERK:</strong> Dette er et sosialt spill kun for underholdning. Ingen ekte penger er involvert,
            ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
          </p>
        </div>

        <Button asChild variant="outline">
          <Link href="/">Tilbake til Hjem</Link>
        </Button>
      </div>
    </div>
  )
}
