const Other = ( {componenttName} ) => {
    return ( 
        <div className="component">
            <h2>{componenttName} component (title passed as prop)</h2>
            <p>Relevant to this app but not necessarily specific to any particular component (hecnce being placed in a component called 'Other!' are:</p>
            <p>React router. This has been employed for all links throughout the app. All links use this via Router, Switch and Route - imported from the Reacter-router-dom in App.js.</p>
            <p>A error page has been added (component NotFound.js). No links within the app should give this error page, but it can be simulated by change the relative URL to be something nonsense.</p>
            <p>Custom hooks. Initiall the fetching data was done in one component and only specific to this. Far more useful though is to have a single useFetch.js file with this functionality in. This returns data from an endpoint request in the form of three properties - the data itself and booleans for isPending (which controls the display/none display of Loading... message) and errorMessage (which controls the display/none display of Loading... message).</p>
            <p>Abort controller. Given the time taken (potentially) for a fetch to happen, an impatient user could click another link whilst waiting for this to load. This could cause problems because when the data is finally received, the component expecting that data could be unmounted from the DOM causing an error. To this effect an abort controller has been added. </p>
        </div>
     );
}
 
export default Other;