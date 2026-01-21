import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TimelineSection } from "@/components/timeline-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <ProjectsSection />
          <TimelineSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
