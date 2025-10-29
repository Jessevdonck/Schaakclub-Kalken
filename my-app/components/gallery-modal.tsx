"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type GalleryModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  imagePaths: string[]
  initialIndex?: number
}

export function GalleryModal({ isOpen, onClose, title, imagePaths, initialIndex = 0 }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    setCurrentIndex(initialIndex)

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const total = imagePaths.length
  const canNavigate = total > 1

  const goNext = () => setCurrentIndex((i) => (i + 1) % total)
  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total)

  const currentSrc = useMemo(() => imagePaths[currentIndex], [imagePaths, currentIndex])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <button
        aria-label="Sluiten"
        className="absolute top-4 right-4 text-white/90 hover:text-white"
        onClick={onClose}
        ref={closeButtonRef}
      >
        <X className="w-7 h-7" />
      </button>

      {canNavigate && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm z-30">
          {currentIndex + 1} / {total}
        </div>
      )}

      {canNavigate && (
        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-3 md:px-6 z-30">
          <Button
            aria-label="Vorige foto"
            variant="ghost"
            size="icon-lg"
            className="pointer-events-auto bg-black/30 hover:bg-black/50 text-white"
            onClick={goPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            aria-label="Volgende foto"
            variant="ghost"
            size="icon-lg"
            className="pointer-events-auto bg-black/30 hover:bg-black/50 text-white"
            onClick={goNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      )}

      <div className="max-w-6xl w-full px-4">
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[3/2] z-0">
          <Image
            src={currentSrc}
            alt={title}
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-contain select-none z-0"
          />
        </div>
      </div>
    </div>
  )
}


