export type Review = {
  id: string;
  /** First name + last initial, per the privacy decision recorded in docs/02-business-profile.md §9. */
  name: string;
  /** Verbatim. Never silently corrected for spelling, grammar, or punctuation. */
  quote: string;
  sourceUrl: string;
};

/*
 * Verified customer recommendations from the ShinySpaces Facebook page, supplied
 * by the business owner with the source URL for each post.
 *
 * Rules for this file:
 * - Quotes are verbatim. Typos are the customer's own words and stay as written.
 * - Facebook recommendations are binary ("recommends"), NOT star ratings. Do not
 *   add a rating, star count, or aggregate score to this type — see
 *   docs/02-business-profile.md §11.
 * - Do not add customer types, locations, or service labels; none are confirmed.
 * - Never add a placeholder or invented testimonial here. An empty array is the
 *   correct state if no verified reviews exist; the carousel renders nothing.
 */
export const reviews: Review[] = [
  {
    id: "denni-w",
    name: "Denni W.",
    quote:
      "Pilar and her team are amazing!! She is detail oriented. She does an impeccable job every time! We are beyond satisfied and very grateful for her and her team!💜 I would recommend them to anyone!!",
    sourceUrl:
      "https://www.facebook.com/1174867288/posts/pfbid02pvSYKN1YUUthyzFX6KtABdppP3A2LAnTw2pHSnn21RR2e5UUW2b46d8puSt6MLQEl/",
  },
  {
    id: "shawna-m",
    name: "Shawna M.",
    quote:
      "Pilar and her team pay attention to details. They are punctual and friendly. The house looked amazing when they were finished. I love having a clean home. Clean home=happy home, thank you Shiny Spaces",
    sourceUrl:
      "https://www.facebook.com/1407138675/posts/pfbid0iY13K8rAsk6Mx1Z3yaYptx9W5zn8rARGPLBDemu2gMnJkbjL4VNEQLJhpzVkep5Zl/",
  },
  {
    id: "brad-l",
    name: "Brad L.",
    quote:
      "Pilar and crew did an outstanding job. They did a whole house deep clean and will now begin bi-weekly maintenance. We are very happy with their attention to detail and professionalism.",
    sourceUrl:
      "https://www.facebook.com/1319528300/posts/pfbid02eKhQWYcAgfgYuBB4D7YpyoGe17Cg8SmsCZkHwwLVp8Jab7pCvg38Yczf7usTyRUol/",
  },
  {
    id: "malaika-d",
    name: "Malaika D.",
    quote:
      "Impeccable! By far the best cleaning job I have ever seen in my life. Super friendly ladies and very professional. I always keep up with my house and never thought it was dirty but after they came and cleaned I had to adjust my standards, they showed me what spotless really looked like! I will absolutely recommend them! 🤩",
    sourceUrl:
      "https://www.facebook.com/100002107447509/posts/pfbid02goXXfTbMM1eRDnZZL79GAJ8PaaK1dmbn6sECjKbEVZo9bxgvYdZ9MV8D4DngEgcZl/",
  },
  {
    id: "tori-jo-s",
    name: "Tori Jo S.",
    quote:
      "I highly recommend Shiny Spaces they were Great to work with and they did an Awesome job!! I will be using them again",
    sourceUrl:
      "https://www.facebook.com/100005204670193/posts/pfbid02sCNEkBjHwoU9GprNt5NYxmcKA3D1LNaaMtpTV97WiAhm5KwrCkwsYjzq1eeSDog6l/",
  },
  {
    id: "lindsey-g",
    name: "Lindsey G.",
    quote:
      "My experience with Shiny Spaces has been top notch! They are quick to respond to any communication. I love coming home to a clean house. I would recommend their services. Give them a call....You will not be disappointed!",
    sourceUrl:
      "https://www.facebook.com/1851523132/posts/pfbid021Rj2TGaMHCBF2nnmzbVPo5WDaitc61YzLF3ram6vPLd7YRKaUYHcYuu9Z7bKpGkil/",
  },
  {
    id: "lindsey-s",
    name: "Lindsey S.",
    quote:
      "Pilar and her team are amazing! They do such a thorough job & handle all communication professionally. Trustworthy and kind.",
    sourceUrl:
      "https://www.facebook.com/100010141811030/posts/pfbid0hZydNQJtTm1DDEw5TBtx5GqjFSdKVT5m2M8rioLcd3USy2XaDkzW1eNCiksKFU5hl/",
  },
  {
    id: "nuha-m",
    name: "Nuha M.",
    quote: "Shiny Spaces are the best, I highly recommend them for a deep clean.",
    sourceUrl:
      "https://www.facebook.com/100016816202015/posts/pfbid031NfcGNYVrVtUAcGD13Fk1yCMngNJPTmqfsb3g1pfEv2ud5DLZg5hPZbghPEngHF9l/",
  },
  {
    id: "rachel-o",
    name: "Rachel O.",
    quote:
      "We had a wonderful experience with Shiny Spaces!! They responded to text quickly and did an amazing job. I hired someone else but after little progress on my house and a large bill. I am so glad I switched it Shiny Spaces!! Their services is what I thought a cleaning crew was suppose to do. They came in, did my whole house, and left it clean and they did it all for a better price! I'm staying with this company! I'd you need some help cleaning your home for any reason, you won't be sorry if you choose Shiny Spaces !!",
    sourceUrl:
      "https://www.facebook.com/1113056401/posts/pfbid0NU9cmJdyF7vHz84VKDHaLWBxxDi5i5Z62XfY9fNgWGYZyr4jywWcZJq6i7G4oRTxl/",
  },
  {
    id: "mike-l",
    name: "Mike L.",
    quote:
      "Their work is very thorough and they addressed all our issues, but the best part is their communication. Easy scheduling, reminders and alerts are super helpful. “Best birthday present ever,” said my wife!",
    sourceUrl:
      "https://www.facebook.com/1622806084/posts/pfbid02v6mZ2hXmVWqVgKJHmRz8JPyEgsPhn1HiZPsTxxNeJ9TE9EQdaX1ZqGRExsotD7k8l/",
  },
  {
    id: "hillary-d",
    name: "Hillary D.",
    quote:
      "I have worked with many other cleaning companies but shiny spaces outshined them all. They are hardworking and paid attention to every detail. The deep clean they did for me went above and beyond all my expectations. I can not recommend them highly enough!",
    sourceUrl:
      "https://www.facebook.com/100007560030200/posts/pfbid0ADdQEkLFGjEiiZ6ae96tc6b1Gu8eZwghSJRA6ntBE1av5EY2x4JrCnhefJcXnQkQl/",
  },
  {
    id: "rusty-p",
    name: "Rusty P.",
    quote:
      "We tried Shiny Spaces and they really did a great job! We are scheduling them for regular visits going forward. Would recommend them with no reservations!",
    sourceUrl:
      "https://www.facebook.com/1010755368/posts/pfbid02tpBJaH3hR7qBQVDGaRDBX2JzphB22pV8MCKLH867WvazkSvTz8rsrXrtSiBejfjsl/",
  },
  {
    id: "james-g",
    name: "James G.",
    quote: "Just plain amazing. and with a smile=)",
    sourceUrl:
      "https://www.facebook.com/1009793508/posts/pfbid02RUSvFYJ7VF9KnHiE9DdSQcYHaRM4sbMeV6ETkiYtZ2UtF3ESusbVjNtRvpR8F9Dsl/",
  },
  {
    id: "tracy-s",
    name: "Tracy S.",
    quote: "Did an amazing job really efficient",
    sourceUrl:
      "https://www.facebook.com/1401105439/posts/pfbid02nCXJnJfS3wRg3geoJ2TAQa2jY2dWNhdTMcFdqhfRpJFLtiejaFzWzj8EixsBpqQul/",
  },
  {
    id: "malinda-p",
    name: "Malinda P.",
    quote:
      "Highly recommend Shiny Spaces! Not only do they do an amazing job but they also are quick to respond to my texts and fit me in their busy schedules",
    sourceUrl:
      "https://www.facebook.com/1206198640/posts/pfbid02uwvV2HQ2J2P1XeQSpN1aY4T1JoHU4zw2QGumAVtZcKaDp6ouitC8zVpX27YwS15Ll/",
  },
  {
    id: "isabel-r",
    name: "Isabel R.",
    quote:
      "Excelent services very professional very dedicated hard worker pay atencion to details left the house very clean and smelling fresh and a great Rates",
    sourceUrl:
      "https://www.facebook.com/1184430599/posts/pfbid02uMJXEoWNANAQqxLXFGJTNHitG76g2YF9eHsgPqjfrKNoBb6okfLWpFcBfKFizD8Cl/",
  },
  {
    id: "rebecca-j",
    name: "Rebecca J.",
    quote: "Did an amazing job on a move out clean! We definitely recommend!",
    sourceUrl:
      "https://www.facebook.com/100041356716271/posts/pfbid0q9SNLhitP6EBJsXhyfeRjqb4pZi3kDqUWihQUyE7AWD7vKQEhGrvjq6bR18EttwCl/",
  },
];
