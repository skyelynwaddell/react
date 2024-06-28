import React from 'react'


const App = () => {

  //declare a variable with state
  //use state parameter, is the default value of the variable
  //const [newItem, setNewItem] = useState("");

  return (
    <>
    <div className='m-5'>

    <form className="w-100">
        <label htmlFor="newitem">New Item</label>
        <input className='form-control mb-1' id='newitem' type="text" />
        <button className='btn btn-primary'>Add</button>
    </form>

    <h1>Todo List</h1>
    <ul className='list'>
      <li>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Item 1
        </label>
        <h1></h1>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>

    </div>
    </>

  )
}

export default App

