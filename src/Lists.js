// import hooks
import { useState, useEffect } from "react";

//import nested component(s)
import FilteredListsLocal from "./FilteredListsLocal";

/* 
Format for component, enclose return value in outer container
const ComponentName = () => {
    return ( 
        <div></div>
     );
}
export default ComponentName;
*/

const Lists = ( {title} ) => {
    const componentDescription = "As a starting point for building the exercises app, initially data was hard coded. The aim is to get it working and on the state, before progressing to fetching the data from (and writing to) an external file.\n\nNote below there are two instances of the FilteredListsLocal component. They both use state data added locally to the app (array of objects in Lists.js) but the second instance shows the lists filtered to a specific criteria.\n\nThis data lives on the state so any items which are deleted will be deleted from both instances (where applicable).\n\nThis component uses hard coded data for lists (DataFetch component pulls similar data from JSON file). Using the useState hook we set lists to be an array of objects.\n\nThe handleDelete function (used in <FilteredLists />) is in this component as this is where we are setting and modifying our lists state. This function is passed down to FilteredLists as a prop <FilteredLists handleDelete = {handleDelete} />\n\nThe handleDelete function loops through lists and creates a new array (newLists) with all onjects whcih don't have the id we are trying to delete. Finally the original list state is updated via setLists(newList);\n\nNote the FilteredLists component is embedded twice, the first with all results:\n<FilteredLists lists = {lists} />\n\nand the second filtered to only show ones where the authore is Michael\n<FilteredLists lists = {lists.filter((list) => list.author === 'Michael' )}";
    /*
    use useState as we did in PropsAndState.js
    const [personName, setPersonName] = useState('Michael');
    here function name is setLists, lists is the name of our array
    we change via lists = setLists(newArray) - see below
    initial state is array of objects
    */
    const [lists, setLists] = useState([
        { title: 'Hard coded List item 1 title', body: 'List item 1 content', author: 'Michael', id: 1 },
        { title: 'Hard coded List item 2 title', body: 'List item 2 content', author: 'Fred', id: 2 },
        { title: 'Hard coded List item 3 title', body: 'List item 3 content', author: 'Michael', id: 3 }
    ])


    /*
    second argument passed in as a dependency (see square brackets below)
    passing in empty array [] (no dependency) means hook only runs on first render
    if you add another piece of state
    */

    

    /*
    Note the square brackets (second parameter) where we put any dependencies
    If we put [test] this says to run this function when [test] is changed (ie initially and when button below clicked)
    we could replace [test] with [lists] which means the useEffect function is ran initially
    and whenever the lists changes
    keep it empty then it will only run when first rendered
    */
    useEffect(() => {
        console.log('Use effect in Lists component ran');
    } , []);

    /*
    Need to have this handleDelete function here not in the FilteredLists component in order to change the state which is stored at this level.
    Pass ths function down as a prop to FilteredList component (along with other props)
    <FilteredLists 
        lists = {lists}
        handleDelete = {handleDelete} ...
    */
    const handleDelete = (id)=> {
        // initially only log the id to make sure correct id coming through
        console.log("id=",id);

        /*
        To remove the item, filter through the array (like we did with the map function to display all items), this time though, we are building a new array of all elements which DON'T have the id we are passing through.
        For this we use the filter method.
        */

        /*
        Next line 'translation'
        filter through lists array
        set each item to be called listItem
        compare the id of this item with the id we are checking against
        if it's NOT the id we are deleting then add to new arrary newList
        */
        const newList = lists.filter(listItem => listItem.id !== id);

        /*
        Then use the setLists function (see above) to replace lists (original array) with out nre array (newList)
        */
        setLists(newList);
    
    }
    
    return ( 
        <div className="component">
            <h2>{title} component (title passed as prop from App.js)</h2>
            
            <div className="description">{componentDescription}</div>
            
            <FilteredListsLocal 
                lists = {lists}
                handleDelete = {handleDelete}
                componentName = 'FilteredListsLocal (All items)' 
                instanceDescription = "This shows all list items from the array (lists) passed down from Lists component to FilteredList component" 
            />
            <FilteredListsLocal 
                lists = {lists.filter((list) => list.author === 'Michael' )} 
                handleDelete = {handleDelete}
                componentName = "FilteredListsLocal (Just Michael's items)" 
                instanceDescription = "This filters through all items and only returns ones where the author is Michael"
            />
            <p>End of Lists component</p>
        </div>
     );
}
 
export default Lists;