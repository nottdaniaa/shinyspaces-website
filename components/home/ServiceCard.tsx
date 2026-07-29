import Image from "next/image";
import Link from "next/link";
import { EditorialSurface } from "@/components/home/EditorialSurface";
import { BeforeAfterMedia } from "@/components/ui/BeforeAfterMedia";
import type { Service, ServiceAspect, ServiceSpan } from "@/data/services";

const spanClasses: Record<ServiceSpan, string> = {
  1: "",
  2: "lg:col-span-2",
};

// Mirrors EditorialSurface's slots so a card's footprint never changes
// when a placeholder is swapped for a real photo.
const aspectClasses: Record<ServiceAspect, string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
  wide: "aspect-[16/9]",
};

export function ServiceCard({ service }: { service: Service }) {
  if (service.beforeAfter) {
    return (
      <div className={`flex flex-col gap-7 ${spanClasses[service.span]}`}>
        <BeforeAfterMedia
          before={service.beforeAfter.before}
          after={service.beforeAfter.after}
          aspectRatio={service.aspect}
        />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-h3 font-semibold tracking-tight text-text-primary">
              {service.title}
            </h3>
            <p className="mt-3 text-small text-text-secondary">{service.description}</p>
          </div>

          <Link
            href={service.href}
            aria-label={`Learn more about ${service.title}`}
            className="group -mr-3 -mb-3 mt-[-8px] inline-flex shrink-0 items-center justify-center rounded-full p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <ArrowIcon className="h-5 w-5 text-primary transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={service.href}
      className={`group flex flex-col gap-7 rounded-image focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${spanClasses[service.span]}`}
    >
      {service.photo ? (
        <div
          className={`relative overflow-hidden rounded-image ring-1 ring-inset ring-border/50 transition-shadow duration-150 group-hover:shadow-sm ${aspectClasses[service.aspect]}`}
        >
          <Image
            src={service.photo.src}
            alt={service.photo.alt}
            fill
            sizes={service.span === 2 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
            className="object-cover"
          />
        </div>
      ) : (
        <EditorialSurface
          tone={service.tone}
          aspect={service.aspect}
          className="transition-shadow duration-150 group-hover:shadow-sm"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-h3 font-semibold tracking-tight text-text-primary">
            {service.title}
          </h3>
          <p className="mt-3 text-small text-text-secondary">{service.description}</p>
        </div>

        <ArrowIcon className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
