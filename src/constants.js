import nokinysToolbox from "./files/projects/nokinystoolbox.png"
import connect4 from "./files/projects/connect4.png"
import discordticket from "./files/projects/discordtickettool.png"
import fooji from "./files/projects/fooji.png"
import supremetool from "./files/projects/supremetool.gif"
import sneakerprofilemanager from "./files/projects/sneakerprofilemanager.png"
import sneakerbotcheckoutlogs from "./files/projects/sneakerbotcheckoutlogs.png"

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

const projectInfo = [
  {
    projectTitle: "Connect 4",
    projectLanguage: "Java",
    projectImg: connect4,
    projectDescription: "Connect 4 Using JavaFX and Scenebuilder",
    githubLink: "https://github.com/andrewgalvin/Connect4",
    websiteLink: null,
    yearCreated: "2019",
  },
  {
    projectTitle: "Fooji Twitter Monitor",
    projectLanguage: "Python",
    projectImg: fooji,
    projectDescription:
      "Monitors tweets for Fooji giveaways with a one-click link to Tweet to enter",
    githubLink: null,
    websiteLink: null,
    yearCreated: "2020",
  },
  {
    projectTitle: "Supreme Tool",
    projectLanguage: "Python",
    projectImg: supremetool,
    projectDescription:
      "Supreme tool with authentication API to add items to cart in milliseconds",
    githubLink: "https://github.com/andrewgalvin/UnnamedSupremeBot",
    websiteLink: null,
    yearCreated: "2020",
  },
  {
    projectTitle: "Sneaker Profile Manager",
    projectLanguage: "Python",
    projectImg: sneakerprofilemanager,
    projectDescription:
      "Discord bot to create and convert profiles for most sneaker bots",
    githubLink: null,
    websiteLink: null,
    yearCreated: "2020",
  },
  {
    projectTitle: "Discord Ticket Tool",
    projectLanguage: "Python",
    projectImg: discordticket,
    projectDescription:
      "Decision tree automated ticket tool with automated ticket logging to Google Sheets",
    githubLink: null,
    websiteLink: null,
    yearCreated: "2020",
  },
  {
    projectTitle: "Sneaker Bot Checkout Logs",
    projectLanguage: "ReactJS",
    projectImg: sneakerbotcheckoutlogs,
    projectDescription:
      "Website to monitor checkout logs and specific Shopify site's bot protection status",
    githubLink: null,
    websiteLink: null,
    yearCreated: "2021",
  },
  {
    projectTitle: "SCP Automated",
    projectLanguage: "Python",
    projectImg: nokinysToolbox,
    projectDescription:
      "Automatically monitor file for changes and if a change occurs, send it to my school's super computer",
    githubLink: "https://github.com/andrewgalvin/scp-automated",
    websiteLink: null,
    yearCreated: "2021",
  },
  {
    projectTitle: "Twitter Web Scraper",
    projectLanguage: "Python",
    projectImg: nokinysToolbox,
    projectDescription:
      "Script to scrape tweets from Twitter given a query without the help of other libraries such as Tweepy",
    githubLink: "https://github.com/andrewgalvin/twitter-scraper",
    websiteLink: null,
    yearCreated: "2021",
  },
  {
    projectTitle: "BTC vs Twitter Data",
    projectLanguage: "Python / PySpark",
    projectImg: nokinysToolbox,
    projectDescription:
      "Bitcoin price comparison in relation to the sentiment analysis of Tweets which contain the word BTC",
    githubLink: "https://github.com/andrewgalvin/BTC-vs-Twitter",
    websiteLink: null,
    yearCreated: "2021",
  },
  {
    projectTitle: "Nokiny's Toolbox",
    projectLanguage: "MongoDB / ExpressJS / ReactJS / NodeJS",
    projectImg: nokinysToolbox,
    projectDescription:
      "Full stack website with a SAAS model to track your inventory and expenses in addition to monitoring your email for new orders",
    githubLink: null,
    websiteLink: "https://www.nokinystoolbox.com/",
    yearCreated: "2021",
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

export { headerInfo, decToBinary, experienceInfo, projectInfo };
