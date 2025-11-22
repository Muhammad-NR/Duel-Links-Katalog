"use client"

import { useMemo, Suspense } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CARDS_DATA } from "@/lib/data"
import { useSearchParams, useRouter } from "next/navigation"

const CARDS_PER_PAGE = 9

function CardsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const search = searchParams.get("q") || ""
  const typeFilter = searchParams.get("type") || "all"
  const pageParam = searchParams.get("page")
  const currentPage = pageParam ? parseInt(pageParam) : 1

  const filteredCards = useMemo(() => {
    return CARDS_DATA.filter((card) => {
      const matchesSearch =
        card.name.toLowerCase().includes(search.toLowerCase()) ||
        card.description.toLowerCase().includes(search.toLowerCase())
      
      const matchesType = typeFilter === "all" || card.type === typeFilter
      
      return matchesSearch && matchesType
    })
  }, [search, typeFilter])

  const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE)
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE
  const paginatedCards = filteredCards.slice(startIndex, startIndex + CARDS_PER_PAGE)

  const handlePageChange = (newPage: number) => {
    const p = Math.max(1, Math.min(newPage, totalPages))
    
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", p.toString())
    
    router.push(`/cards?${params.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen pb-32 pt-6">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        
        {/* --- INFO BAR --- */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h1 className="text-2xl font-bold">Card Catalog</h1>
            <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                {filteredCards.length} Cards Found
            </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedCards.map((card) => (
            <Link key={card.id} href={`/cards/${card.id}`}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer h-full flex flex-col group">
                
                <div className="aspect-[813/1185] bg-black flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/30 animate-pulse" />
                  <img
                    src={
                      card.image ||
                      `/.jpg?height=1185&width=813&query=${encodeURIComponent(card.name) || "/placeholder.svg"} yugioh card art`
                    }
                    alt={card.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                  />
                </div>

                <div className="p-4 space-y-3 flex flex-col flex-grow bg-secondary/5">
                  <h3 className="font-bold text-lg truncate group-hover:text-primary transition-colors">{card.name}</h3>
                  
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">{card.type}</span>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded font-medium">{card.rarity}</span>
                  </div>

                  <div 
                    className="text-sm text-muted-foreground line-clamp-3 mt-auto pt-2"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {paginatedCards.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/20 rounded-xl bg-secondary/5">
            <p className="text-xl font-bold text-muted-foreground mb-2">No cards found</p>
            <p className="text-sm text-muted-foreground">Try searching for something else in the header above</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum: number
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => handlePageChange(pageNum)}
                    className="w-10 h-10 p-0 font-bold"
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <Navigation />
    </main>
  )
}

export default function CardsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading cards...</div>}>
      <CardsContent />
    </Suspense>
  )
}