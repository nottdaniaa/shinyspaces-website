import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 rounded-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Image
        src="/images/branding/logo.jpeg"
        alt="ShinySpaces"
        width={2000}
        height={2000}
        priority
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
      />
    </Link>
  );
}
