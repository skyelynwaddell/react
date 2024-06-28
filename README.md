# Skye's React Manual 👽

Here is all my documentation on React and what I find to be most useful for use, and reference.

<span style="font-size: 21px">Table of Contents</span>

- [**<u>Getting Started</u>**](#getting-started)
- [**<u>Basic Rules for React</u>**](#basic-rules-for-react)
- [**<u>React Bootstrap</u>**](#react-bootstrap)
- [**<u>Create a Functional Component .JSX</u>**](#create-a-functional-component-jsx)
- [**<u>Importing a Component within another Component</u>**](#importing-a-component-within-another-component)
- [**<u>Including Javascript / Variables in your Component</u>**](#including-javascript-in-your-component)
- [**<u>Mapping Items from an Array / Multi-Line Javascript</u>**](#mapping-items-from-an-array)
  - [**<u>Sorting Examples</u>**](#sorting-examples)
- [**<u>Conditional Rendering</u>**](#conditional-rendering)
- [**<u>useState</u>**](#usestate)
  - [**<u>useState Variable Updater Example</u>**](#usestate-variable-updater-example)
  - [**<u>useState Counter Increaser Example</u>**](#usestate-counter-increaser-example)
  - [**<u>useState Boolean Toggler Example</u>**](#usestate-boolean-toggler-example)
- [**<u>Props</u>**](#props)
  - [**<u>PropTypes</u>**](#prop-types)
  - [**<u>Default Props</u>**](#default-props)
- [**<u>onClick Event</u>**](#onclick-event)
  - [**<u>onClick Event Properties</u>**](#onclick-event-properties)
  - [**<u>Change Button Text onClick</u>**](#change-button-text-onclick)
  - [**<u>Hide Image onClick</u>**](#hide-image-onclick)
- [**<u>onChange Event</u>**](#onchange-event)
  - [**<u>onChange Input Box</u>**](#onchange-input-box)
  - [**<u>onChange Textarea</u>**](#onchange-textarea)
  - [**<u>onChange Option Box</u>**](#onchange-option-box)
  - [**<u>onChange Radio Buttons</u>**](#onchange-radio-buttons)

# Getting Started

Start by installing NodeJS and creating a new folder

Run commands

```
npm create vite@latest
```

Select **React**\
Select **Javascript**

To run the app, enter

```javascript
npm run dev
```

# Basic Rules for React

- File names for your html like components are .jsx
- Class is a reserved keyword in React, because there are classes, use instead the className keyword!

```javascript
//HOW IT WAS DONE IN HTML
<button class="btn btn-primary">Click Me!</button>

//HOW YOU DO IT IN REACT JSX
<button className="btn btn-primary">Click Me!</button>
```

- A component may only return 1 element! The following example is invalid syntax in React

```javascript
//THIS WILL THROW AN ERROR!!!
return(
    <div>
        <h1>Hello World!</h1>
    </div>
    
    <div>
        <h2>Hello Universe!</h2>
    </div>
)
```

Instead you should contain everything in 1 outer div, or within an empty element!

```javascript
//THIS WILL WORK :) (use empty element <> or a <div>)
return(
    <>
    <div>
        <h1>Hello World!</h1>
    </div>
    
    <div>
        <h2>Hello Universe!</h2>
    </div>
    </>
)
```

# React Bootstrap

<https://react-bootstrap.netlify.app/docs/getting-started/introduction>

Install React Bootstrap in your React app with the following line

```javascript
npm install react-bootstrap bootstrap
```

To include React Bootstrap within your React App, include the following import statement in your main.jsx file, or whichever component you would like Bootstrap on

```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
```

# Create a Functional Component .JSX

You may also get ES7 React extension in VSCODE and type ***rafc*** for a snippet of this code. You may use default Javascript function syntax, or arrow function syntax.

**Default Functional Component Syntax**

```javascript
import React from 'react'

function App(){
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
```

**Arrow Functional Component Syntax**

```javascript
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
```

# Importing a Component within another Component

Since you are exporting each component, you may include them within other components by using the **<u>import</u>** statement, and then calling it within your component as an element.

```javascript
import React from 'react'
import ComponentName from './Component.jsx'

const App = () => {
  return (
    <>
      //both of the following are valid ways to
      //include the component after importing it
      <ComponentName></ComponentName>
      <ComponentName />
    </>
  )
}

export default App
```

# Including Javascript in your Component

You can include Javascipt within your component's return statement, by wrapping the variable name, or direct Javascript within curly brackets, like the following.

```javascript
import React from 'react'

const name = "Skye";

const App = () => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{true}</h1>
      <h1>{1000 - 100}</h1>
    </div>
  )
}

export default App
```

# Mapping Items from an Array

Below is an example of two topics. Dynamically displaying an array of variables, as well as how to implement many lines of Javascript in React.

In this case we include the whole statement within curly brackets, and any curly brackets that would normally be in the code, must be replaced with rounded brackets ( )\
Within the { } you may still include more HTML, or variables surrounded with { }

When mapping through items, you must pass the element a unique value as their key property, a common practice is to pass an index argument, and set it to that.

```javascript
import React from 'react'

const App = () => {

  const names = [
    'Brad',
    'Mary',
    'Joe',
    'Sally'
  ]

  return (
      <ul>

      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}

      </ul>
    </div>
  )
}

export default App
```

Now lets use the map function to render a list a little more efficiently, as well as while using objects inside the array, as well as many sorting examples you can use in your projects.

```javascript
function List(){
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 }
    ]

    const listItems = fruit.map(fruit => {
        <li key={fruit.id}>
        {fruit.name} {fruit.calories}
        </li>
    })

    const list = <ol>{listItems}</ol>

    return(list)
    
}

export default List;
```

# Sorting Examples

```javascript
const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 }
    ]

//sort fruits by name alphabetically
fruits.sort((a, b) => a.name.localeCompare(b.name));

//sort fruits by name reverse alphabetical
fruits.sort((a, b) => b.name.localeCompare(a.name));

//sort by calories asc
fruits.sort((a, b) => a.calories - b.calories);

//sort by calories desc
fruits.sort((a, b) => b.calories - a.calories);

//find low calories fruits (less than 100)
const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

//find high calorie fruits (greater/equal to 100)
const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);
```

# Conditional Rendering

React doesn't support IF statements within the return statement of the component, however you may use a turnery operator.

```javascript
import React from 'react'

const App = () => {

  const loggedIn = true;

  return (
    <div>
      { loggedIn ? "hello member" : "hello guest" }
    </div>
  )
}

export default App
```

 Or, you may do it outside the return statement.

```javascript
import React from 'react'

const App = () => {

  const loggedIn = true;
   
  if (loggedIn)
  {
      return (
        <div>
          Hello Member
        </div>
      )
  } 
  else 
  {
      return (
        <div>
          Hello Guest
        </div>
      )
   }
}

export default App
```

However these ways, both seem messy right? Let's do it like this instead.

```javascript
const loggedIn = false;

function App () {
    const welcomeMsg = <h1> Hello World </h1>
    const loginPrompt = <h1> Please Login! </h1>

    return(
        loggedIn ? welcomeMsg : loginPrompt;
    );
}
```

Conditionally render a component based on values/lengths of arrays.\
This is called **Short Circuiting.**

```javascript
import List from './ListComponent.jsx';

const fruits = [
    {id: 1, name: "orange", calories: "100"},
    {id: 1, name: "apple", calories: "95"},
    {id: 1, name: "banana", calories: "104"},
]

function App() {
    return (
        <>
            { fruits.length > 0 && <List items={fruits}/> }
        </>
    );
}
```

# useState

In order to have variables modifiable and interactive, you must setup something called state!\
You can not update declared variables, unless you use state in React.

**<span style="font-size: 15px">Declare a variable with useState</span>**

- **First variable in the array is the Variable Name (GETTER).**
- **Second variable in the array is the Function you use to update the first variable (SETTER).**
- **Parameter of useState is the default value of the variable.**

```javascript
//must import useState first
import React, { useState } from "react";

const [newItem, setNewItem] = useState("");
```

**<span style="font-size: 15px">Update a variable with useState</span>**

To update a useState variable, you call the second variable from the useState array as a function.

```javascript
setNewItem("Hello World");
```

# useState Variable Updater Example 

```javascript
//must import useState first
import React, { useState } from "react";

//name getter/setter
const [name, setName] = useState("Guest");

//update name function
const updateName = () => {
    setName("Lorem Ipsum");
}

function App(){

    return(
        <>
            //update name button
            <h1> Name: {name} </h1>
            <button onClick={updateName}>
                Update Name
            </button>
        </>
    );
}

export default App;
```

# useState Counter Increaser Example

```javascript
//must import useState first
import React, { useState } from "react";

//count getter/setter
const [count, setCount] = useState(0);

//increase count function
const increaseCount = () => {
    setCount(count + 1);
}

function App(){

    return(
        <>
            //update count button
            <button onClick={ increaseCount }>
                Count: { count }
            </button>
        </>
    );
}

export default App;
```

# useState Boolean Toggler Example

```javascript
//must import useState first
import React, { useState } from "react";

//clicked getter/setter
const [clicked, setClicked] = useState(false);

//toggle boolean function
const toggleBoolean = () => {
    setCount(!clicked);
}

function App(){

    return(
        <>
            //update count button
            <button onClick={ toggleBoolean }>
                <h1>
                { clicked ? "Clicked" : "Not Clicked" }
                </h1>
            </button>
        </>
    );
}

export default App;
```

# Props

**Read-Only** properties that are shared between components. A parent component can send data to a child component, with the following method

```
<Component key=value />
```

Your child object must accept the key passed, as an argument

- **<span style="font-size: 15px">Child Component</span>**

```javascript
const Student = (props) => {
  return (
    <div>
      <h1>Name: { props.name }</h1>
      <h1>Age: { props.age }</h1>
      <h1>Student: { props.isStudent ? "Yes" : "No" }</h1>
    </div>
  )
}
```

- **<span style="font-size: 15px">Parent Component</span>**

```javascript
import Student from './Student.jsx';

const App = () => {
    return(
    <>
        <Student 
            name="Spongebob" 
            age={30} 
            isStudent={true}
        />
    </>
    )
}

export default App;
```

# Prop Types

PropTypes allow you to enforce strict typing on variables passed through props and is included in the Node Modules folder after installing React.

Here is how to create, and include PropTypes to enforce & verify variables passed down by Props are of the correct typing you want them to be.

```javascript
//must import PropTypes first
import PropTypes from 'prop-types';

//for reference, itemsArray contains the following
const itemsArray = [
    {id: 1, name: "item1"},
    {id: 2, name: "item2"},
    {id: 3, name: "item3"},
]

//your component
const Student = (props) => {
  return (
    <div>
      <h1>Name: { props.name }</h1>
      <h1>Age: { props.age }</h1>
      <h1>Student: { props.isStudent ? "Yes" : "No" }</h1>
      <ol>
      { props.itemsArray }
      </ol>
    </div>
  )
}

//setting up proptypes for your component
Student.PropTypes = {
    name: PropTypes.string,
    age:  PropTypes.number,
    isStudent: PropTypes.bool,

    itemsArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    }))
}

export default Student;
```

# Default Props

You may also setup Default Props for any Component that receives props, this is handy when a variable fails to get passed to the child Component, or if you want to have default values for a Component instance that doesn't receive props.

```javascript
const Student = (props) => {
  return (
    <div>
      <h1>Name: { props.name }</h1>
      <h1>Age: { props.age }</h1>
      <h1>Student: { props.isStudent ? "Yes" : "No" }</h1>
      <ol>
      { props.itemsArray }
      </ol>
    </div>
  )
}

Student.defaultProps = {
    name: "Guest",
    age:  13,
    isStudent: "false",
    itemsArray: [],
}

export default Student;
```

# onClick Event

When a user clicks on an element, we can respond to clicks by passing a callback to the **onClick** event handler, you can also use **onDoubleClick** instead!

- **<span style="font-size: 15px">Basic onClick Function</span>**

```javascript
function Button(){

    //onClick function
    const handleClick = () => {
        console.log("WOW!");
    }

    return(

        //onClick function
        <button onClick={ handleClick }>
            Click Me!
        </button>
    );
}

export default Button;
```

- **<span style="font-size: 15px">onClick Function with Arguments</span>**

  **MUST** be called with an arrow function, or else it will be AUTOMATICALLY called on run!

```javascript
function Button(){

    //onClick function with arguments
    const handleClick2 = (name) => {
        console.log(`${name} stop it!`)
    }

    return(

        //onClick function with arguments
        <button onClick={ () => handleClick2("Skye") }>
            Don't Click Me!
        </button>
    );
}

export default Button;
```

# onClick Event Properties

When you click on a button, there is an event that can be retrieved, and modified which contains much information about the click, to view these properties, use the following.

```javascript
function Button(){

    const handleClick = (e) => {
        console.log(e)
    }

    return(

        //onClick function with arguments
        <button onClick={ (e) => handleClick(e) }>
            Event Properties
        </button>
    );
}

export default Button;
```

# Change Button Text onClick

```javascript
function Button(){

    const handleClick = (e) => {
        e.target.textContent = "Updated Button";
    }

    return(
        <button onClick={ (e) => handleClick(e) }>
            Non-Updated Button
        </button>
    );
}

export default Button;
```

# Hide Image onClick

```javascript
function Button(){

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return(
        <img src="./your-image.png"
            onClick={ (e) => handleClick(e) }>
        </img>
    );
}

export default Button;
```

# onChange Event

Event handler used primarily with form & input elements. It triggers a function every time the value of the input changes.

# onChange Input Box

```javascript
import React, { useState } from "react";

function MyComponent(){
    
    //input text
    const [name, setName] = useState("No Name"); //string
    const [age, setAge] = useState(13); //number

    //change name onChange of name input field
    function handleNameChange(event){
        setName(event.target.value);
    }

    //change age onChange of age input field
    function handleAgeChange(event){
        setAge(event.target.value);
    }

    return(
        <>
            <h1> Name: { name } </h1>
            <input value={ name } onChange={ handleNameChange }/>

            {/* INPUT : age field */}
            <h1> Age: { age } </h1>
            <input value={ age } onChange={ handleAgeChange }/>
        </>
    );
}

export default MyComponent;
```

# onChange Textarea

```javascript
import React, { useState } from "react";

function MyComponent(){
    
    //textarea
    const [comment, setComment] = useState("");

    //change comment
    function handleCommentChange(event){
        setComment(event.target.value);
    }

    return(
        <>
            <h1> Comment: { comment } </h1> 
            <textarea value={ comment } onChange={ handleCommentChange }
            placeholder="Enter comment..." />
        </>
    );
}

export default MyComponent;
```

# onChange Option Box

```javascript
import React, { useState } from "react";

function MyComponent(){

    //options
    const [payment, setPayment] = useState("label");

    return(
        <>
            <select value={ payment } onChange={ handlePaymentChange }>
                <option value="label"> Select an Option </option>
                <option value="Visa"> Visa </option>
                <option value="Mastercard"> Mastercard </option>
                <option value="Giftcard"> Giftcard </option>
            </select>
            <h1>Payment Type: { payment }</h1>
        </>
    );
}

export default MyComponent;
```

# onChange Radio Buttons

```javascript
import React, { useState } from "react";

function MyComponent(){
    
    //input text
    const [name, setName] = useState("No Name");
    const [age, setAge] = useState(13);

    //textarea
    const [comment, setComment] = useState("");

    //checkbox
    const [payment, setPayment] = useState("label");

    //change name onChange of name input field
    function handleNameChange(event){
        setName(event.target.value);
    }

    //change age onChange of age input field
    function handleAgeChange(event){
        setAge(event.target.value);
    }

    //change comment
    function handleCommentChange(event){
        setComment(event.target.value);
    }

    return(
        <>
            {/* INPUT : name field */}
            <h1> Name: { name } </h1>
            <input value={ name } onChange={ handleNameChange }/>

            {/* INPUT : age field */}
            <h1> Age: { age } </h1>
            <input value={ age } onChange={ handleAgeChange }/>

            {/* TEXTAREA : comment field */}
            <h1> Comment: { comment } </h1> 
            <textarea value={ comment } onChange={ handleCommentChange }
            placeholder="Enter comment..." />

            {/*OPTION MENU : payment type*/}
            <select value={ payment } onChange={ handlePaymentChange }>
                <option value="label"> Select an Option </option>
                <option value="Visa"> Visa </option>
                <option value="Mastercard"> Mastercard </option>
                <option value="Giftcard"> Giftcard </option>
            </select>
            <h1>Payment Type: { payment }</h1>
        </>
    );
}

export default MyComponent;
```