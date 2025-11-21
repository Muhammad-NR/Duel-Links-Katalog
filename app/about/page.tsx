"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Heart, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="max-w-3xl mx-auto p-4 space-y-8">
        {/* Header */}
        <div className="pt-8 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Yu-Gi-Oh Duel Links</h1>
            <h2 className="text-2xl text-primary">Card Catalog & Meta Guide</h2>
          </div>
        </div>

        {/* About */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold">About This App</h2>
          <p className="text-muted-foreground leading-relaxed">
            Yu-Gi-Oh Duel Links Catalog is a comprehensive database and guide for players. Explore thousands of cards,
            discover current meta decks, and learn strategies used by professional players to climb the ladder and
            achieve victory in competitive duels.
          </p>
        </div>

        {/* Features */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Complete card catalog with detailed information</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Meta tier list of competitive decks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Search and filter cards by type and attributes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Detailed deck analysis with strategy guides</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Progressive Web App - Install and play offline</span>
            </li>
          </ul>
        </div>

        {/* Technology */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold">Built With</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded bg-primary/20 text-primary text-sm font-medium">Next.js</span>
            <span className="px-3 py-1 rounded bg-primary/20 text-primary text-sm font-medium">React</span>
            <span className="px-3 py-1 rounded bg-primary/20 text-primary text-sm font-medium">TypeScript</span>
            <span className="px-3 py-1 rounded bg-primary/20 text-primary text-sm font-medium">Tailwind CSS</span>
            <span className="px-3 py-1 rounded bg-primary/20 text-primary text-sm font-medium">PWA</span>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground">Have feedback or found an issue? We'd love to hear from you.</p>
          <div className="flex gap-3 pt-2">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border space-y-3">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for Yu-Gi-Oh fans
          </p>
          <p className="text-sm text-muted-foreground">© 2025 Yu-Gi-Oh Catalog. Not affiliated with Konami.</p>
        </div>
      </div>

      <Navigation />
    </main>
  )
}
