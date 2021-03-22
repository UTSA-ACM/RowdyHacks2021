import SocialLogo from "./SocialLogo";

const QuoteText: string = 
  "\"Any sufficiently advanced technology is indistinguishable from magic\"";

const QuoteAuthor: string = 
  "- Arthur C. Clarke";

const AboutTextBlock1: string =
  "It's a great opportunity to network, meet new people, and build your connnections";
const AboutTextBlock2: string =
  "Whether you are starting out or finishing your degree, RowdyHacks has something for everyone";
const AboutTextBlock3: string =
  "We believe that inclusion and diversity bring forth the most creative ideas, so we welcome all disciplines and backgrounds";

const MissionTitle: string = "TRACKS";

const MissionText: Array<string> = [
  "We have three different tracks at RowdyHacks 2020 you can tailor your project towards.",
  "For our hackers who create projects that mainly focus on the topics of Cybersecurity.",
  "First time coders with no technical experience have the opportunity to learn coding basics and be able to compete against other first time hackers for prizes. This track is specifically for people who have never coded before!",
  "If you already have an idea in mind and it doesn't fall under our Cyber or Learners Tracks, our General Track is for you!"
];

const FAQQuestions: Array<string> = [
  "What is a hackathon?",
  "How much does it cost to participate?",
  "What if I don't know how to code?",
  "How big are the teams?",
  "What should my project be?",
  "Can I work on previous projects?",
  "What if I'm not a UTSA student?",
  "What will I need?",
  "What actions will RowdyHacks be taking regards to COVID-19?",
  "RowdyHacks and another hackathon are during the same weekend. Can I submit my project to both of them?",
  "How long does this hackathon last?",
  "What are the different competition tracks?",
  "Who can attend?",
  "What if this FAQ didn't answer my question?"
];

const FAQAnswers: Array<any> = [
  "Our hackathon is a 40 hour event where teams collaborate on a project to create social impact, satisfy company challenges, and innovate new solutions. At RowdyHacks, mentors will be willing to assist you on your quest to creating your project.",
  "RowdyHacks is absolutely FREE thanks to our awesome partners. You don't have to worry about a thing -- we'll provide t-shirts, swag, and prizes.",
  "No worries! RowdyHacks is for everyone from all coding and non-coding backgrounds! We will have plenty of mentors and workshops to help you learn throughout the event.",
  "Teams can consist of up to 4 students! We encourage hackers to participate as part of a team. Don't have a team? No worries, we will have an opportunity before the event for you to meet other hackers and form teams!",
  "Anything! You can make a new social media website, a simple weather app, a sentimental analysis tool for tweets...anything in your wildest imagination, you can create. Your team can come prepared with an idea or come up with one on the spot.",
  "No, all projects must be built from scratch. However, you can start brainstorming your ideas prior to the event. Any team found working on previous projects will be automatically disqualified.",
  "No problem! RowdyHacks is open to ANY college/university student over 18 years old. We're so excited to see students from all over collaborating and innovating together at this year's event.",
  "Any hardware you plan on using for the project -- your laptop, charger, portable mouse, phone, Raspberry Pi, VR headset, robots, etc. Don't forget to keep water and snacks on hand!",
  "RowdyHacks VI will be virtual and hosted through WHOVA! Keep up to date through our social medias and our mailing list.",
  "Unfortunately, even if you attend two virtual hackathons on the same weekend, you can't submit the same project to both hackathons.",
  "RowdyHacks VI will last 40 hours. We wanted to extend RowdyHacks this year to give hackers some extra time to hack and squeeze in some quality sleep.",
  "Hackers can submit their projects to either the Learners Track (geared towards those who are in intro CS classes or those who haven't coded before) or the General Track (for those with moderate to advanced skills). In addition to submitting projects to a track, hackers can also submit their project for cybersecurity, hardware, or sponsor prizes.",
  "RowdyHacks is completely free to attend and open to any university or college student over 18 years of age. We also welcome recent grads! If you've graduated in the past year, you're also eligible to attend!",
  "Please e-mail team@rowdyhacks.org. We will get back to you and give you the best support."
];

const LocationText: string =
  "RowdyHacks 2021 will be virtual on Whova.";

const SocialMediaText: string =
  "For live updates and announcements, follow us on social media!";

const FooterText: string =
  "RowdyHacks is hosted by Roadrunners from UTSA. If you're interested in becoming a partner, please e-mail ";

const FooterText2: string = 
  "And take a look at ";

const socialLogos: Array<SocialLogo> = [
  {
    link: "https://twitter.com/rowdyhacks",
    src: "twitter",
    altName: "Twitter"
  },
  {
    link: "https://facebook.com/rowdyhacks",
    src: "facebook",
    altName: "Facebook"
  },
  {
    link: "https://www.linkedin.com/company/51637167",
    src: "linkedin",
    altName: "Linkedin"
  },
  {
    link: "https://www.instagram.com/rowdyhacks",
    src: "instagram",
    altName: "Instagram"
  }
];

const UpdatesConstants = {
  updates: [
    {
      title: "Coronavirus Update",
      date: "Mar. 15, 2020",
      message: [
        "RowdyHacks 2020 is in 13 days! 🎉 The health and safety of all those involved in RowdyHacks is our number one priority, and any decision our board makes will put that first and foremost. Due to the Coronavirus COVID-19, we have decided to move RowdyHacks online. This means RowdyHacks will be virtual! All workshops, ceremonies, and activities will still be available through streaming and recordings. All prizes and swag will be shipped out as well! 🎁📦",
        "RowdyHacks swag is on the way and it is a necessity that you get all the amazing swag (shirts, mugs, stickers, socks, snacks, +more!). If you are local to San Antonio, TX, we will be on UTSA Campus in the HEB Student Union Galleria on Saturday March 28th from 8 AM - 12 PM giving out all the RowdyHacks swag you could ever want. If you're not local, please update your hacker application with a valid mailing address so we can send you all your goodies. "
      ]
    },
    {
      title: "New Coronavirus Update",
      date: "Mar. 20, 2020",
      message: [
        "RowdyHacks 2020 is in 8 days! 🎉 The health and safety of all those involved in RowdyHacks is our number one priority, and any decision our board makes will put that first and foremost. All check-in will now be conducted solely online! There will be no in person pick up for getting any swag."
      ]
    },
    {
      title: "2021 Update",
      date: "Sept. 19, 2020",
      message: [
        "As the new officers of Rowdyhacks 2021 continue to monitor the Coronavirus impact, we will update on our Socials and here."
      ]
    }
  ]
};

const ScheduleConstants = {
  days: [
    {
      date: "March 24th",
      dayOfWeek: "Wednesday",
      events: [
        {
          title: "RowdyHacks Team Building Social",
          time: "5:15 PM CST",
          location: "Zoom.RowdyHacks.org",
          url: "https://zoom.rowdyhacks.org"
        }
      ]
    },
    {
      date: "March 26th",
      dayOfWeek: "Friday",
      events: [
        {
          title: "Tech Career Expo (UTSA Students Only)",
          time: "11:00 AM CST",
          location: "Handshake",
          url: "https://utsa.joinhandshake.com/career_fairs/23221One"
        },
        {
          title: "Hacker Check-in Starts",
          time: "2:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Sponsorship Fair",
          time: "4:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Show and Tell Team Building",
          time: "6:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Opening Ceremony",
          time: "7:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Hacking Begins",
          time: "8:00 PM CST",
          location: "",
          url: ""
        },
        {
          title: "UTSA Cyber Range: Live Demo",
          time: "8:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "101 Workshop: Intro to Java with Gage",
          time: "9:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "TechData: Intro to CTF",
          time: "9:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "101 Workshop: Intro to Python with Leon",
          time: "10:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Workshop: Utilizing Unity with Gene",
          time: "10:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Social: Loteria",
          time: "11:30 PM CST",
          location: "Whova",
          url: ""
        },
      ]
    },
    {
      date: "March 27th",
      dayOfWeek: "Saturday",
      events: [
        {
          title: "Social: Bob Ross",
          time: "1:30 AM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Workshop: How to Get Twilio's API Up and Running in 30 Minutes with Anna",
          time: "9:00 AM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "101 Workshop: Github 101 with Jenelle",
          time: "10:30 AM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "101 Workshop: Intro to ReactJS with Shivay",
          time: "10:30 AM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Workshop: Product Management Decoded with Krish",
          time: "11:00 AM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "CivTech: Half-Baked",
          time: "11:00 AM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "101 Workshop: C++ Crash Course with Nick",
          time: "12:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "TechData: Day in the Life of a Red Teamer",
          time: "12:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Workshop: Deep Learning and Cyber Security with Luis",
          time: "1:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "TechData: Day in the Life of a Blue Teamer",
          time: "1:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Social: Typing Contest",
          time: "2:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Accenture: Preparing for Your Future in Technology",
          time: "3:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "TechData: CTF Starts",
          time: "3:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "TechData: Security as a Team Force",
          time: "4:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "TechData Panel",
          time: "6:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Workshop: Cloud Computing with Comfort",
          time: "6:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Social: Project Show and Tell",
          time: "9:00 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Hackathon Organizer Meetup",
          time: "10:30 PM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Social: Trivia Night",
          time: "11:30 PM CST",
          location: "Whova",
          url: ""
        },
      ]
    },
    {
      date: "March 28th",
      dayOfWeek: "Sunday",
      events: [
        {
          title: "Workshop: Perfect your Pitch with Galicia",
          time: "8:00 AM CST",
          location: "Whova",
          url: ""
        },
        {
          title: "Hacking Ends, Submissions Due on Devpost",
          time: "12:00 PM CST",
          location: "",
          url: ""
        },
        {
          title: "Workshop: The Path to Post-Hackathon Success with Christina",
          time: "1:00 PM CST",
          location: "Whova",
          url: ""
        },
        // {
        //   title: "Judging Begins",
        //   time: "1:00 PM CST",
        //   location: "",
        //   url: ""
        // },
        {
          title: "Closing Ceremonies",
          time: "8:00 PM CST",
          location: "Whova",
          url: ""
        }
      ]
    },
  ]
};

export {
  QuoteText,
  QuoteAuthor,
  AboutTextBlock1,
  AboutTextBlock2,
  AboutTextBlock3,
  MissionTitle,
  MissionText,
  FAQQuestions,
  FAQAnswers,
  LocationText,
  SocialMediaText,
  FooterText,
  FooterText2,
  socialLogos,
  UpdatesConstants,
  ScheduleConstants
};
