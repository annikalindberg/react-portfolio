const projects = [
    {
        title: "teQueenMatch",
        description: "Our final project at Technigo, where I, together with Irupé Pozo Graviz, came up with an idea how to address a problem we experienced when trying to address the gaps of representation and diversity within the tech industry. Specifically, we saw a lack of digital platforms aimed at connecting women and non-binary individuals within the tech community, particularly those from underrepresented groups or those new to the field. To bridge this gap, we developed a platform that enables users to find and connect with others based on mutual interests, experiences, and preferences. Imagine a Tinder designed for global tech talent, facilitating connections for mentorship, support, and shared experiences.",
        image: "images/teQueenMatch.png",
        imageCaption: "Mockup of the teQueenMatch app",
        githubLink: "https://github.com/annikalindberg/teQueenMatch",
        LiveDemoLink: "https://tequeenmatch.netlify.app/",
        stack: ["React JS", "Redux", "Styled Components", "JSX", "Node.js", "Express", "MongoDB", "Mongoose", "REST API", "Axios", "React Router", "React Testing Library", "Jest", "MongoDB Atlas", "Postman", "Google Cloud Platform", "React Hooks", "Postman", "Pair-programming"],
        notes: "Although our ambitions for teQueenMatch exceeded the three- week scope of the Technigo bootcamp, we chose to fully commit to the project during this period and to continue development afterward.This decision was driven partly by our affinity for challenges that push us beyond our limits.We're both dedicated to the learning process and were seeking an engaging project to work on post-bootcamp. However, the primary driver was our strong belief in the idea's merit and its potential value to the community.This commitment led us to invest heavily in the project, even if it meant facing developmental delays.I won't sugarcoat it; the journey was fraught with challenges, but we persevered because we truly believe the platform is essential—not just for us, but for anyone in a similar position. Notes about the project. Currently, our server is deployed on Render. While it serves our needs, we acknowledge that it might not be the most efficient option for our project's demands. We are actively exploring other hosting platforms to enhance server performance.",
        futureImprovements: "We're committed to improving TechConnect continuously. Here are some areas we're focusing on: Code Refactoring: We recognize the need for code refactoring and will continue to enhance code quality. User Experience: We plan to implement loaders in appropriate places to enhance the user experience. Middleware Handling: We're working to gracefully handle middleware and ensure smoother operation.",
    },
    {
        title: "teQueenMatch API",
        description: "This is the backend API for teQueenMatch. We buildt it as part or our Final Project and uses React.js, Express.js, MongoDB, Node.js. The backend provides APIs for user registration, adding and updating preferences, login, user profile management, liking/disliking users, and matching. It also provides APIs for creating, updating, and deleting user profiles, and uses Cloudinary for user to upload and save profile-images. The API is currently deployed on Render, but initially we used Google Cloud Platform (which we are looking at moving back to soon do to performance optimization). For the database we use MongoDB Atlas. We also use Postman for testing the API. This was the first larger scale backend project we did and we learned a lot about how to structure the code and how to work with the different technologies. We also learned a lot about how to work with a database and how to structure the data.. With this being said, we are aware that there is a lot of room for improvement, and we are currently working on refactoring the code and improving the performance. We are also looking to implement a CI/CD pipeline, socket.io for real-time chat-features.",
        stack: ["React JS", "Backend", "Redux", "Styled Components", "JSX", "Node.js", "Express", "MongoDB", "Mongoose", "REST API", "Axios", "React Router", "React Testing Library", "Jest", "MongoDB Atlas", "Postman", "Google Cloud Platform", "React Hooks", "Postman", "Pair-programming", "Cloudinary", "Socket.io", "CI/CD"],
        image: "images/teQueenMatch-backend.png",
        imageCaption: "",
        githubLink: "https://github.com/annikalindberg/teQueenMatch-API"

    },
    {
        title: "My Code Diary",
        description: "This project was part of a code challenge where I was instructed to build a diary app. The app allows users to view, sort, and paginate diary entries, and features a professional UI thanks to Material-UI and Styled-components. Designed for scalability and extensibility, it's also pre-configured for API integration. Moving forward, I think it would be really fun to also integrate a server-side rendering, by building a backend API to store the data. Since I am a huge fan of Bullet Journaling, I would like to make integrations with local media like images, screenshots etc. And add icons to build on the filtering feature to be more advanced.",
        image: "images/codeDiary.png",
        stack: ["React JS", "Redux", "Styled Components", "Node.js", "Material UI", "React Hooks", "JSX", "REST API", "Axios", "React Router"],
        githubLink: "https://github.com/annikalindberg/diary-app",
        LiveDemoLink: "https://annikasdiary.netlify.app/"

    },

    {
        title: "Wordgame Swedish Weather",
        description: "I initiated this project as an assignment from one of my mentors, who requested a Hangman game implementation. To infuse creativity, I tweaked the UI changing the theme to make it suitable for kids to practice Swedish and/ or English words. This way, players with basic knowledge of these languages can enjoy the game. Ive continued this challenge after feedback and iterations together with my mentors. Since deploying the app I've made some refactoring of the code.I´ve also changed the rendering method from using mock- data to fetching from a real API.Implementing the changes will require some overall theme changes and tweaks to match the logics of the game theme.",
        image: "images/swedishwordsproject.png",
        stack: ["React JS", "Redux", "Styled Components", "JSX", "React Hooks", "API", "Postman", "Axios", "React Router", "JSX", "React Router", "Node.js"],
        githubLink: "https://github.com/annikalindberg/Hangman-game",
        LiveDemoLink: "https://swedishweatherwords.netlify.app/"
    },
    {
        title: "Rabbit Hole Maze-game",
        description: "This project is a labyrinth game inspired by the enchanting world of Alice in Wonderland. It allowed me to explore Redux in depth, focusing on concepts such as async actions and reducers. Working in pairs, we got to challenge ourselves in effectively integrate APIs with Redux, utilizing thunks and structuring the Redux store to suit our data.The game also features reusable components and the capability to send JSON in request bodies, showcasing the practicality and versatility of the project.",
        image: "/images/rabbithole.jpg",
        stack: ["React JS", "Redux", "API", "React Styled Components", "Lottie animation library", "JSX", "React Hooks", "Axios", "React Router", "JSX", "Node.js"],
        githubLink: "https://github.com/annikalindberg/project-labyrinth",
        LiveDemoLink: "https://rabbit-hole-labyrinth-annika-fiona.netlify.app/"
    },
    {
        title: "Happy-Thoughts-Project",
        description: "Happy Thoughts is a microblogging platform designed to capture and share your fleeting moments of joy and inspiration. For the backend I crafted a simple Express API to save new objects in my MongoDB database",
        image: "images/happythoughts.png",
        stack: ["Express", "Mongo DB", "CSS", "JavaScript", "React", "JSX", "REST API", "Axios", "React Router", "React Hooks", "Postman", "Node.js"],
        githubLink: "https://github.com/annikalindberg/project-happy-thoughts",
        LiveDemoLink: "https://sweet-unicorn-99f547.netlify.app/"
    },
    {
        title: "To Do App",
        image: "images/to-do-app.png",
        description: 'This is a To-Do-App where I leveraged React and Redux to gain hands-on experience in state management. I implemented custom reducers and utilized the createSlice-method in Redux Toolkit, to manage application state in a modular fashion. While the frontend styling was achieved using vanilla CSS, the primary focus was on mastering state management through Redux.This involved experimenting with different code organization strategies, including slicing the codebase for optimized maintainability and readability.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux', 'React Hooks', "Node.js"],
        githubLink: 'https://github.com/annikalindberg/project-todos',
        LiveDemoLink: 'https://animated-paletas-c14d00.netlify.app/'
    },
    {
        title: "Space-Quiz Project",
        image: "images/reduxquiz.png",
        description: 'For this project we worked in a team of four to create a short quiz using React and Redux. We learned how to use selectors to access redux state and to use dispatch to trigger redux actions.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux', "React Hooks", "Pair-programming", "React Router", "Node.js"],
        githubLink: 'https://github.com/annikalindberg/project-redux-space-quiz',
        LiveDemoLink: 'https://annika-spacequiz.netlify.app/'
    },
    {
        title: "Movie releases",
        image: "images/movies.png",
        description: 'In this collaborative project, we advanced our React development skills by creating a multi-page application utilizing React Router for client-side navigation. We implemented asynchronous data fetching techniques to retrieve content from an external movie database API. Key React hooks such as useNavigate and useParams were employed to enhance navigation and capture route parameters. For secure and efficient configuration management, we incorporated environment variables stored in a .env file.This allowed us to abstract sensitive information, such as API keys, away from the codebase, enhancing security and maintainability.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux', "Pair-programming", "React Router", "React Hooks", "Axios", "Node.js"],
        githubLink: 'https://github.com/annikalindberg/project-movies',
        LiveDemoLink: 'https://cosmic-daffodil-7c032f.netlify.app/'
    },
    {
        title: "Backend API for Happy Thoughts",
        image: "images/happythoughts.png",
        description: 'In this backend-project Im using Express and MongoDB to build an API which including 3 endpoints. GET request returns a maximum of 20 thoughts, sorted in ascending order. The POST request expects a JSON body with the thought data and saves it. and POST endpoints to create data and the third one to like a thought by updating the number of likes, given a valid thought._id.',
        stack: ['Express', 'Mongo DB', "Node.js", 'JavaScript', 'REST API', 'Postman', 'Backend', 'API'],
        githubLink: 'https://github.com/annikalindberg/project-happy-thoughts-api ',
        LiveDemoLink: 'https://happy-thoughts-express-api.onrender.com/'

    },

    {
        title: 'Music releases',
        image: "images/musicreleases.png",
        description: 'Pair programming project in React where me and Anna built a page which shows new album and single releases fetching API data from Spotify. In this project we got to practice working with useState hooks and got a quite good understanding of state management in general within React.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Pair-programming', "Node.js"],
        githubLink: 'https://github.com/chas-academy/project-music-releases',
        LiveDemoLink: 'https://anna-annikas.netlify.app/'
    },
    {
        title: 'Weather app',
        image: "images/weatherapp.png",
        description: 'Pair programming project where me and Frida built a weather-app in vanilla Javascript by following a given design. We made a simple weather dashboard and by fetching external data from a weather API that shows todays weather, temperature and presents a 5-day forecast',
        stack: ['HTML', 'CSS', 'JavaScript', 'Pair-programming', "API"],
        githubLink: 'https://github.com/annikalindberg/project-weather-app',
        LiveDemoLink: 'https://rainbow-rolypoly-c2ce71.netlify.app/'
    },
    {
        title: 'Guess who the game',
        image: "images/guess-who.png",
        description: 'First practice in creating objects and arrays in Javascript and getting an understanding of the Document object model(DOM). The project was to build a digital version of the classic board game "Guess who" built in vanilla Javascript.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/AnnikaLindberg/project-guess-who',
        LiveDemoLink: 'https://comforting-fudge-9d6c21.netlify.app/'
    }
];

export default projects;
