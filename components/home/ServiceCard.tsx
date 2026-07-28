import Link from "next/link";
import { EditorialSurface } from "@/components/home/EditorialSurface";
import type { Service, ServiceSpan } from "@/data/services";

const spanClasses: Record<ServiceSpan, string> = {
  1: "",
  2: "lg:col-span-2",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className={`group flex flex-col gap-7 rounded-image focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${spanClasses[service.span]}`}
    >
      <EditorialSurface
        tone={service.tone}
        aspect={service.aspect}
        className="transition-shadow duration-150 group-hover:shadow-sm"
      />

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
