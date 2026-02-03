"use client"

import * as React from "react"
import { useState } from "react"
import { Play } from "lucide-react"
import { Dialog } from "@/components/ui/dialog"

type Testimonial = {
  name: string
  videoUrl: string
  role?: string
  company?: string
}

type Props = {
  items: Testimonial[]
  onSelect?: (videoUrl: string) => void
  className?: string
}

export default function TestimonialsGrid({ items, onSelect, className }: Props) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  function handleSelect(videoUrl: string) {
    setSelectedVideo(videoUrl)
    onSelect?.(videoUrl)
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {items.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer w-full group"
            onClick={() => handleSelect(testimonial.videoUrl)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 shadow-lg w-full aspect-[9/16] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-green-500/10 group-hover:border-green-500/30">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 group-hover:bg-black/30 transition-colors">
                <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-500/20">
                  <Play className="h-8 w-8 text-white fill-white opacity-90" />
                </div>
              </div>
              <video
                src={testimonial.videoUrl}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                loop
                preload="metadata"
              />
              
              {/* Overlay gradient at bottom for text readability if needed, though text is outside */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="mt-4 text-center flex flex-col items-center gap-1 w-full">
              {testimonial.company && (
                <p className="text-xs font-bold text-white uppercase tracking-wider">{testimonial.company}</p>
              )}
              <p className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">{testimonial.name}</p>
              {testimonial.role && (
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{testimonial.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8">
            <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col items-center justify-center">
              <button
                className="absolute -top-12 right-0 z-20 rounded-full bg-white/10 text-white p-2 hover:bg-white/20 focus:outline-none transition-colors"
                onClick={() => setSelectedVideo(null)}
                aria-label="Fechar vídeo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-full h-full flex items-center justify-center">
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-xl shadow-2xl bg-black object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  )
}
