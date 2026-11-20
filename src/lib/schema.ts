import { site } from "@/config/site";

/** Full postal address, identical to the Google Business Profile. */
export const postalAddressJsonLd = {
  "@type": "PostalAddress",
  streetAddress: site.contact.address.street,
  addressLocality: site.contact.address.locality,
  addressRegion: site.contact.address.region,
  postalCode: site.contact.address.postalCode,
  addressCountry: site.contact.address.country,
};

/** "Open 24 hours", in the form Google documents: every day, 00:00 to 23:59. */
export const openingHoursJsonLd = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "00:00",
  closes: "23:59",
};

/** One-line address for visible copy. */
export const addressLine = `${site.contact.address.street}, ${site.contact.address.locality} ${site.contact.address.postalCode}`;
