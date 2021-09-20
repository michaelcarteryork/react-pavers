import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import { Link } from 'react-router-dom'; 

const ListDetails = ( {title} ) => {
    const history = useHistory();
    /*
    to use paramaters
    note, click on useParams and it imports from react-router above
    in our Route path we gave the parameter name id so use this here
    */
    const { id } = useParams();

    /*
    Get following from useFetch custom hook and pass in the end point
    Our end point is our lists JSON file with the id of the element we want added to it
    */
    const { data: list, isPending, errorMessage } = useFetch('http://localhost:8000/lists/' + id);

    const handleClick = () => {
        console.log('delete entry button clicked');
        fetch('http://localhost:8000/lists/' + list.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/data-fetch-custom-hook');
        });
    }

    return ( 
        <div className="component list-details">
            <h2>{title} component</h2>
            <p>This component displays an individual items data via getting the id name from the URL (eg. list-details/1 shows the data for the item with id: 1. Note, changing the id in the URL to one which doesn't exist causes an error.</p>
            <p>Note, like the previous page/component, a time lag has been enforced to demonstrate the load/show loading message.</p>
            { isPending && <div>Loading...</div> }
            { errorMessage && <div>{ errorMessage }</div> }
            { list && (
                <article>
                    <h3>{ list.title } ({ list.by })</h3>
                    
                    <div>{ list.body } </div>
                    
                    <button onClick = { handleClick }>Delete entry</button>
                </article>
            )}
            <Link to ="/data-fetch-custom-hook">Back to listing</Link>
        </div>
     );
}
 
export default ListDetails;