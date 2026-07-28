import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { StickyHeaderChrome } from "@/components/layout/StickyHeaderChrome";
import { MainNav } from "@/components/nav/MainNav";
import { MobileMenu } from "@/components/nav/MobileMenu";

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
        <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 xl:h-20 xl:grid-cols-[minmax(13rem,1fr)_auto_minmax(13rem,1fr)]">
          <div className="flex items-center">
            <Logo />
          </div>

          <MainNav />

          <div className="flex items-center justify-end gap-2">
            <div className="hidden sm:inline-flex">
              <Button href="/get-estimate" size="sm">
                Get a Free Estimate
              </Button>
            </div>

            <MobileMenu />
          </div>
        </Container>
      </StickyHeaderChrome>
    </>
  );
}
