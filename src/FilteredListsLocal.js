const FilteredListsLocal = ( {componentName, instanceDescription, lists, handleDelete } ) => {
    const componentDescription = "This component receives the lists array and the handleDelete function. It maps through the array, giving each element (listItem) its unique key, title, detail and author. The handleDelete function (in parent component) deletes entries from the lists state.";
    return ( 
        <div className="component">
            <h2>{componentName} (title as prop)</h2>
            <div className="description">{componentDescription}</div>
            <p>{instanceDescription}</p>    
            {lists.map(listItem => (
                <div className="list-item-preview" key={listItem.id}>
                    <h3>Title: {listItem.title}</h3>
                    <p>Detail: {listItem.body}</p>
                    <p>Author: {listItem.author}</p>
                    <button onClick = { ()=> handleDelete(listItem.id) } >Delete entry</button>
                </div>
            ))}
        </div>
     );
}

export default FilteredListsLocal;