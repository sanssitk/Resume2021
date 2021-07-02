const text =
  "Worked with lots of Web jobs for Upwork Clients :\n * Participated with business analyst to understand the business requirement. \n * Built rich front-end user interactive (UI) using HTML5, CSS3, and Bootstrap. \n * Worked with Google and Facebook login Authentication using firebase. \n * Maintaining Parent and child elements by using State and Props in React.js.  \n * Build high quality, scalable and reusable components for front-end solutions. \n * Worked with debugging tools of Google Chrome and react developer tool. \n * Used React-Router to turn application into Single Page Application. \n * Called the Restful web services calls for POST, PUT, DELETE and GET methods. ";
const newText = text.split("\n").map((i) => {
  return <p>{i}</p>;
});

export default [
  {
    field: "employment",
    color: "#4ca5d0",
    details: [
      {
        id: 1.1,
        title: "Full Stack Web application developer",
        company: "Upwork. (Part time Remote Work)",
        start: "2018",
        end: "Present",
        description: newText,
      },
      {
        id: 1.2,
        title: "JavaScript Developer",
        company: "KTM Rush",
        start: "2015",
        end: "2017",
        description:
          "Handled Browser compatibility issues for different browsers related to CSS & HTML. Developed web applications using vanilla Js, Jquery, Bootstrap. Developed fully dynamic responsive web application using flexbox, grid and media query.	Created interface to manage user menu using JavaScript and JQuery. Worked on form and subscription validation. Successfully completed user end blog post web application using vanilla Js, nodeJs. Created a class object as a helper function.",
      },
      {
        id: 1.4,
        title: "Web Design",
        company: "DigitalFlow",
        start: "2015",
        end: "2015",
        description:
          "Worked in few web projects using HTML5, CSS, JavaScript, Bootstrap, jQuery for front-end development. Created wire frame for the layout template and flow diagrams. Prepared documentation for application requirements. Set, enforced and optimized internal policies to maintain efficiency and responsive ness to demands.",
      },
    ],
  },
  {
    field: "certification",
    color: "#FF9800",
    details: [
      {
        id: 3.4,
        title: "Modern React Redux Mastery",
        company: "Udemy E-Learning: UC-2D35JON",
        start: "2020",
        end: "2021",
        description: "",
      },
      {
        id: 3.1,
        title: "Complete Web Application Bootcamp",
        company: "Udemy E-Learning: UC-2D35JON",
        start: "2018",
        end: "2019",
        description: "",
      },
      {
        id: 3.2,
        title: "Master JavaScript",
        company: "Clever Programmer",
        start: "2016",
        end: "2016",
        description: "",
      },
      {
        id: 3.3,
        title: "Web Design & Developer",
        company: "MCIT",
        start: "2015",
        end: "2015",
        description: "",
      },
    ],
  },
  {
    field: "education",
    color: "#6ca338",
    details: [
      {
        id: 2.1,
        title: "Tribhuwan University",
        company: "Bachelor Degree in Business Management (BBS)",
        start: "2009",
        end: "2013",
        description:
          "Have completed Bachelor Degree in Business Management (BBS) that provides an immersive hands-on curriculum with a focus on today's business.",
      },
    ],
  },
];
