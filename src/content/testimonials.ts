export type VideoTestimonial = {
  /** LinkedIn embed URL (same embed codes used on chandlatif.lovable.app) */
  embedUrl: string;
  /** iframe title, for screen readers */
  label: string;
  /** Still frame shown on the card. The LinkedIn player only loads on click. */
  poster: string;
  /** Who is speaking. No names until the clients have OK'd a caption. */
  who: string;
  /**
   * One generic line. Chand's call: don't tie a video to a named project or a
   * stack, since there are only a few of them.
   */
  about: string;
  /** Small chips under the title */
  tags: string[];
};

export const testimonials: VideoTestimonial[] = [
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7386450061733314560?compact=1",
    label: "Video testimonial from a regular mobile app client",
    poster: "/testimonials/client-01.webp",
    who: "A regular client",
    about: "On what it's like to keep coming back to us for mobile apps.",
    tags: ["Mobile app", "iOS + Android"],
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7396960564914163712?compact=1",
    label: "Video testimonial from a mobile app client",
    poster: "/testimonials/client-02.webp",
    who: "A mobile app client",
    about: "On taking an app from idea to both stores with us.",
    tags: ["Mobile app", "iOS + Android"],
  },
];
