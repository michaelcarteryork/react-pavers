import { Link } from "react-router-dom";

const NotFound = ( {title} ) => {
    return ( 
        <div className="component not-found">
            <h2>{title} (title as prop)</h2>
            <p>That page can not be found - probably not the worlds most informative not found page but serves it's demo purposes!</p>
            <Link to = '/data-fetch-custom-hook'>Back to item list</Link>
        </div>
     );
}
 
export default NotFound;