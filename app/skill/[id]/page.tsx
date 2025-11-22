"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { SKILLS_DATA, CARDS_DATA } from "@/lib/data"
import { useParams } from "next/navigation"

export default function SkillDetailPage() {
  const params = useParams()
  const skill = SKILLS_DATA.find((s) => s.id === params.id)

  // LOGIC BARU: GABUNGAN OTOMATIS & MANUAL
  const mentionedCards = useMemo(() => {
    if (!skill) return []
    
    // 1. Cari kartu yang namanya disebut persis di deskripsi (Cara Lama)
    const autoDetected = CARDS_DATA.filter(card => skill.description.includes(card.name))

    // 2. Cari kartu dari list manual 'relatedCards' (Cara Baru)
    const manuallyLinked = skill.relatedCards 
      ? CARDS_DATA.filter(card => skill.relatedCards?.includes(card.id))
      : []

    // 3. Gabungin keduanya
    const combined = [...autoDetected, ...manuallyLinked]
    
    // 4. Hapus duplikat berdasarkan ID biar gak muncul double
    // Menggunakan Map: key=id, value=card object. Map otomatis menimpa key yang sama.
    return Array.from(new Map(combined.map(card => [card.id, card])).values())
  }, [skill])

  if (!skill) {
    return (
      <main className="min-h-screen flex items-center justify-center pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Skill not found</h1>
          <Link href="/skill">
            <Button>Back to Skills</Button>
          </Link>
        </div>
      </main>
    )
  }

  const isUniversal = skill.type === "Universal"
  const borderColor = isUniversal ? "border-blue-500/30" : "border-yellow-500/30"
  const glowColor = isUniversal ? "shadow-blue-500/20" : "shadow-yellow-500/20"
  
  // Logic Gambar: Prioritas pakai skill.image, fallback ke default icon sesuai tipe
  const detailImageSrc = skill.image || (isUniversal ? "/Skill_Uni.png" : "/Skill.png")

  return (
      <main className="min-h-screen bg-background pb-24 pt-6">
        <div className="max-w-5xl mx-auto p-4">
        
        <Link href="/skill" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-6">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Skills</span>
        </Link>

        <div className={`bg-card border ${borderColor} rounded-2xl overflow-hidden shadow-2xl ${glowColor}`}>
            
            {/* Header */}
            <div className="bg-black/40 p-8 flex flex-col items-center justify-center relative">
                <div className={`absolute inset-0 bg-gradient-to-b ${isUniversal ? 'from-blue-500/10' : 'from-yellow-500/10'} to-transparent`} />
                
                <div className={`w-32 h-32 rounded-full border-4 ${isUniversal ? 'border-blue-500' : 'border-yellow-500'} bg-black flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 overflow-hidden`}>
                    <img 
                        src={detailImageSrc}
                        alt={skill.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1 className="text-3xl font-bold mt-6 text-center text-white drop-shadow-md z-10">
                    {skill.name}
                </h1>
                
                <div className="flex gap-3 mt-3 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border bg-black/50 ${isUniversal ? 'text-blue-400 border-blue-500' : 'text-yellow-400 border-yellow-500'}`}>
                        {skill.type} Skill
                    </span>
                    {skill.character && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold border border-white/20 bg-black/50 text-white">
                            {skill.character}
                        </span>
                    )}
                </div>
            </div>

            {/* Body */}
            <div className="p-8 bg-secondary/5">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Effect Description</h3>
                <div className="bg-black/20 p-6 rounded-xl border border-white/5 space-y-6">
                    <p className="text-lg leading-relaxed whitespace-pre-line text-foreground/90">
                        {skill.description}
                    </p>

                    {/* --- RELATED CARDS SECTION --- */}
                    {mentionedCards.length > 0 && (
                        <div className="pt-4 border-t border-white/10">
                            <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Related Cards</h4>
                            <div className="flex flex-wrap gap-3">
                                {mentionedCards.map(card => (
                                    <Link key={card.id} href={`/cards/${card.id}`} className="group relative block w-20">
                                        <div className="aspect-[420/613] rounded overflow-hidden border border-white/10 group-hover:border-primary transition-all group-hover:scale-105 shadow-lg">
                                            <img 
                                                src={card.image || "/card-back.jpg"} 
                                                alt={card.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-0 right-0 bg-black/80 text-[6px] px-1 text-accent font-bold">
                                                {card.rarity === 'Ultra Rare' ? 'UR' : card.rarity === 'Super Rare' ? 'SR' : 'R'}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
      </div>

      <Navigation />
    </main>
  )
}