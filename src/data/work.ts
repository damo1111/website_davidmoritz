export interface WorkRole {
  company: string;
  fullName: string;
  role: string;
  period: string;
  context: string;
  location: string;
}

export const work: WorkRole[] = [
  {
    company: "JET",
    fullName: "Just Eat Takeaway",
    role: "VP Product",
    period: "2020 — 2024",
    context:
      "19 global markets. Led product across consumer, restaurant, and logistics.",
    location: "Amsterdam / London",
  },
  {
    company: "IAG Loyalty",
    fullName: "British Airways Avios",
    role: "Head of Product",
    period: "2018 — 2020",
    context:
      "60-person product team. Avios loyalty platform across six airline partners.",
    location: "London",
  },
  {
    company: "REA Group",
    fullName: "REA Group",
    role: "Senior Product Manager",
    period: "2016 — 2018",
    context:
      "Australia's largest property marketplace. Consumer and commercial product.",
    location: "Melbourne",
  },
  {
    company: "Zoopla",
    fullName: "Zoopla",
    role: "Product Lead",
    period: "2014 — 2016",
    context: "UK's second-largest property portal. Consumer search and agent tools.",
    location: "London",
  },
  {
    company: "Tesco",
    fullName: "Tesco",
    role: "Senior Product Manager",
    period: "2012 — 2014",
    context: "Digital and loyalty product at the UK's largest retailer.",
    location: "London",
  },
  {
    company: "Amazon",
    fullName: "Amazon",
    role: "Product Manager",
    period: "2009 — 2012",
    context: "Marketplace and seller tools.",
    location: "London",
  },
];
