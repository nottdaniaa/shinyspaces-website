import Image from "next/image";
import Link from "next/link";
import { BUSINESS_NAME } from "@/lib/constants";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${BUSINESS_NAME} — home`}
      className="inline-flex shrink-0 items-center gap-2 rounded-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:gap-2.5"
    >
      <Image
        src="/images/branding/logo.jpeg"
        alt=""
        width={2000}
        height={2000}
        priority
        className="h-11 w-11 object-contain sm:h-14 sm:w-14"
      />
      <span className="font-manrope text-[0.8125rem] font-semibold leading-[1.15] tracking-tight text-text-primary sm:text-small">
        Shiny Spaces
        <span className="block">Cleaning</span>
      </span>
    </Link>
  );
}
