import Image from "next/image"
import Link from "next/link"

const leadershipTeam = [
  {
    name: "Adebayo Okonkwo",
    role: "Chief Executive Officer",
    image: "/african-man-professional-headshot-ceo-suit-confide.jpg",
    bio: "Visionary leader with 15+ years in tech entrepreneurship",
  },
  {
    name: "Chioma Nwankwo",
    role: "Chief Technology Officer",
    image: "/african-woman-professional-headshot-cto-tech-execu.jpg",
    bio: "Former Google engineer leading our technical innovation",
  },
  {
    name: "Emeka Obi",
    role: "Chief Marketing Officer",
    image: "/african-man-professional-headshot-marketing-execut.jpg",
    bio: "Digital marketing expert with global brand experience",
  },
  {
    name: "Funke Adeyemi",
    role: "Head of Academy",
    image: "/african-woman-professional-headshot-education-lead.jpg",
    bio: "Passionate educator transforming tech education",
  },
  {
    name: "Oluwaseun Bakare",
    role: "Head of Product",
    image: "/african-man-professional-headshot-product-manager.jpg",
    bio: "Product strategist behind SELTRA and more",
  },
  {
    name: "Amara Eze",
    role: "Head of Design",
    image: "/african-woman-professional-headshot-creative-direc.jpg",
    bio: "Award-winning designer shaping digital experiences",
  },
]

export function WhatWeDoTeam() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">Leadership Team</h2>
          <p className="text-lg text-navy/70">
            Cyfek was founded with a mission to democratize technology and digital growth. Here are the leaders
            who&apos;ve grown and progressed with our vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipTeam.map((member, index) => (
            <Link
              key={index}
              href="#"
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/80 text-sm">{member.bio}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors">{member.name}</h3>
                <p className="text-navy/60 text-sm mt-1">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
