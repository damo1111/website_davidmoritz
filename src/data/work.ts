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
    fullName: "Just Eat Takeaway.com",
    role: "Head of Product",
    period: "May 2024 — Mar 2026",
    context:
      "Consolidated multiple brands into one app across every region. Scaled experiences serving tens of millions of active customers, driving double-digit growth in orders and order value through experimentation, personalisation and a relentless focus on customer experience.",
    location: "London Area · Hybrid",
  },
  {
    company: "IAG Loyalty",
    fullName: "IAG Loyalty",
    role: "Head of Product",
    period: "Nov 2021 — May 2024",
    context:
      "Led a cross-functional team of 40+ across five squads building the Avios ecosystem — purchase journeys, British Airways / Iberia / Aer Lingus / Vueling reward integration, and cross-partner redemption with Nectar, Finnair and Qatar Airways. Sat on the senior leadership team shaping brand-wide strategy.",
    location: "Greater London",
  },
  {
    company: "Zoopla",
    fullName: "ZPG",
    role: "Senior Product Manager",
    period: "Nov 2019 — Nov 2021",
    context: "UK's second-largest property portal. Consumer search and agent tools.",
    location: "London Area",
  },
  {
    company: "REA Group",
    fullName: "REA Group",
    role: "Senior Product Manager",
    period: "May 2019 — Nov 2019",
    context: "Australia's largest property marketplace. Consumer product.",
    location: "Greater Melbourne",
  },
  {
    company: "Racing Post",
    fullName: "Racing Post",
    role: "Product Strategist (Contract)",
    period: "Mar 2019 — May 2019",
    context: "Digital product strategy for the UK's leading horseracing media brand.",
    location: "London Area",
  },
  {
    company: "Aesop",
    fullName: "Aesop",
    role: "Global Head of Digital Product & Programs",
    period: "Jun 2018 — Mar 2019",
    context: "Global digital product and program leadership for the skincare retailer.",
    location: "Melbourne · Contract",
  },
  {
    company: "REA Group",
    fullName: "REA Group",
    role: "Senior Product Manager",
    period: "Sep 2017 — Jun 2018",
    context: "Australia's largest property marketplace. Consumer and commercial product.",
    location: "Greater Melbourne",
  },
  {
    company: "Tesco",
    fullName: "Tesco PLC",
    role: "Lead Product Manager",
    period: "Jan 2015 — Sep 2017",
    context: "Digital and loyalty product at the UK's largest retailer.",
    location: "London",
  },
  {
    company: "Freelance",
    fullName: "Various",
    role: "Product & eCommerce Consultant",
    period: "Jan 2014 — Dec 2014",
    context: "Independent product and eCommerce consulting for multiple UK retailers.",
    location: "United Kingdom",
  },
];
