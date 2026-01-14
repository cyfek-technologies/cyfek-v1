import type { Metadata } from "next";
import { WhatWeDoHero } from "@/components/what-we-do/what-we-do-hero";
import { WhatWeDoGallery } from "@/components/what-we-do/what-we-do-gallery";
import { WhatWeDoTeam } from "@/components/what-we-do/what-we-do-team";
import { WhatWeDoServices } from "@/components/what-we-do/what-we-do-services";
import { WhatWeDoCta } from "@/components/what-we-do/what-we-do-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "What We Do | Cyfek",
  description:
    "Discover how Cyfek delivers digital transformation through software development, marketing, and education. Meet the team behind our success.",
};

export default function WhatWeDoPage() {
  return (
    <main className="bg-hero-bg min-h-screen">
      <Header />
      <WhatWeDoHero />
      <WhatWeDoGallery />
      <WhatWeDoServices />
      {/* <WhatWeDoTeam /> */}
      <WhatWeDoCta />
      <Footer />
    </main>
  );
}
