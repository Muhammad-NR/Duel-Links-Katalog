"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, Star, Trophy, Sparkles } from "lucide-react"
import { Card, Deck } from "@/lib/def"

export default function Home() {
  const [featuredCards, setFeaturedCards] = useState<Card[]>([])
  const [topDecks, setTopDecks] = useState<Deck[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        
        const [cardsRes, decksRes] = await Promise.all([
            fetch('/api/cards'),
            fetch('/api/decks')
        ])

        if (cardsRes.ok) {
            const data: Card[] = await cardsRes.json()
          const targetIds = [70, 25, 3, 20,]
          const Rare = data.filter(card => targetIds.includes(parseInt(card.id)))
            setFeaturedCards(Rare.length > 0 ? Rare : data.slice(0, 4))
        }

        if (decksRes.ok) {
            const data: Deck[] = await decksRes.json()
            const sTier = data.filter(d => d.tier === 'S' || d.tier === 'A').slice(0, 3)
            setTopDecks(sTier.length > 0 ? sTier : data.slice(0, 3))
        }

      } catch (error) {
        console.error("Error fetching home data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
         <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
         <p className="text-muted-foreground animate-pulse">Entering Duel World...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black pb-24">
      
      {/* --- HERO SECTION (TAMPILAN LEBIH RAPAT) --- */}
      <div className="relative h-[280px] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-[url('/icon.jpg')] bg-cover bg-center opacity-30 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          
          {/* JUDUL UTAMA - Style Gradasi Simpel */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 pb-2 drop-shadow-sm">
            Yu-Gi-Oh Duel Links
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto font-medium">
            Explore cards, discover meta decks, and master the game
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/cards">
                {/* UPDATE: Tombol Browse Cards jadi bg biasa, hover biru */}
                <Button size="lg" className="h-12 px-20 text-base bg-white/10 hover:bg-blue-600 text-white transition-all hover:scale-105 font-bold rounded-full border border-white/10 hover:border-blue-600">
                   Browse Cards
                </Button>
             </Link>
             <Link href="/decks">
                {/* UPDATE: Tombol Meta Decks hover jadi biru juga */}
                <Button size="lg" className="h-12 px-20 text-base bg-white/10 hover:bg-red-600 text-white transition-all hover:scale-105 font-bold rounded-full border border-white/10 hover:border-red-600">
                   See Meta Decks
                </Button>
             </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* --- POPULAR CARDS SECTION --- */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" /> 
                    Popular Cards
                </h2>
                <p className="text-muted-foreground mt-1">Most played cards this week</p>
            </div>
            <Link href="/cards">
                <Button variant="ghost" className="group text-white hover:text-white">
                    View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredCards.map((card) => (
                <Link key={card.id} href={`/cards/${card.id}`} className="group">
                    <div className="relative aspect-[420/613] rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500 transition-all group-hover:scale-105 shadow-lg">
                        <img 
                            src={card.image || "/bg-card.webp"} 
                            alt={card.name} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <div>
                                <p className="text-white font-bold text-sm line-clamp-1">{card.name}</p>
                                <p className="text-blue-300 text-xs font-bold">{card.rarity}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
          </div>
        </section>

        {/* --- TOP META DECKS SECTION --- */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
                    <Trophy className="w-6 h-6 text-orange-500 fill-orange-500" /> 
                    Top Meta Decks
                </h2>
                <p className="text-muted-foreground mt-1">Dominating the current ranked season</p>
            </div>
            <Link href="/decks">
                <Button variant="ghost" className="group text-white  hover:text-white">
                    Tier List <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {topDecks.map((deck) => (
                 <Link key={deck.id} href={`/decks/${deck.id}`}>
                     <div className="bg-card border border-border rounded-xl p-6 hover:border-orange-500/50 hover:bg-secondary/20 transition-all group cursor-pointer h-full flex flex-col justify-between">
                         <div>
                             <div className="flex justify-between items-start mb-4">
                                 <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/30 rounded font-bold text-sm">
                                     TIER {deck.tier}
                                 </span>
                                 <div className="flex flex-col items-end">
                                     <span className="text-sm font-bold text-green-400">{deck.winRate}% WR</span>
                                     <span className="text-xs text-muted-foreground">{deck.usage}% Usage</span>
                                 </div>
                             </div>
                             <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">{deck.name}</h3>
                             <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{deck.description}</p>
                         </div>
                         
                         {/* Mini Card Preview */}
                         <div className="flex gap-2 pt-4 border-t border-white/5">
                             {deck.mainCards?.slice(0, 3).map((c, i) => (
                                 <div key={i} className="h-13 w-9 bg-black/50 rounded border border-white/10 flex items-center justify-center text-[8px] text-center overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center opacity-70" style={{ backgroundImage: `url('/bg-card.webp')` }} />
                                 </div>
                             ))}
                             <div className="h-12 w-8 flex items-center justify-center text-xs text-muted-foreground font-bold bg-secondary/30 rounded border border-white/5">
                                 +
                             </div>
                         </div>
                     </div>
                 </Link>
             ))}
          </div>
        </section>

      </div>

      <Navigation />
    </main>
  )
}