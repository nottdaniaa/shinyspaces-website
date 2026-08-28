import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceContent, serviceContent } from "@/data/serviceContent";
import {
  RelatedServices,
  ServiceAudiences,
  ServiceBeforeAfter,
  ServiceBenefits,
  ServiceCTA,
  ServiceFAQ,
  ServiceGallery,
  ServiceHero,
  ServiceIncludes,
  ServiceIntroduction,
  ServiceProcess,
} from "@/components/services/ServiceSections";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return serviceContent.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceContent(slug);

  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [service.heroImage.src],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.metaDescription,
      images: [service.heroImage.src],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceContent(slug);

  if (!service) notFound();

  const related = service.relatedServiceSlugs
    .map((relatedSlug) => getServiceContent(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  /*
   * Structured data is deliberately minimal.
   * - BreadcrumbList: safe, every value is real.
   * - Service: name/description/provider/areaServed only. NO `offers` or price
   *   field — pricing is quote-only with no confirmed figures, and inventing an
   *   offer would be both false and a schema violation.
   * - FAQPage: emitted only when confirmed FAQs are actually rendered on screen,
   *   which is Google's requirement for it to be valid.
   * - LocalBusiness is deliberately absent: it needs address and hours, both TBD.
   */
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: service.serviceName,
          item: `${SITE_URL}/services/${service.slug}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: service.serviceName,
      description: service.metaDescription,
      serviceType: service.serviceName,
      provider: { "@type": "Organization", name: "ShinySpaces", url: SITE_URL },
      areaServed: [
        "Heber City",
        "Midway",
        "Park City",
        "Kamas",
        "Hideout",
        "Daniel",
        "Charleston",
        "Wallsburg",
      ].map((name) => ({ "@type": "City", name })),
    },
  ];

  if (service.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />

      <ServiceHero service={service} />
      <ServiceIntroduction paragraphs={service.introduction} />
      <ServiceIncludes groups={service.includedTaskGroups} exclusions={service.exclusions} />
      <ServiceAudiences audiences={service.audiences} />
      <ServiceBenefits benefits={service.benefits} />
      <ServiceProcess steps={service.processSteps} />
      <ServiceBeforeAfter media={service.beforeAfterMedia} serviceName={service.serviceName} />
      <ServiceGallery images={service.galleryImages} />
      <ServiceFAQ faqs={service.faqs} />
      <RelatedServices services={related} />
      <ServiceCTA heading={service.ctaHeading} description={service.ctaDescription} />
    </>
  );
}
