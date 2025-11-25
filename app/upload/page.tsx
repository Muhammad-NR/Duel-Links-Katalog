"use client"

import { useState } from "react"
import { db, initFirebase, appId } from "@/lib/firebase" 
import { doc, writeBatch, collection } from "firebase/firestore"
import { CARDS_DATA, DECKS_DATA, SKILLS_DATA } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

export default function UploadPage() {
  const [status, setStatus] = useState("Ready to upload")
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload = async () => {
    if (!confirm("Yakin mau upload semua data ke Firebase?")) return;

    setIsLoading(true)
    setStatus("Connecting to Google Cloud...")
    
    try {
      await initFirebase()
      
      const batch = writeBatch(db)
      let count = 0

      setStatus(`Preparing ${CARDS_DATA.length} Cards...`)
      CARDS_DATA.forEach((card) => {
        const ref = doc(db, 'artifacts', appId, 'public', 'data', 'cards', card.id)
        batch.set(ref, card)
        count++
      })

      setStatus(`Preparing ${DECKS_DATA.length} Decks...`)
      DECKS_DATA.forEach((deck) => {
        const ref = doc(db, 'artifacts', appId, 'public', 'data', 'decks', deck.id)
        batch.set(ref, deck)
        count++
      })

      setStatus(`Preparing ${SKILLS_DATA.length} Skills...`)
      SKILLS_DATA.forEach((skill) => {
        const ref = doc(db, 'artifacts', appId, 'public', 'data', 'skills', skill.id)
        batch.set(ref, skill)
        count++
      })

      setStatus(`Uploading ${count} documents to Cloud...`)
      await batch.commit()

      setStatus("✅ SUCCESS! Database has been migrated to Firebase.")
    } catch (error) {
      console.error(error)
      setStatus("❌ Error: " + (error as any).message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-4">
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-blue-500">Firebase Seeder</h1>
            <p className="text-gray-400 max-w-md">
                Upload data lokal (`lib/data.ts`) ke Google Firestore Cloud.
            </p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 w-full max-w-md text-center shadow-2xl">
            <div className="mb-6 space-y-2 text-sm text-left bg-black/50 p-4 rounded font-mono text-green-400 border border-white/10">
                <p className="text-gray-500 border-b border-white/10 pb-2 mb-2">Log Status:</p>
                <p>{status}</p>
            </div>

            <Button 
                onClick={handleUpload} 
                disabled={isLoading}
                size="lg"
                className={`w-full font-bold transition-all ${isLoading ? "bg-yellow-600" : "bg-blue-600 hover:bg-blue-500"}`}
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
                    </span>
                ) : (
                    "🚀 START UPLOAD"
                )}
            </Button>
        </div>
    </div>
  )
}