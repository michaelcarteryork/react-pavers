import { useState } from "react";

const PropsAndState = ( {title} ) => {
    const componentDescription = `This component exhibits usage of props and state. Simply only one prop is passed down to this component, the component title is passed down from App.js via <PropsAndState title = 'PropsAndState' />.\n\nThe useState hook is used to set state and functions are invoked to change this state. eg. set personName initial value to be Michael and useState to change that value with setPersonName:\nconst [personName, setPersonName] = useState('Michael');\n\nThis name can then be changed via a button click in an anonymous function to stop initial invoking:\n<button onClick = { () => {changeNameAndAge('Fred', 50)} }>Change name and age</button>\n\nand then setting this new value via:\nsetPersonName(newName);`;
    /*
    useState hook
    variable name mouseX, change it via setMouseX
    set via using
    */
    const [mouseX, setMouseX] = useState('(not clicked yet)');
    const [personName, setPersonName] = useState('Michael');
    const [personAge, setPersonAge] = useState(49);
    const [helpInfo, setHelpInfo] = useState('Help info displays here');

    const changeNameAndAge = (newName, newAge) => {
        setPersonName(newName);
        setPersonAge(newAge);
        setHelpInfo('Here we have used the setState hook to change the values of personName and personAge.');
    }
    const displayInfo = (e) => {
        setMouseX(e.clientX);
        setHelpInfo('Here we pass the event object (e) to get the x position of the mouse when the button is pressed.');
    }
    return ( 
        <div className="component">
            <h2>{title} component (title passed as prop from App.js)</h2>
            <div className="description">{componentDescription}</div>
            <div className="display-element">Person name: { personName } </div>
            <div className="display-element">Person age: { personAge } </div>
            <div className="display-element">mouseX: { mouseX } </div>
            <button onClick = { () => {changeNameAndAge('Fred', 50)} }>Change name and age</button>
            <button onClick = { (e) => {displayInfo(e)} }>Display info</button>
            <div className="display-element">{ helpInfo }</div>
        </div>
     );
}
 
export default PropsAndState;