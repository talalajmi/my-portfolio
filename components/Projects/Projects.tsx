import { motion } from "framer-motion";
import styles from "./Projects.module.css";

type Project = {
  img: string;
  name: string;
  description: string;
};

const projects: Project[] = [
  {
    img: "https://w7.pngwing.com/pngs/266/560/png-transparent-python-computer-icons-programmer-javascript-programming-language-python-logo-angle-text-logo.png",
    name: "TelyPay Invoice",
    description:
      "The TelyPay Invoice application is a tool designed to help businesses manage their invoices in an efficient and streamlined manner. Built with React and Bootstrap 5 and Redux, it provides a visually appealing and user-friendly interface that makes the invoicing process a breeze. The application is powered by typescript, a technology that helps ensure stability and reliability. Additionally, the platform integrates with TelyPay's custom API, which allows it to retrieve all the necessary data to run smoothly, making sure that the invoicing process is always up-to-date. Whether you're a technical person or not, the TelyPay Invoice application provides an easy-to-use solution for managing invoices, freeing up time to focus on other important tasks.",
  },
  {
    img: "https://w7.pngwing.com/pngs/266/560/png-transparent-python-computer-icons-programmer-javascript-programming-language-python-logo-angle-text-logo.png",
    name: "TelyPay Landing Page",
    description:
      "The TelyPay Landing Page is a custom template developed using Next.js, a popular JavaScript framework. The website is designed to be highly responsive, ensuring optimal user experience across all screen sizes and devices. The development of the website involved incorporating custom design elements to fit TelyPay's unique needs, making it a seamless representation of their brand and services. The website is easy to navigate, providing potential customers with quick access to the information they need about TelyPay and its offerings.",
  },
  {
    img: "https://w7.pngwing.com/pngs/266/560/png-transparent-python-computer-icons-programmer-javascript-programming-language-python-logo-angle-text-logo.png",
    name: "Filmpire",
    description:
      "A movie application. Developed with the latest front-end technologies, such as React, Redux, Alan AI for voice-powered search, Material UI, and the TMDB API for movie-related information, this application provides a seamless and comprehensive movie-watching experience. The application's intuitive interface, combined with its user-friendly design, makes finding and watching movies a breeze. With Alan AI's voice-powered search, users can effortlessly find the movies they're looking for, and the TMDB API provides accurate and up-to-date movie information. The application also features both dark and light modes, providing a visually appealing and modern aesthetic that is sure to please movie enthusiasts of all types. Whether you're a movie buff or just looking for something to watch, Filmpire is the perfect solution for all your movie-watching needs.",
  },
  {
    img: "https://w7.pngwing.com/pngs/266/560/png-transparent-python-computer-icons-programmer-javascript-programming-language-python-logo-angle-text-logo.png",
    name: "Netflix CLone",
    description:
      "A movie streaming application that offers a rich and immersive experience for movie enthusiasts. Built with cutting-edge front-end technologies such as React, JavaScript, and CSS, this application features a sleek and intuitive user interface that makes browsing and watching movies effortless. With the integration of the IMDB API, movie information such as titles, descriptions, and trailers are displayed in real-time, providing users with up-to-date and accurate content. Whether you are a tech-savvy individual or simply someone who enjoys movies, this application delivers a seamless and enjoyable movie-watching experience.",
  },
  {
    img: "https://w7.pngwing.com/pngs/266/560/png-transparent-python-computer-icons-programmer-javascript-programming-language-python-logo-angle-text-logo.png",
    name: "AirBnb Clone",
    description:
      "A vacation rental platform that offers a convenient and seamless booking experience for travelers. This platform was created with a user-friendly design, making it easy for anyone to search and book the perfect vacation rental. The platform allows users to easily browse listings, view property details, and make reservations, all in one place. With the use of technologies such as React, JavaScript, and CSS, this platform provides a visually appealing and intuitive interface that makes booking a vacation rental a breeze. Whether you are a seasoned traveler or just looking for a hassle-free way to book your next vacation rental, this platform delivers a smooth and enjoyable experience.",
  },
  {
    img: "https://w7.pngwing.com/pngs/266/560/png-transparent-python-computer-icons-programmer-javascript-programming-language-python-logo-angle-text-logo.png",
    name: "Simple E-Commerce App",
    description:
      "A comprehensive online shopping platform that offers customers a convenient and seamless shopping experience. With its user-friendly design and intuitive interface, this platform makes browsing and purchasing products a breeze. Customers can easily view a selection of products, including detailed information and images, add items to their cart, and complete their purchases securely using Stripe's payment gateway. Please note that the Stripe payment portal is in test mode and should not be used with real credit card information. The platform is designed to provide a smooth and efficient shopping experience, with state management handled seamlessly in the background. The stylish design, accomplished with CSS, adds to the overall appeal of the platform and creates a visually pleasing shopping experience. Whether you are a seasoned online shopper or just starting, this e-commerce application is a great example of how shopping online can be easy, secure, and enjoyable.",
  },
];

const imageInitialAnimation = {
  y: -300,
  opacity: 0,
};

const imageAnimationDuration = { duration: 1.2 };

const imageWhileInViewAnimation = { opacity: 1, y: 0 };

const contentInitialAnimation = {
  opacity: 0,
};

const contentAnimationDuration = {
  duration: 1.5,
};

const contentAnimatedState = {
  opacity: 1,
};

function Projects() {
  return (
    <motion.div
      initial={contentInitialAnimation}
      animate={contentAnimatedState}
      transition={contentAnimationDuration}
      className={styles.content}
    >
      <h3 className="sectionName">Projects</h3>

      <div className={styles.carousel}>
        {projects.map((project, i) => (
          <motion.div key={i} className={styles.projectContainer}>
            <motion.img
              initial={imageInitialAnimation}
              transition={imageAnimationDuration}
              whileInView={imageWhileInViewAnimation}
              viewport={{ once: true }}
              src={project.img}
              alt=""
              className={styles.image}
            />

            <div className={styles.column}>
              <h4 className={styles.projectName}>
                <span className={styles.underlineText}>
                  Project {i + 1} of {projects.length}:{" "}
                </span>
                {project.name}
              </h4>

              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.skewedBackgroundColor} />
    </motion.div>
  );
}

export default Projects;
