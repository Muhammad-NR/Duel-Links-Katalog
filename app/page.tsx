"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CARDS_DATA, DECKS_DATA } from "@/lib/data"
import { Star } from "lucide-react"


export default function Home() {
  const topMetaCards = CARDS_DATA.filter((card) => 
  ["42", "2", "3", "4", "25", "23"].includes(card.id))   
  const topMetaDecks = DECKS_DATA.filter((deck) => 
  ["1", "2", "3",].includes(deck.id))

  return (
    <main className="min-h-screen bg-background pb-24 pt-6">
        {/* Header */}
        <div className="pt-10 pl-3 md:pl-5 space-y-4 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block">
                Yu-Gi-Oh Duel Links
            </h1>
            <h2 className="text-2xl text-foreground/80">Explore cards, discover meta decks, and master the game</h2>
          </div>
        </div>

      {/* Popular Cards Section */}
      <section className="px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular Cards</h2>
          <Link href="/cards">
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topMetaCards.map((card) => (
            <Link key={card.id} href={`/cards/${card.id}`}>
              <div className="group bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/60 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                
                <div className="aspect-video bg-black relative overflow-hidden">
                    <img
                        src={card.image || `/.jpg?height=613&width=420&query=${encodeURIComponent(card.name)}`}
                        alt={card.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="p-4 space-y-2 flex flex-col flex-grow -mt-8 relative z-10">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {card.name}
                    </h3>
                    
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{card.type}</span>
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded font-medium">{card.rarity}</span>
                    </div>

                    {card.type === "Monster" && (
                        <div className="grid grid-cols-2 gap-2 text-xs mt-auto pt-3">
                            {card.atk !== undefined && (
                                <div className="bg-background/80 p-2 rounded text-center border border-border shadow-sm">
                                    <span className="text-muted-foreground block mb-1">ATK</span>
                                    <span className="font-bold text-accent text-sm">{card.atk}</span>
                                </div>
                            )}
                            
                            {card.LINK !== undefined ? (
                                <div className="bg-background/80 p-2 rounded text-center border border-blue-900/50 shadow-sm">
                                    <span className="text-muted-foreground block mb-1">LINK</span>
                                    <span className="font-bold text-blue-400 text-sm">{card.LINK}</span>
                                </div>
                            ) : card.def !== undefined ? (
                                <div className="bg-background/80 p-2 rounded text-center border border-border shadow-sm">
                                    <span className="text-muted-foreground block mb-1">DEF</span>
                                    <span className="font-bold text-primary text-sm">{card.def}</span>
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Meta Decks</h2>
          <Link href="/decks">
            <Button variant="ghost" size="sm">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topMetaDecks.map((deck) => (
            <Link key={deck.id} href={`/decks/${deck.id}`}>
              <div className="group bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/60 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col min-h-[350px]">
                
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-5 border-b border-primary/20">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {deck.name}
                    </h3>
                    <div className={`text-base font-bold px-4 py-1.5 rounded shadow-md text-white whitespace-nowrap "bg-gray-600"}`}>
                      Tier {deck.tier}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6 flex flex-col flex-grow">
                  
                  <p className="text-base text-muted-foreground line-clamp-3 leading-relaxed">
                    {deck.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="bg-background/50 p-3 rounded border border-border/50">
                      <p className="text-muted-foreground text-sm mb-1">Win Rate</p>
                      <p className="font-bold text-accent text-xl">{deck.winRate}%</p>
                    </div>
                    <div className="bg-background/50 p-3 rounded border border-border/50">
                      <p className="text-muted-foreground text-sm mb-1">Usage</p>
                      <p className="font-bold text-primary text-xl">{deck.usage}%</p>
                    </div>
                    
                    <div className="bg-background/50 p-3 rounded border border-border/50">
                      <p className="text-muted-foreground text-sm mb-1">Difficulty</p>
                      <div className="flex gap-1.5 mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-2 rounded-full ${
                              i < Math.ceil(deck.difficulty / 2) ? "bg-accent" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-background/50 p-3 rounded border border-border/50">
                      <p className="text-muted-foreground text-sm mb-1">Popularity</p>
                      <div className="flex gap-2 items-center mt-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-xl">{deck.popularity}/5</span>
                      </div>
                    </div>
                  </div>

                  {deck.strategy && (
                    <p className="text-sm text-muted-foreground italic border-l-4 border-accent pl-4 py-2">
                      "{deck.strategy.substring(0, 80)}..."
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          <Link href="/cards">
            <Button className="w-full h-12 bg-secondary hover:bg-blue-600 hover:text-white transition-all duration-300">
              Browse All Cards
            </Button>
          </Link>
          <Link href="/decks">
            <Button className="w-full h-12 bg-secondary hover:bg-red-600 hover:text-white transition-all duration-300">
              Meta Decks
            </Button>
          </Link>
        </div>
      </section>

      <Navigation />
    </main>
  )
}