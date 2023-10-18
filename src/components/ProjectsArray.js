const projects = [
    {
        title: "My Code Diary",
        description: "Built a Diary Entry List app using React and Redux for a coding challenge. The app allows users to view, sort, and paginate diary entries, and features a professional UI thanks to Material-UI and Styled-components. Designed for scalability and extensibility, it's also pre-configured for API integration.",
        image: "images/codeDiary.png",
        stack: ["React JS", "Redux", "React Styled Components", "Material UI", "JSX"],
        githubLink: "https://github.com/annikalindberg/diary-app",
        LiveDemoLink: "https://annikasdiary.netlify.app/"

    },

    {
        title: "Wordgame Swedish Weather",
        description: " I initiated this project as an assignment from my mentor, who requested a Hangman game implementation.To infuse creativity, I tweeked the UI changing the theme to make it suitable for kids to practice Swedish and/ or English words.This way, players with basic knowledge of these languages can enjoy the game.",
        image: "images/swedishwordsproject.png",
        stack: ["React JS", "Redux", "React Styled Components", "JSX"],
        githubLink: "https://github.com/annikalindberg/Hangman-game",
        LiveDemoLink: "https://swedishweatherwords.netlify.app/"
    },
    {
        title: "Rabbit Hole Maze-game",
        description: "This project is a labyrinth game inspired by the enchanting world of Alice in Wonderland. It allowed me to explore Redux in depth, focusing on concepts such as async actions and reducers. Working in pairs, we got to challenge ourselves in effectively integrate APIs with Redux, utilizing thunks and structuring the Redux store to suit our data.The game also features reusable components and the capability to send JSON in request bodies, showcasing the practicality and versatility of the project.",
        image: "/images/rabbithole.jpg",
        stack: ["React JS", "Redux", "API", "React Styled Components", "Lottie animation library", "JSX"],
        githubLink: "https://github.com/annikalindberg/project-labyrinth",
        LiveDemoLink: "https://rabbit-hole-labyrinth-annika-fiona.netlify.app/"
    },
    {
        title: "Happy-Thoughts-Project",
        description: "Happy Thoughts is a microblogging platform designed to capture and share your fleeting moments of joy and inspiration. For the backend I crafted a simple Express API to save new objects in my MongoDB database",
        image: "images/happythoughts.png",
        stack: ["Express", "Mongo DB", "CSS", "JavaScript", "React", "JSX"],
        githubLink: "https://github.com/annikalindberg/project-happy-thoughts",
        LiveDemoLink: "https://sweet-unicorn-99f547.netlify.app/"
    },
    {
        title: "To Do App",
        image: "images/to-do-app.png",
        description: 'This is a To-Do-App build in React/Redux where I got to practice making my own reducers and slices. I used vanilla css for this project and focused on learning how to manage reducers and played around with slicing up the code in different ways.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux'],
        githubLink: 'https://github.com/annikalindberg/project-todos',
        LiveDemoLink: 'https://animated-paletas-c14d00.netlify.app/'
    },
    {
        title: "Space-Quiz Project",
        image: "images/reduxquiz.png",
        description: 'For this project we worked in a team of four to create a short quiz using React and Redux. We learned how to use selectors to access redux state and to use dispatch to trigger redux actions.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux'],
        githubLink: 'https://github.com/annikalindberg/project-redux-space-quiz',
        LiveDemoLink: 'https://annika-spacequiz.netlify.app/'
    },
    {
        title: "Movie releases",
        image: "images/movies.png",
        description: 'Team project where we were introduced to React Routes building our first multi-page React application. Here we also continued practicing fetching data, in this project from a movie database. We learned several new hooks, including useNavigate and useParams. We also learned how to incorporate an .env file to store environmental variables. We experimented with the .env file and environmental variables to avoid including our API key directly in the code.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux'],
        githubLink: 'https://github.com/annikalindberg/project-movies',
        LiveDemoLink: 'https://cosmic-daffodil-7c032f.netlify.app/'
    },
    {
        title: 'Music releases',
        image: "images/musicreleases.png",
        description: 'Pair programming project in React where me and Anna built a page which shows new album and single releases fetching API data from Spotify. In this project we got to practice working with useState hooks and got a quite good understanding of state management in general within React.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Pair-programming'],
        githubLink: 'https://github.com/chas-academy/project-music-releases',
        LiveDemoLink: 'https://anna-annikas.netlify.app/'
    },
    {
        title: 'Weather app',
        image: "images/weatherapp.png",
        description: 'Pair programming project where me and Frida built a weather-app in vanilla Javascript by following a given design. We made a simple weather dashboard and by fetching external data from a weather API that shows todays weather, temperature and presents a 5-day forecast',
        stack: ['HTML', 'CSS', 'JavaScript', 'Pair-programming'],
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
