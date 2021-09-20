import { useState, useEffect } from "react";

/*
start by creating a new function for our custom hook, it needs to start with the word use
pass in the url (previously it was hard coded in to the function)
note at bottom we need to add url as a dependency as we want it to render again if this changes
*/
const useFetch = (url) => {
    // cut all useState definitions and user here
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        // abort controller - to abort fetch if another URL is clicked and component unmounted
        const abortCont = new AbortController();

        console.log('Use effect in DataFetch component ran');
        setTimeout(()=> {
            // associate abort controller with this fetch
            fetch(url, { signal:abortCont.signal} )
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data');
                }
                return res.json()
            })
            .then( data => {
                setData(data);
                setIsPending(false);
                setErrorMessage(null);
            })
            .catch(err => {
                // if we aborted this (by changing URL) don't update the state (as component unmounted)
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.log(err.message);
                    setIsPending(false);
                    setErrorMessage(err.message);
                }
            })
        }, 1000);
        // stop this fetch
        return () => abortCont.abort();
    } , [url]);
    
    //We need to return the three bits we want (the data and the loading, error status)
    return { data, isPending, errorMessage }
}

export default useFetch;