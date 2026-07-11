import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Features from "@/components/landing/Features";
import TrustedBy from "@/components/landing/TrustedBy";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
<Hero />
<DashboardPreview />
<Features />
<TrustedBy />
<Testimonials />
<Pricing />
    </main>
  );
}