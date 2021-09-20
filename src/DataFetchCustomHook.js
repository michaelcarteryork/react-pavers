import FilteredListsExternalData from "./FilteredListsExternalData";
import useFetch from "./useFetch";

const DataFetchCustomHook = ( {title} ) => {  
    /*
    Note if we put the wrong endpoint address it doesn't work and gives the error message from our new custom hook
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
            <p>What we’ve done above works but it would be good if we could make this code general so we can use the same fetching, loading, error handling for any JSON server request. We can then put this code in an external file and then re-use it. This is making a custom hook.</p>
            
            <p>See file useFetch.js - note this isn't a component file, it begins with use so it's a custom hook. In this file:</p>
            
            <p>start by creating a new function for our custom hook (useFetch), it needs to start with the word use\npass in the url (previously it was hard coded in to the function)</p>
            
            <p>note at bottom we need to add url as a dependency as we want it to render again if this changes\ncut all useState definitions and paste to top of useFetch function.</p>
            
            <p>We need to return the three bits we want (the data and the loading, error status)</p>
            
            <p>return &#123; data, isPending, errorMessage &#125;</p>
            
            <p>Then deconstruct these three values at the top of this component (before the return statement) via:<br /> const &#123; data: lists, isPending, errorMessage &#125; = useFetch('http://localhost:8000/lists');</p>
            
            <p>Note that we have called the data returned 'lists' in this function so declare this as data: lists</p>
        </div>
     );
}
 
    export default DataFetchCustomHook;