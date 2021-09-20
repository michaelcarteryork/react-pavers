import { Link } from 'react-router-dom'; 

const Home = ( {title} ) => {
    return ( 
        <div className="component">
            <h2>{title} component (title passed as prop from App.js)</h2>
            <p>The purpose of this React app is twofold. Firstly to hold the form for submitting data for the Pavers technical task. Secondly to act as a demonstration of my knowledge of React.</p>
            <h3>Pavers test</h3>
            <p>The Submit Entry component is where we submit the Pavers React Developer Application Form</p>
            <h3>React demo - exercises</h3>
            <p>An app has been built for simple exercise login. The intention here is to demonstrate understanding of many aspects of React app building. The working app starts with a JSON file with a couple of exercise entries. We can add further entries to this (adding to the JSON file). Clicking any exercise opens up details about that exercise and the option to delete.</p>
            <h3>React demo - notes</h3>
            <p>Links within the notes section show steps taken to build this app, with React learning content explained within. As an example, the first link ( <Link to ="/props-and-state">Props+State</Link> ) exhibits an understanding of how Props and State are utilised within React</p>
            <p>Component hierarchy is demonstrated within all pages. We can see here a box structure starting with the outer App component and two embedded components (one for the Navbar and this Home component). Througout each page this component hierarchy is maintained and each component </p>
        </div>
     );
}
 
export default Home;