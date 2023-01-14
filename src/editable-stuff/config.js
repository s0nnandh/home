// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sonnandh",
  middleName: "",
  lastName: "Kalaka",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/s0nnandh",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sonnandh/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/__.sonnandh.__/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/sonnandh",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpeg"),
  imageSize: 500,
  message:
    "I am a fourth-year Computer Science student at IIT Bombay with a passion for software development in High-Frequency Trading. I have experience in system design, algorithms, NLP and competitive programming. I am interested in solving challenging problems through brainstorming and collaboration. I gained valuable technical and soft skills during my internship as a software engineer at Amazon, and also stay active through sports like badminton, volleyball, and chess.",
  resume: "https://docs.google.com/document/d/1LXd0uqABQh3ek3yLoL2XtVaMIyiKiFLf/edit?usp=sharing&ouid=102716663960137610145&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Key Projects",
  gitHubUsername: "s0nnandh", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Restaurant-Management-System", "Mini-Moodle", "Cricket-Website", "NSE-Analytics-Website"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 90 },
    { name: "Python", value: 75 },
    { name: "Java/Kotlin", value: 85 },
    { name: "React", value: 65 },
    { name: "Django", value: 90 },
    { name: "Express", value: 65 },
    { name: "Angular", value: 55 },
    { name: "SQL", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities at HFT firms! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sonnandh@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Placement Coordinator',// Here Add Company Name
      company: 'Indian Institue of Technology, Bombay',
      companylogo: require('../assets/img/iitb.png'),
      date: 'Aug 2022 – Present',
    },
    {
      role: 'Software Engineering Intern',// Here Add Company Name
      company: 'Amazon',
      companylogo: require('../assets/img/amazon.webp'),
      date: 'May 2022 – July 2022',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
