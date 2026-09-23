import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/home/HeroBackground";
import { BUSINESS_NAME, EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";
import { formatTownList, SAB_SUMMARY } from "@/lib/localBusiness";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[80vh] overflow-hidden lg:min-h-[85vh]">
      <HeroBackground />

      <Container className="relative z-10 flex min-h-[80vh] items-center py-16 lg:min-h-[85vh] lg:py-0">
        <div className="max-w-[760px]">
          <h1
            id="hero-heading"
            className="animate-fade-up text-balance font-manrope text-[clamp(2.25rem,10vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white md:text-[clamp(2.75rem,5vw,4.75rem)]"
          >
            {BUSINESS_NAME} in Heber City, Utah
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-body-lg text-white/90 [animation-delay:80ms]">
            {SAB_SUMMARY} Residential, commercial, and Airbnb turnover cleaning in{" "}
            {formatTownList()}.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 [animation-delay:160ms] sm:flex-row">
            <Button
              href={PHONE_TEL_HREF}
              size="lg"
              tone="dark"
              ariaLabel={`Call or text ${BUSINESS_NAME} at ${PHONE_DISPLAY} for a free estimate`}
            >
              Call {PHONE_DISPLAY}
            </Button>
            <Button
              href={EMAIL_HREF}
              variant="secondary"
              size="lg"
              tone="dark"
              ariaLabel={`Email Shiny Spaces Cleaning at ${EMAIL_ADDRESS}`}
            >
              Email Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
