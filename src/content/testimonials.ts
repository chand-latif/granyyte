export type VideoTestimonial = {
  /** LinkedIn embed URL (same embed codes used on chandlatif.lovable.app) */
  embedUrl: string;
  /** iframe title, for screen readers */
  label: string;
  /** Still frame shown on the card. The LinkedIn player only loads on click. */
  poster: string;
  /** Who is speaking. No names until the clients have OK'd a caption. */
  who: string;
  /** What the video is about, from the LinkedIn post it was shared in */
  about: string;
  /** Small chips under the title */
  tags: string[];
};

export const testimonials: VideoTestimonial[] = [
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7386450061733314560?compact=1",
    label: "Video testimonial from a regular client",
    poster: "/testimonials/client-01.webp",
    who: "One of our regular clients",
    about: "On what it's like to keep building Flutter and FlutterFlow apps with us.",
    tags: ["Flutter", "FlutterFlow"],
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7396960564914163712?compact=1",
    label: "Video testimonial from the client behind Poland Portal",
    poster: "/testimonials/client-02.webp",
    who: "The client behind Poland Portal",
    about: "On building Poland Portal, the app for life in Poland.",
    tags: ["Poland Portal", "iOS + Android"],
  },
];
