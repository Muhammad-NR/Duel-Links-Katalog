"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { CARDS_DATA } from "@/lib/data"

// UBAH JADI 9 (Supaya tampilan grid 3x3 pas)
const CARDS_PER_PAGE = 9

export default function CardsPage() {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

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

  const cardTypes = ["all", ...new Set(CARDS_DATA.map((c) => c.type))]

  const handlePageChange = (newPage: number) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)))
  }

  const handleFilterChange = (filter: string) => {
    setTypeFilter(filter)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setCurrentPage(1)
  }

  return (
    <main className="min-h-screen bg-background pb-32">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="space-y-4 pt-4">
          <h1 className="text-3xl font-bold">Card Catalog</h1>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search cards..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Type Filter */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Filter className="w-4 h-4" />
              <span>Filter by Type</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cardTypes.map((type) => (
                <Button
                  key={type}
                  variant={typeFilter === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(type)}
                  className="capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count and Pagination Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing {filteredCards.length} card{filteredCards.length !== 1 ? "s" : ""}
          </span>
          {totalPages > 1 && (
            <span>
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>

        {/* Cards Grid - 3x3 LAYOUT */}
        {/* grid-cols-1 (HP), grid-cols-2 (Tablet Kecil), grid-cols-3 (PC/Tablet Besar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedCards.map((card) => (
            <Link key={card.id} href={`/cards/${card.id}`}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer h-full flex flex-col group">
                
                {/* --- IMAGE SECTION (Aspect Ratio 813:1185) --- */}
                <div className="aspect-[813/1185] bg-black flex items-center justify-center overflow-hidden relative">
                  
                  {/* Placeholder Loading */}
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
                  
                  {/* Badges */}
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
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No cards found matching your search</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {/* Page Numbers */}
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
                    className="w-10 h-10 p-0"
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