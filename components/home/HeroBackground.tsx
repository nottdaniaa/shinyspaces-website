import Image from "next/image";

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Image
        src="/images/hero/heber-city-living-room.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] md:object-[74%_38%]"
      />

      {/* Strongest at the left edge (where the text sits), fading to transparent
          well before the right side so the room stays clearly visible. */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 from-0% via-black/45 via-40% to-transparent to-72%" />
    </div>
  );
}
