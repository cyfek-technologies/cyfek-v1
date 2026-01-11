import Image from "next/image"

const galleryImages = [
  {
    src: "/modern-office-team-collaboration-software-developm.jpg",
    alt: "Team collaboration",
  },
  {
    src: "/creative-brainstorming-session-whiteboard-ideas.jpg",
    alt: "Brainstorming session",
  },
  {
    src: "/developers-coding-laptops-modern-workspace.jpg",
    alt: "Developers at work",
  },
  {
    src: "/digital-marketing-team-analyzing-data-screens.jpg",
    alt: "Marketing team",
  },
  {
    src: "/product-design-ux-workshop-sticky-notes.jpg",
    alt: "UX workshop",
  },
  {
    src: "/academy-classroom-students-learning-coding.jpg",
    alt: "Academy training",
  },
]

export function WhatWeDoGallery() {
  return (
    <section id="gallery" className="py-8 bg-hero-bg overflow-hidden">
      <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
        {[...galleryImages, ...galleryImages].map((image, index) => (
          <div key={index} className="relative w-[320px] h-[205px] flex-shrink-0 rounded-xl overflow-hidden group">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
