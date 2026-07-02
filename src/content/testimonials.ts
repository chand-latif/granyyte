// TODO: confirm exact quote wording with clients before launch
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with the Granyyte team was seamless from day one. They understood exactly what we needed, communicated clearly throughout, and delivered a polished product on schedule.",
    name: "Connell Macquisten",
    role: "Client — via LinkedIn",
  },
  {
    quote:
      "Exceptional quality and attention to detail. Every requirement was handled professionally, and the final app exceeded what we had envisioned. Highly recommended.",
    name: "Kerem Can",
    role: "Client — via LinkedIn",
  },
];
