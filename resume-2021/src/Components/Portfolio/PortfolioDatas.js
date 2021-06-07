export const portfolioButtons = ["all", "javascript", "react", "angular", "ecommerce", "wordpress-cms"]

const url = process.env.PUBLIC_URL;
const jsLink = "projects/Javascript/Javascript";
const recLink = "projects/React/React";
const angLink = "projects/Angular/Angular";
const emcLink = "projects/Ecommerce/Ecommerce";
const wrdLink = "projects/Wordpress/Wordpress";

export const portfolioGallery = 
{
  "ecommerce": [
    `${url}${emcLink}1.jpeg`,
    `${url}${emcLink}2.jpg`,
    `${url}${emcLink}3.jpg`,
  ],
  "javascript": [
    `${url}${jsLink}1.jpg`,
    `${url}${jsLink}2.jpg`,
    `${url}${jsLink}3.png`,
    `${url}${jsLink}4.png`,
  ],
  "react": [
    `${url}${recLink}1.png`,
    `${url}${recLink}2.jpg`,
    `${url}${recLink}3.jpg`,
    `${url}${recLink}4.png`,
    `${url}${recLink}5.jpeg`,
    `${url}${recLink}6.png`,
  ],
  "angular": [
    `${url}${angLink}1.png`,
    `${url}${angLink}2.png`,
    `${url}${angLink}3.png`,
    `${url}${angLink}4.jpeg`,
  ],  
  "wordpress-cms": [
    `${url}${wrdLink}1.jpeg`, 
    `${url}${wrdLink}2.png`
  ],
  // link to be modified
};

// [
//   {
//     javascript : [
//       `${url}${jsLink}1.jpg`, 
//       `${url}${jsLink}2.jpg`, 
//       `${url}${jsLink}3.png`, 
//       `${url}${jsLink}4.png`,
//     ]
//   },
//   {
//     react : [
//       `${url}${recLink}1.png`, 
//       `${url}${recLink}2.jpg`, 
//       `${url}${recLink}3.jpg`, 
//       `${url}${recLink}4.png`, 
//       `${url}${recLink}5.jpeg`, 
//       `${url}${recLink}6.png`,
//     ]
//   },
//   {
//     angular : [
//       `${url}${angLink}1.png`,
//       `${url}${angLink}2.png`,
//       `${url}${angLink}3.png`,
//       `${url}${angLink}4.jpeg`,
//     ]
//   },
//   {
//     ecommerce : [
//       `${url}${emcLink}1.jpeg`,
//       `${url}${emcLink}2.jpg`,
//       `${url}${emcLink}3.jpg`,
//     ]
//   },
//   {
//     wordpress : [
//       `${url}${wrdLink}1.jpeg`, 
//       `${url}${wrdLink}2.png`,
//     ]
//   },
// ];

