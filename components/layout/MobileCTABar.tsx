import { Button } from "@/components/ui/Button";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-surface p-3 xl:hidden">
      <Button
        href={EMAIL_HREF}
        variant="secondary"
        size="lg"
        className="flex-1"
        ariaLabel={`Email ShinySpaces at ${EMAIL_ADDRESS}`}
      >
        Email Us
      </Button>
      <Button
        href={PHONE_TEL_HREF}
        size="lg"
        className="flex-1"
        ariaLabel={`Call or text ShinySpaces at ${PHONE_DISPLAY} for a free estimate`}
      >
        Call or Text
      </Button>
    </div>
  );
}
