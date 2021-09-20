import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    // form states
    const [name, setName] = useState('test');
    const [emailAddress, setEmailAddress] = useState('test');
    const [aboutYou, setAboutYou] = useState('test');
    const [applyingReason, setApplyingReason] = useState('test');
    const [paversKnowledge, setPaversKnowledge] = useState('test');

    // pending state to determine which button to show
    const [isPending, setIsPending] = useState(false);

    // invoke the hook so after form submission we can go back to a specific page/mount home component
    const history = useHistory();
    /*
    now we have this object which represents history with several methods attached
    eg. go forward, go back or redirect the user (which we will use)
    */
    const handleSubmit = (e) => {
        setIsPending(true);
        // prevent default form submit action (we don't want page to refresh)
        e.preventDefault();
        
        // Build date string in format dd/mm/yyyy
        const date = new Date();
        const dateValue = date.getDate().toString();
        const monthValue = date.getMonth().toString();
        const yearValue = date.getFullYear().toString();
        const dateFormatted = dateValue + '/' + monthValue + '/' + yearValue;

        // Build json string
        const lists = { name, emailAddress, dateFormatted, aboutYou, applyingReason, paversKnowledge  }
        
        // Convert lists object to string and log to console
        console.log(JSON.stringify(lists));

        // Upload form
        fetch('http://localhost:8000/body', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(lists),
        })
        .then(response => {
            response.json();
            // display the response
            console.log('Response:', response);
        })
        .then(data => {
            console.log('Success:', data);
            // If successful then isPending state is false
            setIsPending(false);
            // Once submission done, go back to home page/component
            history.push('/');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }
    return ( 
        <div className="component create">
            <h2>Add a new entry</h2>
            <form onSubmit = { handleSubmit }>
                <label>Name (max length 50 characters):</label>
                <input 
                    type="text"
                    required 
                    value = {name}
                    maxLength = {50}
                    onChange = { (e) => setName(e.target.value) }
                />

                <label>Email address (max length 100 characters):</label>
                <input 
                    type="text"
                    required 
                    value = {emailAddress}
                    maxLength = {100}
                    onChange = { (e) => setEmailAddress(e.target.value) }
                />
                <label>About you (max length 255 characters):</label>
                <textarea 
                    required 
                    value = {aboutYou}
                    maxLength = {255}
                    onChange = { (e) => setAboutYou(e.target.value) }
                />
                <label>Reason for applying (max length 255 characters):</label>
                <textarea 
                    required 
                    value = {applyingReason}
                    placeholder = 'Test'
                    maxLength = {255}
                    onChange = { (e) => setApplyingReason(e.target.value) }
                />
                <label>Pavers knowledge (max length 255 characters):</label>
                <textarea 
                    required 
                    value = {paversKnowledge}
                    maxLength = {255}
                    onChange = { (e) => setPaversKnowledge(e.target.value) }
                />

                <label>Upload image:</label>
                <input type="file" />
                {/* 
                Initially show Add entry button
                Whilst adding, change this to Adding entry button
                */} 
                {!isPending && <button>Add entry</button>}
                {isPending && <button disabled>Adding entry...</button>}
                <h3>Test state (should change as data added)</h3>
                <p>Name: { name }</p>
                <p>Email address: { emailAddress }</p>
                <p>About you: { aboutYou }</p>
                <p>Applying reason: { applyingReason }</p>
                <p>Pavers knowledge: { paversKnowledge }</p>
        
            </form>
        </div>
     );
}
 
export default Create;