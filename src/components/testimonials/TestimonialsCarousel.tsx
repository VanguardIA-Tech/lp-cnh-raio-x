"use client"

import * as React from "react"
import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Play } from "lucide-react"
import { Dialog } from "@/components/ui/dialog"
import Autoplay from "embla-carousel-autoplay"

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

export default function TestimonialsCarousel({ items, onSelect, className }: Props) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  function handleSelect(videoUrl: string) {
    setSelectedVideo(videoUrl)
    onSelect?.(videoUrl)
  }

  // Duplicar itens para criar efeito infinito sem "salto"
  const infiniteItems = [...items, ...items, ...items]

  return (
    <div className={className}>
      <div className="relative max-w-3xl mx-auto px-8 sm:px-12">
        <Carousel
          opts={{ align: "start", loop: true, slidesToScroll: 1 }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {infiniteItems.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="flex flex-col items-center cursor-pointer w-full max-w-[400px]"
                  onClick={() => handleSelect(testimonial.videoUrl)}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 shadow-lg w-full h-[370px] sm:h-[420px]">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <video
                      src={testimonial.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      preload="metadata"
                    />
                  </div>
                  <div className="mt-4 text-center flex flex-col items-center gap-1">
                    {testimonial.company && (
                      <p className="text-sm font-semibold text-slate-100">{testimonial.company}</p>
                    )}
                    <p className="text-base font-medium text-slate-100">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="text-sm text-slate-300">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="shadow-lg" />
          <CarouselNext className="shadow-lg" />
        </Carousel>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative w-full max-w-3xl mx-4">
              <button
                className="absolute top-2 right-2 z-20 rounded-full bg-black/80 text-white p-2 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setSelectedVideo(null)}
                aria-label="Fechar vídeo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center justify-center w-full" style={{ maxHeight: '90vh' }}>
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full max-h-[90vh] rounded-lg shadow-2xl bg-black object-contain"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  )
}
