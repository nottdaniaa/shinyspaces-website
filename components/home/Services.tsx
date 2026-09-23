import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/home/ServiceCard";
import { services } from "@/data/services";
import { PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="py-section-y">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2
              id="services-heading"
              className="font-manrope text-h1 font-semibold tracking-tight text-text-primary"
            >
              Cleaning Services for Every Kind of Space
            </h2>
            <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
              From weekly resets to guest-ready turnovers, Shiny Spaces Cleaning comes to homes,
              rentals, and businesses throughout Heber City and the Heber Valley, Utah.
            </p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-image ring-1 ring-inset ring-border/50 lg:aspect-[4/3]">
            <Image
              src="/images/home/serving-heber-valley.png"
              alt="Bright living room with panoramic mountain views, representing the communities Shiny Spaces Cleaning serves throughout the Heber Valley"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
              <p className="font-manrope text-h2 font-semibold text-white">
                Serving 8 Local Communities
              </p>
              <p className="mt-2 max-w-xs text-body text-white/85">
                Mobile cleaning serving Heber City and the Heber Valley, Utah. We come to you.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-x-10 lg:gap-y-20">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 rounded-card bg-surface-alt px-8 py-12 sm:flex-row sm:items-center lg:px-14 lg:py-16">
          <p className="text-h4 font-semibold text-text-primary">
            Not sure which service fits your space?
          </p>

          <Button
            href={PHONE_TEL_HREF}
            size="sm"
            className="shrink-0"
            ariaLabel={`Call or text Shiny Spaces Cleaning at ${PHONE_DISPLAY} for a free estimate`}
          >
            Call or Text
          </Button>
        </div>
      </Container>
    </section>
  );
}
