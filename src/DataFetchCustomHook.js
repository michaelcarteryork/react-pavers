import FilteredListsExternalData from "./FilteredListsExternalData";
import useFetch from "./useFetch";

const DataFetchCustomHook = ( {title} ) => {  
    /*
    Here we have created a custom hook to do fetches which return data, isPending (boolean for whilst the fetch is happening) and errorMessage values
    We are doing the whole fetch in this component with just one line of code (below)
    */
    
    const { data: lists, isPending, errorMessage } = useFetch('http://localhost:8000/lists');
    
    return ( 
        <div className="component">
            <h2>{title} component (title passed as prop from App.js)</h2>
            {errorMessage && <div className="loading-message">{errorMessage}</div>}
            {isPending && <div className="loading-message">Loading...</div>}
            {lists && <FilteredListsExternalData 
                componentName = 'FilteredListsExternalData' 
                lists = {lists}
            />}
            <h2>Notes on this component</h2>
            <p>This function performs the same function as DataFetch but all the data fetching, error handling etc is done in the custom hook (file useFetch.js)</p>
        </div>
     );
}
 
export default DataFetchCustomHook;