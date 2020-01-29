import React from 'react'
import '../styles/Projects.css'
// import { HoverCard } from 'react-png-hovercard'
// import fridgefoodgif from '../images/ux:sei.gif'
// import p3gif from '../images/p3-gif.gif'

// class Projects extends React.Component {
//     constructor() {
//         super()

//     }
//     render() {
//         return (
//             <div className="projects-container" id="projects">
//                 <HoverCard
//                     maxWidth={400}
//                     animationSpeed={500}
//                     height={400}
//                     margin={10}
//                     front={
//                         <div className="front">
//                             <img
//                                 src={fridgefoodgif} width="100%" height="100%"
//                                 alt=''
//                                 style={{ objectFit: 'cover' }}
//                             />

//                         </div>
//                     }
//                     back={
//                         <div className="back">
//                             <p>Fridge Food</p>
//                             <h3>Technologies: React.js</h3>
//                             <h3>Design Tools: Zeplin</h3>
//                             <h3>Built by a team of 3 web developers in collaboration with 2 UX Desginers. The website allows users to search receipes based on ingredient they have on hand, as well as, their food restrictions. </h3>
//                             <div className="site-links">
//                                 <a href="http://fridge-food.surge.sh">Live</a> |
//                             <a href="https://github.com/pryan-x/Recipe-Helper.git">GitHub</a>
//                             </div>
//                         </div>
//                     }
//                 />
//                 <HoverCard
//                     maxWidth={400}
//                     animationSpeed={500}
//                     height={400}
//                     margin={10}
//                     front={
//                         <div className="front">
//                             <img
//                                 src={p3gif} width="100%" height="100%"
//                                 alt=''
//                                 style={{ objectFit: 'cover' }}
//                             />

//                         </div>
//                     }
//                     back={
//                         <div className="back">
//                             <p>Fantasy Coders</p>
//                             <h3>Technologies:
//                               Front-end: React.js & CSS
//                             | Back-end: Postgres & Sequelize
//                         </h3>
//                             <h3>Built by a team of 3 web developers, a fully functional app with CRUD functionality which allows employers to search through Software Engineers and add them to their team.</h3>
//                             <div className="site-links">
//                                 <a href="http://fantasy-coders.surge.sh">Live</a>  |
//                             <a href="https://github.com/jo-well29/p3-fantasy.git">GitHub</a>
//                             </div>
//                         </div>
//                     }
//                 />
//                 <HoverCard
//                     maxWidth={400}
//                     animationSpeed={500}
//                     height={400}
//                     margin={10}
//                     front={
//                         <div className="front">
//                             <img
//                                 src={p3gif} width="100%" height="100%"
//                                 alt=''
//                                 style={{ objectFit: 'cover' }}
//                             />

//                         </div>
//                     }
//                     back={
//                         <div className="back">
//                             <p>Fantasy Coders</p>
//                             <h3>Technologies:
//                               Front-end: React.js & CSS
//                             | Back-end: Postgres & Sequelize
//                         </h3>
//                             <h3>Built by a team of 3 web developers, a fully functional app with CRUD functionality which allows employers to search through Software Engineers and add them to their team.</h3>
//                             <div className="site-links">
//                                 <a href="http://fantasy-coders.surge.sh">Live</a>  |
//                             <a href="https://github.com/jo-well29/p3-fantasy.git">GitHub</a>
//                             </div>
//                         </div>
//                     }
//                 />
//             </div>
//         )
//     }
// }

const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            {/* <div className="halal-foodies">
                <div className="halal-content">
                    <h2>Halal Foodies</h2>
                    <h3>Technologies: 
                            Front-end: React.js & CSS 
                            | Back-end: Ruby on Rails
                    </h3>
                    <h3>A Halal restaurant website, where users can look through available restaurants, as well as, add, delete and update restaurants. </h3>
                    <div className="site-links"></div>
                        <a href="https://github.com/hsaman4/halalfood-backend.git">Backend Github</a>
                        <a href ="https://github.com/hsaman4/halalfood-react.git">Frontend Github</a>
                </div>
                <div className="halal-foodies-img">

                </div>
            </div> */}
            <div className="fridge-food">
                <div className="fridge-food-content">
                    <h2>Fridge Food</h2>
                    <h3>Technologies: React.js</h3>
                    <h3>Design Tools: Zeplin</h3>
                    <h3>Built by a team of 3 web developers in collaboration with 2 UX Desginers. The website allows users to search receipes based on ingredient they have on hand, as well as, their food restrictions. </h3>
                    <div className="site-links">
                        <a href="http://fridge-food.surge.sh">Live</a> |
                    <a href="https://github.com/pryan-x/Recipe-Helper.git">GitHub</a>
                    </div>
                </div>
                <div className="fridge-food-img">
                </div>
            </div>
            <div className="p3-fantasy">
                <div className="p3-fantasy-img">

                </div>
                <div className="p3-fantasy-content">
                    <h2>Fantasy Coders</h2>
                    <h3>Technologies:
                            Front-end: React.js & CSS
                            | Back-end: Postgres & Sequelize
                    </h3>
                    <h3>Built by a team of 3 web developers, a fully functional app with CRUD functionality which allows employers to search through Software Engineers and add them to their team.</h3>
                    <div className="site-links">
                        <a href="http://fantasy-coders.surge.sh">Live</a> |
                    <a href="https://github.com/jo-well29/p3-fantasy.git">GitHub</a>
                    </div>
                </div>
            </div>
            <div className="got-makeup">
                <div className="got-makeup-content">
                    <h2>Got Makeup</h2>
                    <h3>Technologies: React.js, Mapbox Api</h3>
                    <h3>Using React.js and a third party api, this website displays a set number of products in each category. Users are also able to create a wishlist on the site, with the name of the name of the products and image url.</h3>
                    <div className="site-links">
                        <a href="http://got-makeup.surge.sh">Live</a> |
                        <a href="https://github.com/hsaman4/Got-Makeup.git">GitHub</a>
                    </div>
                </div>
                <div className="got-makeup-img">
                </div>

            </div>
            <div className="skills" id="skills">
                <div className="technologies">
                    <h1>Technologies</h1>
                </div>
                <div className="tech-img">
                    <div className="js">
                        <div className="js-img">
                        </div>
                        <div className="js-text">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                    <div className="express">
                        <div className="express-img">
                        </div>
                        <div className="express-text">
                            <h3>Express.js</h3>
                        </div>
                    </div>
                    <div className="react">

                        <div className="react-img"></div>
                        <div className="react-text">
                            <h3>React.js</h3>
                        </div>
                    </div>
                    <div className="postgres">
                        <div className="postgres-img">
                        </div>
                        <div className="postgres-text">
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>
                    <div className="sql">
                        <div className="sql-img">
                        </div>
                        <div className="sql-text">
                            <h3>SQL</h3>
                        </div>
                    </div>
                    <div className="ruby">
                        <div className="ruby-img">
                        </div>
                        <div className="ruby-text">
                            <h3>Ruby</h3>
                        </div>
                    </div>
                    <div className="rails">
                        <div className="rails-img"></div>
                        <div className="rails-text">
                            <h3>Rails</h3>
                        </div>
                    </div>
                    <div className="css">
                        <div className="css-img"></div>
                        <div className="css-text">
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div className="git">
                        <div className="git-img"></div>
                        <div className="git-text">
                            <h3>GitHub</h3>
                        </div>
                    </div>
                    <div className="node">
                        <div className="node-img"></div>
                        <div className="node-text">
                            <h3>Node.js</h3>
                        </div>
                    </div>
                    <div className="html">
                        <div className="html-img">
                        </div>
                        <div className="html-text">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default Projects