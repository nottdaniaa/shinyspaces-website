import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/home/HeroBackground";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center py-section-y text-center lg:min-h-[600px] lg:justify-center">
          <p className="animate-fade-up text-small font-semibold uppercase tracking-wide text-accent-gold-hover">
            Serving Heber City &amp; Nearby Communities
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up mt-4 font-display text-display font-semibold tracking-tight text-text-primary [animation-delay:80ms]"
          >
            Professional Cleaning Services in Heber City &amp; the Heber Valley
          </h1>

          <p className="animate-fade-up mt-6 max-w-2xl text-body-lg text-text-secondary [animation-delay:160ms]">
            Premium residential, commercial, and Airbnb turnover cleaning across Heber City,
            Midway, Park City &amp; the surrounding valley.
          </p>

          <div className="animate-fade-up mt-8 flex w-full flex-col gap-3 [animation-delay:240ms] sm:w-auto sm:flex-row">
            <Button href="/get-estimate" size="lg">
              Get a Free Estimate
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
