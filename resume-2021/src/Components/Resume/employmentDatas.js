const text =
  "* Worked on Dashboard page and form where user can get notification about future updates. \n * Worked on dynamic chart, graph build, column range. \n * Worked on scripts for QuickBooks API, routing-map and generating inspection report. \n * Experience working on Chart.js to create charts & used Google static map API for maps. \n * Worked with Google and Facebook login Authentication using firebase. \n * Developed custom filter, pagination, navigation in React.JS for the application. \n * Utilized Bootstrap, Semantic UI, RESTful API, jQuery to develop a reactive web app. \n * Used React-Router to turn application into Single Page Application. ";
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
        company: "Freelance",
        start: "2018",
        end: "Present",
        description: newText,
      },
      {
        id: 1.2,
        title: "Software Developer",
        company: "Korevariance",
        start: "Apr 2020",
        end: "Oct 2020",
        description:
          "Successfully contributed for Adult Living 360 (MyRUI) project. Rendering news feeds, dining menu, event calendar with event details and appointment booking system. Build User profile, marketplace, contact us option, notification and family access. Used Ajax in JSON format for asynchronous request handling and partial refreshing by the user.",
      },
      {
        id: 1.3,
        title: "Software Developer",
        company: "DrFIRST",
        start: "Nov 2019",
        end: "Mar 2020",
        description:
          "Successfully contributed in modernizing code and rendering the blog post. Supported in rendering, updating blog post, filter and search post. Build landing page for blog post and carousel gallery.Used their API to get data and render in user page dynamically.",
      },
      {
        id: 1.4,
        title: "JavaScript Developer",
        company: "KTM Rush",
        start: "2015",
        end: "2017",
        description:
          "Handled Browser compatibility issues for different browsers related to CSS & HTML. Developed web applications using vanilla Js, Jquery, Bootstrap. Developed fully dynamic responsive web application using flexbox, grid and media query.	Created interface to manage user menu using JavaScript and JQuery. Worked on form and subscription validation. Successfully completed user end blog post web application using vanilla Js, nodeJs. Created a class object as a helper function.",
      },
    ],
  },
  {
    field: "certification",
    color: "#FF9800",
    details: [
      {
        id: 3.5,
        title: "NodeJs Developer Course",
        company: "Udemy",
        start: "2020",
        end: "2020",
        description: "",
      },
      {
        id: 3.4,
        title: "Modern React Redux Mastery",
        company: "Udemy",
        start: "2019",
        end: "2019",
        description: "",
      },
      {
        id: 3.1,
        title: "Complete Web Application Bootcamp",
        company: "Udemy",
        start: "2017",
        end: "2017",
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
        title: "Web Design & JavaScript",
        company: "IT Training Nepal",
        start: "2014",
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
