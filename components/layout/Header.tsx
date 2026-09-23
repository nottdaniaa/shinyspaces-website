import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { StickyHeaderChrome } from "@/components/layout/StickyHeaderChrome";
import { MainNav } from "@/components/nav/MainNav";
import { MobileMenu } from "@/components/nav/MobileMenu";
import { BUSINESS_NAME, JOBBER_REQUEST_URL, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-input focus:bg-primary focus:px-4 focus:py-2 focus:text-body focus:font-semibold focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>

      <StickyHeaderChrome>
        <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-3 xl:h-20 xl:grid-cols-[minmax(12.5rem,1fr)_auto_minmax(20rem,1fr)] xl:gap-4">
          <div className="flex items-center">
            <Logo />
          </div>

          <MainNav />

          <div className="flex items-center justify-end gap-2">
            <div className="hidden items-center gap-2 xl:flex">
              <Button
                href={JOBBER_REQUEST_URL}
                external
                variant="secondary"
                size="sm"
                ariaLabel="Request a free cleaning estimate online (opens in a new tab)"
              >
                Get Estimate
              </Button>
              <Button href={PHONE_TEL_HREF} size="sm" ariaLabel={`Call or text ${BUSINESS_NAME} at ${PHONE_DISPLAY} for a free estimate`}>
                {PHONE_DISPLAY}
              </Button>
            </div>

            <MobileMenu />
          </div>
        </Container>
      </StickyHeaderChrome>
    </>
  );
}
