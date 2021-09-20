import { useState } from "react";
// import useHistory hook
import { useHistory } from "react-router-dom";

const DemoCreate = ( {componenttName} ) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [by, setBy] = useState('Michael');
    const [isPending, setIsPending] = useState(false);

    // invoke the hook
    const history = useHistory();
    /*
    now we have this object which represents history with several methods attached
    eg. go forward, go back or redirect the user
    */
    const handleSubmit = (e) => {

        setIsPending(true);

        // prevent default form submit action (we don't want page to refresh)
        e.preventDefault();
        /*
        create a new list object and log to console
        our list object contains our three state values
        */
        const lists = { title, body, by }
        console.log(lists);
        console.log(JSON.stringify(lists));

        /*
        Make a post request to the endpoing to add a new entry
        */
        fetch('http://localhost:8000/lists', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(lists)
        }).then(() => {
            console.log('new list entry added');
            setIsPending(false);
            /*
            go back one page (+1 for forward)
            history.go(-1);
            we want to go to a particular route (/data-fetch-custom-hook which shows the list)
            */
           history.push('/data-fetch-custom-hook');
        });

    }
    return ( 
        <div className="component create">
            <h2>{componenttName} component (title passed as prop from App.js)</h2>
            <h3>Add a new exercise</h3>
            <form onSubmit = { handleSubmit }>
                <label>Exercise name:</label>
                <input 
                    type="text"
                    required 
                    value = {title}
                    onChange = { (e) => setTitle(e.target.value) }
                />
                <label>Exercise description:</label>
                <textarea
                    required
                    value = {body}
                    onChange = { (e) => setBody(e.target.value) }
                ></textarea>
                <label>Exercise completed by:</label>
                <select
                    value = {by}
                    onChange = { (e) => setBy(e.target.value)}
                >
                    <option value="Michael">Michael</option>
                    <option value="Usain Bolt">Usain Bolt</option>
                    <option value="Mo Farah">Mo Farah</option>
                </select>
                {!isPending && <button>Add entry</button>}
                {isPending && <button>Adding entry...</button>}
                <h3>State demonstration</h3>
                <p>Below we display the current state of the new entries data. Note this state changes as we add to the form above.</p>
                <div>Name: { title }</div>
                <div>Description: { body }</div>
                <div>By: { by }</div>

            </form>
        </div>
     );
}
 
export default DemoCreate;