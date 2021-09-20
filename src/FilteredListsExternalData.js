import { Link } from "react-router-dom";

const FilteredListsExternalData = ( {componentName, lists } ) => {
    return ( 
        <div className="component">
            <h2>{componentName} (title as prop)</h2>
            <p>Note, when first loading this file you should note a "Loading..." flashes up. The data is loaded from a jsx file. Dependent upon deployment this can be too quick to demonstrate, therefore a timeout of 1 second has been added. To simulate again, click a differnt link then "View exercises".</p>
            <p>Error handling is also incorporated, to simulate this change the endpoint address in DataFetchCustomHook.js</p>
              
            {lists.map(listItem => ( 
                <div className="list-item-preview" key={listItem.id}>
                    <Link to={`/list-details/${listItem.id}`}>
                        <h3>Name: {listItem.title}</h3>
                        <p>By: {listItem.by}</p>
                        <p>Click anywhere in this box to view/delete this entry.</p>
                    </Link>
                </div>
            ))}
            <p>This component receives the lists array and the handleDelete function. It maps through the array, giving each element (listItem) its unique key, title, detail and author. The handleDelete function (in parent component) deletes entries from the lists state.</p>
            
            <p>This component is a near duplicate of FilteredListsLocal but we've stripped out the function and references to handleDelete. This did work on the local state but we are going to need to do a different procedure for deleting from the external JSON file.</p>
        </div>
     );
}

export default FilteredListsExternalData;