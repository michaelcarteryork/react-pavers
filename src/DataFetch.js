import { useState, useEffect } from "react";
import FilteredListsExternalData from "./FilteredListsExternalData";

const DataFetch = ( {title} ) => {  
    const componentDescription = "This component uses data from a json file. This is done in the useEffect hook which has an empty array parameter meaning it is only initiated on initial render. Initially the lists state is set to null. The data is fetched which then is converted to a JS object and then 'lists' is sent down as a prop to the FilteredLists component for display.\n\nNote {lists && <FilteredLists ... \nThis means that the FilteredLists will only display when lists has a value, ie when the data is ready. Without it it will try to display and give an error because there are noThe handleDelete function is set in this component as this is where the state is set, and the function passed down as a prop.\n\nTo simulate a more real situation set the fetch within a timeout component (note second parameter at bottom of 1000 for 1000ms.\n\nAlso added a catch to see if there's any error in loading. Ctrl c to stop json server job then run. This catch will return an error if the server isn't running, but there are other things that could go wrong. Console log the response of the fetch (res) and note the property OK. Here we check if this is not OK and if it is we throw an error. This error is then displayed (new state errorMessage) and the loading message is set to null (removing it).\n\nTo simulate the error handling, change fetch address to be something which doesn't exist (to do, set buttons for user to initiate correct and incorrect fetches).";

    // initialise state for lists
    const [lists, setLists] = useState(null);

    // set state for loading status
    const [isPending, setIsPending] = useState(true);

    // set state for error message
    const [errorMessage, setErrorMessage] = useState(null);
    
    useEffect(() => {
        console.log('Use effect in DataFetch component ran');
        setTimeout(()=> {
            fetch('http://localhost:8000/lists')
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data');
                }
                return res.json()
            })
            .then( data => {
                setLists(data);
                setIsPending(false);
                setErrorMessage(null);
            })
            .catch(err => {
                console.log(err.message);
                setIsPending(false);
                setErrorMessage(err.message);
            })
        }, 1000)
    } , []);

    return ( 
        <div className="component">
            <h2>{title} component (title passed as prop from App.js)</h2>
            <div className="description">{componentDescription}</div>
            {errorMessage && <div className="loading-message">{errorMessage}</div>}
            {isPending && <div className="loading-message">Loading...</div>}
            {lists && <FilteredListsExternalData 
                componentName = 'FilteredListsExternalData' 
                lists = {lists}
            />}
        </div>
     );
}
 
export default DataFetch;