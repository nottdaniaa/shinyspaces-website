import Image from "next/image";

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent-gold/20 blur-3xl" />

      <Image
        src="/images/branding/logo.jpeg"
        alt=""
        width={2000}
        height={2000}
        loading="lazy"
        className="absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 object-contain opacity-[0.06] md:block"
      />

      <SparkleMark className="absolute left-[12%] top-[18%] h-5 w-5 text-accent-gold/40" />
      <SparkleMark className="absolute right-[18%] top-[30%] h-3 w-3 text-primary/30" />
      <SparkleMark className="absolute bottom-[22%] left-[22%] h-4 w-4 text-primary/25" />
    </div>
  );
}

function SparkleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c.6 4.2 2 7.4 4 9.4S20.6 12 24 12c-4.2.6-7.4 2-9.4 4S12 20.6 12 24c-.6-4.2-2-7.4-4-9.4S3.4 12 0 12c4.2-.6 7.4-2 9.4-4S12 3.4 12 0z" />
    </svg>
  );
}
