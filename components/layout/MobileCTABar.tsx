import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-surface p-3 xl:hidden">
      <Button
        href={PHONE_TEL_HREF}
        variant="secondary"
        size="lg"
        className="flex-1"
        ariaLabel={`Call Now: ${PHONE_DISPLAY}`}
      >
        Call Now
      </Button>
      <Button href="/get-estimate" size="lg" className="flex-1">
        Free Estimate
      </Button>
    </div>
  );
}
