"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, MouseIcon as Mushroom, Cherry, Flower, TreesIcon as Tree, Bug } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

type ItemType = "leaf" | "mushroom" | "berry" | "flower" | "tree" | "bug"

interface Item {
  type: ItemType
  isSpinning: boolean
  isMatched: boolean
}

const itemIcons: Record<ItemType, React.ReactNode> = {
  leaf: <Leaf className="h-8 w-8 text-green-500" />,
  mushroom: <Mushroom className="h-8 w-8 text-amber-600" />,
  berry: <Cherry className="h-8 w-8 text-red-500" />,
  flower: <Flower className="h-8 w-8 text-purple-500" />,
  tree: <Tree className="h-8 w-8 text-emerald-600" />,
  bug: <Bug className="h-8 w-8 text-gray-600" />,
}

const itemPoints: Record<ItemType, number> = {
  leaf: 5,
  mushroom: 15,
  berry: 10,
  flower: 8,
  tree: 12,
  bug: -5, // Negative points for bugs
}

const itemNames: Record<ItemType, string> = {
  leaf: "Blad",
  mushroom: "Sopp",
  berry: "Bær",
  flower: "Blomst",
  tree: "Tre",
  bug: "Insekt",
}

export default function ForestGameGrid() {
  const [grid, setGrid] = useState<Item[][]>([])
  const [isSpinning, setIsSpinning] = useState(false)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState("")
  const [lastPoints, setLastPoints] = useState<number | null>(null)
  const [highScore, setHighScore] = useState(0)
  const [spinCount, setSpinCount] = useState(0)
  const [level, setLevel] = useState(1)
  const [levelProgress, setLevelProgress] = useState(0)

  // Initialize grid and load saved data
  useEffect(() => {
    initializeGrid()

    // Load saved high score from localStorage
    const savedHighScore = localStorage.getItem("forestGameHighScore")
    if (savedHighScore) {
      setHighScore(Number.parseInt(savedHighScore))
    }
  }, [])

  // Save high score when it changes
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem("forestGameHighScore", score.toString())
    }
  }, [score, highScore])

  // Update level based on score
  useEffect(() => {
    const newLevel = Math.floor(score / 100) + 1
    if (newLevel !== level) {
      setLevel(newLevel)
      setMessage(`Gratulerer! Du har nådd nivå ${newLevel}!`)
    }

    const progress = score % 100
    setLevelProgress(progress)
  }, [score, level])

  const initializeGrid = () => {
    const types: ItemType[] = ["leaf", "mushroom", "berry", "flower", "tree", "bug"]
    const newGrid: Item[][] = []

    for (let i = 0; i < 3; i++) {
      const row: Item[] = []
      for (let j = 0; j < 3; j++) {
        const randomType = types[Math.floor(Math.random() * types.length)]
        row.push({
          type: randomType,
          isSpinning: false,
          isMatched: false,
        })
      }
      newGrid.push(row)
    }

    setGrid(newGrid)
  }

  const spinGrid = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setMessage("")
    setLastPoints(null)
    setSpinCount((prev) => prev + 1)

    // Mark all items as spinning
    setGrid((prev) => prev.map((row) => row.map((item) => ({ ...item, isSpinning: true, isMatched: false }))))

    // Simulate spinning animation
    const spinDuration = 2000
    const spinInterval = 100
    let elapsed = 0

    const spinTimer = setInterval(() => {
      elapsed += spinInterval

      // Update grid with random items during spin
      setGrid((prev) =>
        prev.map((row) =>
          row.map((item) => {
            if (!item.isSpinning) return item

            const types: ItemType[] = ["leaf", "mushroom", "berry", "flower", "tree", "bug"]
            const randomType = types[Math.floor(Math.random() * types.length)]

            return {
              ...item,
              type: randomType,
            }
          }),
        ),
      )

      // End spinning
      if (elapsed >= spinDuration) {
        clearInterval(spinTimer)

        // Generate final grid
        const types: ItemType[] = ["leaf", "mushroom", "berry", "flower", "tree", "bug"]
        const finalGrid: Item[][] = []

        // Higher chance of bugs as level increases (but capped)
        const bugChance = Math.min(0.05 + level * 0.02, 0.25)

        for (let i = 0; i < 3; i++) {
          const row: Item[] = []
          for (let j = 0; j < 3; j++) {
            // Determine if this cell will be a bug based on bugChance
            const isBug = Math.random() < bugChance

            let randomType: ItemType
            if (isBug) {
              randomType = "bug"
            } else {
              // Filter out bug from possible types
              const nonBugTypes: ItemType[] = types.filter((type) => type !== "bug")
              randomType = nonBugTypes[Math.floor(Math.random() * nonBugTypes.length)]
            }

            row.push({
              type: randomType,
              isSpinning: false,
              isMatched: false,
            })
          }
          finalGrid.push(row)
        }

        setGrid(finalGrid)
        checkMatches(finalGrid)
        setIsSpinning(false)
      }
    }, spinInterval)
  }

  const checkMatches = (currentGrid: Item[][]) => {
    const newGrid = JSON.parse(JSON.stringify(currentGrid))
    let pointsEarned = 0
    let matchFound = false
    const matchedItems: { type: ItemType; count: number }[] = []

    // Check rows
    for (let i = 0; i < 3; i++) {
      if (currentGrid[i][0].type === currentGrid[i][1].type && currentGrid[i][1].type === currentGrid[i][2].type) {
        const itemType = currentGrid[i][0].type
        newGrid[i][0].isMatched = true
        newGrid[i][1].isMatched = true
        newGrid[i][2].isMatched = true

        const basePoints = itemPoints[itemType] * 3
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        const totalPoints = itemType === "bug" ? basePoints : basePoints + levelBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 3 })
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (currentGrid[0][j].type === currentGrid[1][j].type && currentGrid[1][j].type === currentGrid[2][j].type) {
        const itemType = currentGrid[0][j].type
        newGrid[0][j].isMatched = true
        newGrid[1][j].isMatched = true
        newGrid[2][j].isMatched = true

        const basePoints = itemPoints[itemType] * 3
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        const totalPoints = itemType === "bug" ? basePoints : basePoints + levelBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 3 })
      }
    }

    // Check diagonals
    if (currentGrid[0][0].type === currentGrid[1][1].type && currentGrid[1][1].type === currentGrid[2][2].type) {
      const itemType = currentGrid[0][0].type
      newGrid[0][0].isMatched = true
      newGrid[1][1].isMatched = true
      newGrid[2][2].isMatched = true

      const basePoints = itemPoints[itemType] * 3
      // Bonus points for higher levels
      const levelBonus = Math.floor(level / 2)
      const totalPoints = itemType === "bug" ? basePoints : basePoints + levelBonus

      pointsEarned += totalPoints
      matchFound = true
      matchedItems.push({ type: itemType, count: 3 })
    }

    if (currentGrid[0][2].type === currentGrid[1][1].type && currentGrid[1][1].type === currentGrid[2][0].type) {
      const itemType = currentGrid[0][2].type
      newGrid[0][2].isMatched = true
      newGrid[1][1].isMatched = true
      newGrid[2][0].isMatched = true

      const basePoints = itemPoints[itemType] * 3
      // Bonus points for higher levels
      const levelBonus = Math.floor(level / 2)
      const totalPoints = itemType === "bug" ? basePoints : basePoints + levelBonus

      pointsEarned += totalPoints
      matchFound = true
      matchedItems.push({ type: itemType, count: 3 })
    }

    setGrid(newGrid)

    // Count bugs if no matches were found
    if (!matchFound) {
      let bugCount = 0
      currentGrid.forEach((row) => {
        row.forEach((item) => {
          if (item.type === "bug") {
            bugCount++
          }
        })
      })

      // Subtract points for bugs when no matches are found
      if (bugCount > 0) {
        const bugPenalty = bugCount * Math.abs(itemPoints.bug)
        pointsEarned -= bugPenalty
        matchedItems.push({ type: "bug", count: bugCount })
        setMessage(`Ingen treff! ${bugCount} insekter ga -${bugPenalty} poeng.`)
      } else {
        setMessage("Ingen treff denne gangen. Prøv igjen!")
      }
    } else {
      // Create message for matches
      const matchMessages = matchedItems
        .map((item) => {
          const pointValue = item.count * itemPoints[item.type]
          const sign = pointValue >= 0 ? "+" : ""
          return `${item.count}x ${itemNames[item.type]}: ${sign}${pointValue}`
        })
        .join(", ")

      setMessage(`${matchFound ? "Bra jobbet!" : "Ingen treff!"} ${matchMessages}`)
    }

    // Update score
    setScore((prev) => Math.max(0, prev + pointsEarned)) // Prevent negative scores
    setLastPoints(pointsEarned)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-lg">
            <span className="font-medium">Poeng:</span> {score}
          </div>
          <div className="text-sm text-muted-foreground">Høyeste: {highScore}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">Nivå {level}</div>
          <div className="text-xs text-muted-foreground">{levelProgress}/100</div>
        </div>
        <Progress value={levelProgress} className="h-2" />
      </div>

      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
        {grid.map((row, rowIndex) =>
          row.map((item, colIndex) => (
            <Card
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                "flex items-center justify-center p-4 h-20 w-20 transition-all",
                item.isSpinning && "animate-pulse",
                item.isMatched && "bg-green-100 dark:bg-green-900 border-green-500",
                item.type === "bug" &&
                  !item.isMatched &&
                  "bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800",
              )}
            >
              {itemIcons[item.type]}
            </Card>
          )),
        )}
      </div>

      <div className="h-12 text-center">
        {message && (
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium">{message}</p>
            {lastPoints !== null && (
              <Badge
                className={cn(
                  "mt-1",
                  lastPoints > 0
                    ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300"
                    : lastPoints < 0
                      ? "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-300"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300",
                )}
              >
                {lastPoints > 0 ? `+${lastPoints}` : lastPoints}
              </Badge>
            )}
          </div>
        )}
      </div>

      <Button onClick={spinGrid} disabled={isSpinning} className="w-full">
        {isSpinning ? "Spinner..." : "Spinn"}
      </Button>

      <div className="text-xs text-muted-foreground text-center mt-2 space-y-1">
        <p>Match 3 like symboler i rad, kolonne eller diagonal for å få poeng.</p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>
            <span className="text-green-500">●</span> Blad: 5p
          </span>
          <span>
            <span className="text-amber-600">●</span> Sopp: 15p
          </span>
          <span>
            <span className="text-red-500">●</span> Bær: 10p
          </span>
          <span>
            <span className="text-purple-500">●</span> Blomst: 8p
          </span>
          <span>
            <span className="text-emerald-600">●</span> Tre: 12p
          </span>
          <span>
            <span className="text-red-600">●</span> Insekt: -5p
          </span>
        </div>
        <p>Insekter gir minuspoeng! Prøv å unngå dem.</p>
      </div>
    </div>
  )
}
