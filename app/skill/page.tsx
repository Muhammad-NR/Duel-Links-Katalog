"use client"

import { useMemo, Suspense } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SKILLS_DATA } from "@/lib/data"
import { useSearchParams } from "next/navigation"

function SkillListContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get("q") || ""
  
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      return (
        skill.name.toLowerCase().includes(search.toLowerCase()) ||
        skill.description.toLowerCase().includes(search.toLowerCase()) ||
        (skill.character && skill.character.toLowerCase().includes(search.toLowerCase()))
      )
    })
  }, [search])

  return (
      <main className="min-h-screen bg-background pb-24 pt-10">
        <div className="max-w-5xl mx-auto p-4 space-y-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h1 className="text-2xl font-bold">Skill List</h1>
            <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                {filteredSkills.length} Skills Found
            </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <Link key={skill.id} href={`/skill/${skill.id}`}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-yellow-500/50 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col group relative">
                
                <div className="aspect-square relative overflow-hidden">
                    
                    <div className={`absolute inset-0 opacity-30 z-0 ${skill.type === 'Universal' ? 'bg-blue-900' : 'bg-yellow-900'}`} />
                    
                    <img
                        src={
                            skill.characterImage 
                            ? skill.characterImage
                            : (skill.type === 'Universal' ? "/Skill_Uni.png" : "/Skill.png")
                        }
                        alt={skill.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 z-10 relative"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent z-20 pointer-events-none" />
                </div>

                <div className="p-4 flex flex-col flex-grow relative z-30 pt-2">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-yellow-400 transition-colors line-clamp-2">
                        {skill.name}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${
                        skill.type === 'Universal' 
                        ? 'bg-blue-900/30 text-blue-400 border-blue-800' 
                        : 'bg-yellow-900/30 text-yellow-400 border-yellow-800'
                    }`}>
                        {skill.type === 'Universal' ? 'UNI' : 'CHAR'}
                    </span>
                  </div>
                  
                  {skill.character && (
                    <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                        👤 {skill.character}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground line-clamp-2 mt-auto">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/20 rounded-xl bg-secondary/5">
            <p className="text-xl font-bold text-muted-foreground mb-2">No skills found</p>
            <p className="text-sm text-muted-foreground">Try searching for a character or skill name</p>
          </div>
        )}

      </div>
      <Navigation />
    </main>
  )
}
export default function SkillPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading skills...</div>}>
      <SkillListContent />
    </Suspense>
  )
}