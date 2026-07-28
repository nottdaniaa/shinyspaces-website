import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { EditorialSurface } from "@/components/home/EditorialSurface";
import { ServiceCard } from "@/components/home/ServiceCard";
import { services } from "@/data/services";

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
              From weekly resets to guest-ready turnovers, ShinySpaces serves homes, rentals, and
              businesses throughout Heber City and the surrounding Heber Valley.
            </p>
          </div>

          <EditorialSurface tone="teal" aspect="wide" className="lg:aspect-[4/3]">
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
              <p className="font-manrope text-h2 font-semibold text-text-primary">
                Serving 8 Local Communities
              </p>
              <p className="mt-2 max-w-xs text-body text-text-secondary">
                Based in Heber City and serving nearby communities throughout the surrounding
                area.
              </p>
            </div>
          </EditorialSurface>
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

          <Button href="/get-estimate" size="sm" className="shrink-0">
            Get a Free Estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}
