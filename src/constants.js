const headerInfo = [
  {
    text: "About",
    href: "#about",
  },
  {
    text: "Experience",
    href: "#experience",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

const experienceInfo = [
  {
    jobTitle: "Photographer",
    company: "Andrew Galvin Photography",
    location: "Weymouth, MA",
    jobDescription: ["Specialize in senior and professional portraits"],
    durationWorked: "Aug 2016 - Present",
  },
  {
    jobTitle: "IT Support Specialist",
    company: "Bay State Physical Therapy",
    location: "Braintree, MA",
    jobDescription: [
      "Researched and implemented new software to improve customer support",
    ],
    durationWorked: "Jan 2021 - May 2022",
  },

  {
    jobTitle: "Merchandise Associate",
    company: "Home Sense",
    location: "Braintree, MA",
    jobDescription: [
      "Key contributor to the successful opening of a new store",
    ],
    durationWorked: "May 2018 - Jan 2021",
  },
  {
    jobTitle: "Summer Intern: Referrals Department",
    company: "Harbor Health Services",
    location: "Brockton, MA",
    jobDescription: ["Assisted patients with obtaining medical referrals"],
    durationWorked: "May 2019 - Aug 2019",
  },
  {
    jobTitle: "Prep Cook",
    company: "Olympic Pizza",
    location: "Weymouth, MA",
    jobDescription: ["Prepared food vital for day to day business"],
    durationWorked: "Jun 2016 - Sept 2018",
  },
];

const decToBinary = (N) => {
  // Code from: https://www.geeksforgeeks.org/program-decimal-binary-conversion/

  // To store the binary number
  var B_Number = 0;
  var cnt = 0;
  while (N !== 0) {
    var rem = N % 2;
    var c = Math.pow(10, cnt);
    B_Number += rem * c;
    N = parseInt(N / 2);

    // Count used to store exponent value
    cnt++;
  }
  return B_Number;
};

export { headerInfo, decToBinary, experienceInfo };
