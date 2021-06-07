const text =
    "Worked with lots of Web jobs for Upwork Clients :\n * Strong knowledge of OOP design patterns, Wireframes, and technologies. \n * Strong knowledge of NoSQL, SQL & Firebase technologies \n * Strong knowledge of automated testing methodologies (TDD, BDD). \n * Strong teamwork, leadership, and time management skills. \n * Experience with agile software development (Scrum, Kanban). \n * Experience with API integrations via REST or Microservices. \n * Excellent problem solving and debugging skills. \n * Passion for excellent technical documentation. \n";
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
        start: "2017",
        end: "Present",
        description: newText,         
      },
      {
        id: 1.2,
        title: "Web Application Developer",
        company: "Mt. Everest Consulting",
        start: "2018",
        end: "2020",
        description: "Build and support modern accessible websites and creative web ideas. Implement software development solutions for the web department and mobile app creation. Create automated processes that increase workflow speed.", 
      },          
      {
        id: 1.3,
        title: "Senior Software Engineer",
        company: "DigitalFlow",
        start: "2016",
        end: "2017",
        description:
          "Worked as a senior software engineer and I could successfully lead about 5 CMS and Commerce Projects from scratch to finish.",
      },
      {
        id: 1.4,
        title: "Software Engineer",
        company: "Flex Solution",
        start: "2014",
        end: "2016",
        description:
          "Worked in some website projects, using NodeJs, ExpressJs for back-end development and Bootstrap, CSS, HTML5, Ajax/jQuery for front-end development.",
      },
    ],
  },
  {
    field: "education",
    color: "#6ca338",
    details: [
      {
        id: 2.1,
        title: "Makwanpur Multiple Campus",
        company: "Bachelor Degree in Business Management (BBS)",
        start: "2009",
        end: "2013",
        description:
          "Have completed Bachelor Degree in Business Management (BBS) that provides an immersive hands-on curriculum with a focus on today's business.",
      },
    ],
  },
  {
    field: "certification",
    color: "#FF9800",
    details: [
      {
        id: 3.1,
        title: "React JS",
        company: "Clever Programming Online",
        start: "2018",
        end: "Present",
        description: "",
      },
      {
        id: 3.2,
        title: "Complete Web bootstrap",
        company: "Udemy E-Learning: UC-2D35JON",
        start: "2016",
        end: "2016",
        description: "",
      },
      {
        id: 3.3,
        title: "Web Developer and UI",
        company: "MCIT",
        start: "2012",
        end: "2013",
        description: "",
      },
    ],
  },
];
