import { Button } from "@/components/ui/Button";
import { BUSINESS_NAME, EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-surface p-3 xl:hidden">
      <Button
        href={EMAIL_HREF}
        variant="secondary"
        size="sm"
        className="flex-1"
        ariaLabel={`Email ${BUSINESS_NAME} at ${EMAIL_ADDRESS}`}
      >
        Email Us
      </Button>
      <Button
        href={PHONE_TEL_HREF}
        size="sm"
        className="min-w-0 flex-[1.45] px-3"
        ariaLabel={`Call or text ${BUSINESS_NAME} at ${PHONE_DISPLAY} for a free estimate`}
      >
        {PHONE_DISPLAY}
      </Button>
    </div>
  );
}
