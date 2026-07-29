import { serviceAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import { PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

/*
 * DELIBERATELY NON-SUBMITTING.
 *
 * There is no submission destination in this project: no API route, no server
 * action, no email service, and no confirmed email address in
 * docs/02-business-profile.md §2. Rather than render a submit button that
 * silently discards a real customer's request, every control is disabled and
 * the notice below states plainly that online requests aren't live yet, with
 * the confirmed phone number as the working path.
 *
 * TO ENABLE: add a destination (server action or API route), confirm the
 * recipient address in §2, then remove `disabled` from the fieldset, drop the
 * notice, and wire up validation + a real success/error state.
 *
 * Square footage is intentionally absent — the owner does not price by area.
 */
const propertyTypes = [
  "Home",
  "Apartment or condo",
  "Short-term rental",
  "Commercial space",
  "Other",
];

const contactMethods = [
  { id: "contact-phone", value: "phone", label: "Phone call" },
  { id: "contact-text", value: "text", label: "Text message" },
  { id: "contact-email", value: "email", label: "Email" },
];

export function EstimateForm() {
  return (
    <div className="rounded-card bg-surface p-6 shadow-sm ring-1 ring-border/60 sm:p-8">
      <div
        role="note"
        className="rounded-input border border-warning-text/30 bg-warning/10 p-4 text-small text-text-primary"
      >
        <p className="font-semibold">Online requests aren&apos;t live yet.</p>
        <p className="mt-1 text-text-secondary">
          This form is not connected yet, so it can&apos;t send your details. To get your free
          estimate today, call{" "}
          <a
            href={PHONE_TEL_HREF}
            className="font-semibold text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>

      <form className="mt-8">
        {/* One disabled fieldset rather than per-field disabling: it is the
            accessible way to convey that the whole group is unavailable. */}
        <fieldset disabled aria-describedby="form-unavailable" className="min-w-0">
          <legend className="sr-only">Request a free cleaning estimate</legend>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" htmlFor="name" className="sm:col-span-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={inputClass}
              />
            </Field>

            <fieldset className="sm:col-span-2">
              <legend className="text-small font-semibold text-text-primary">
                Preferred contact method
              </legend>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                {contactMethods.map((method) => (
                  <div key={method.id} className="flex items-center gap-2">
                    <input
                      id={method.id}
                      name="contactMethod"
                      type="radio"
                      value={method.value}
                      className="h-5 w-5 accent-[var(--primary)]"
                    />
                    <label htmlFor={method.id} className="text-small text-text-secondary">
                      {method.label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <Field label="Phone number" htmlFor="phone">
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
            </Field>

            <Field label="Email address" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={inputClass}
              />
            </Field>

            <Field label="Service needed" htmlFor="service">
              <select id="service" name="service" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Property type" htmlFor="propertyType">
              <select id="propertyType" name="propertyType" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select a property type
                </option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="City" htmlFor="city">
              <select
                id="city"
                name="city"
                autoComplete="address-level2"
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select your city
                </option>
                {serviceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
                <option value="other">Somewhere else nearby</option>
              </select>
            </Field>

            <Field label="Preferred date" htmlFor="preferredDate" optional>
              <input id="preferredDate" name="preferredDate" type="date" className={inputClass} />
            </Field>

            <Field label="Anything else we should know?" htmlFor="message" optional className="sm:col-span-2">
              <textarea id="message" name="message" rows={4} className={inputClass} />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-button bg-primary px-6 py-3 text-body font-semibold text-white sm:w-auto"
          >
            Submit Request
          </button>
        </fieldset>

        <p id="form-unavailable" className="mt-3 text-caption text-text-secondary">
          Submitting is unavailable until online requests are connected. Please call{" "}
          {PHONE_DISPLAY} instead.
        </p>
      </form>
    </div>
  );
}

const inputClass =
  "mt-2 block min-h-11 w-full rounded-input border border-border bg-surface px-4 py-3 text-body text-text-primary placeholder:text-text-secondary focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:bg-surface-alt disabled:text-text-secondary";

function Field({
  label,
  htmlFor,
  optional,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-small font-semibold text-text-primary">
        {label}
        {optional && <span className="ml-1 font-normal text-text-secondary">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
