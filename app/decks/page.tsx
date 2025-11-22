"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { DECKS_DATA } from "@/lib/data"
import { ChevronRight } from "lucide-react"

export default function DecksPage() {
  const [selectedTier, setSelectedTier] = useState("all")

  const tiers = ["all", "S", "A", "B", "C"]

  const filteredDecks = selectedTier === "all" ? DECKS_DATA : DECKS_DATA.filter((d) => d.tier === selectedTier)

  const tierColors = {
    S: "bg-red-500/20 text-red-400 border-red-500/50",
    A: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    B: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    C: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  }

  return (
      <main className="min-h-screen bg-background pb-24 pt-6">
        <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="space-y-4 pt-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Meta Decks</h1>
            <p className="text-muted-foreground">Current competitive tier list</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {tiers.map((tier) => (
              <Button
                key={tier}
                variant={selectedTier === tier ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier(tier)}
                className={selectedTier === tier && tier !== "all" ? tierColors[tier as keyof typeof tierColors] : ""}
              >
                {tier === "all" ? "All Tiers" : `Tier ${tier}`}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredDecks.map((deck) => (
            <Link key={deck.id} href={`/decks/${deck.id}`}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{deck.name}</h2>
                      <span
                        className={`px-3 py-1 rounded font-bold border ${tierColors[deck.tier as keyof typeof tierColors]}`}
                      >
                        TIER {deck.tier}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{deck.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {deck.mainCards?.slice(0, 3).map((card, i) => (
                        <span key={i} className="text-ms bg-secondary/20 text-gray-500 px-2 py-1 rounded">
                          {card}
                        </span>
                      ))}
                      {deck.mainCards && deck.mainCards.length > 3 && (
                        <span className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded">
                          +{deck.mainCards.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Navigation />
    </main>
  )
}
