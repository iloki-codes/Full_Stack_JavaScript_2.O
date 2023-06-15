import React from 'react';
import './App.css';
import { useState } from 'react';
import logo from './mylogo.png';

function App() {

  const [todo, setTodo] = useState([]);

  const [inputtask, setInputtask] = useState("");

  const [edit, setEdit] = useState(false);

  const [changetask, setChangetask] = useState("");
  
  
  
  // ADDING TASK ITEMS
  
    const addedtask = (e) => {
        e.preventDefault();
        

        if (edit) {
        update(changetask);
        setInputtask("")
        setEdit(false)
        } else {
            if(inputtask === ""){
            alert("Enter Your Task")
            return;
           }
               setTodo([...todo, inputtask])
               setInputtask("")
        }
    }


 // UPDATE TASK ITEMS

    const update = (AddButton) => {

        const indexvalue = todo.indexOf(AddButton);

        todo.splice(indexvalue,1,inputtask);
    
    }


 // EDIT ITEMS

    const edittaskitem = (elementSent) => {

        const indexvaluetwo = todo.find(element => element === elementSent);

        if (indexvaluetwo === elementSent) {
            
            setInputtask(elementSent);
            setChangetask(elementSent);
        } else {
            setEdit(true);
        }
    }

 // DELETE TASK ITEMS

    const remove = (elementSent) => {

        const removetask = todo.find(element => element === elementSent)

        if (removetask == elementSent) {

            const indexvaluethree = todo.indexOf(removetask);
            todo.splice(indexvaluethree,1)
            setTodo([...todo])
        }
    }



  return (
    
    <>

        <p className='heading'>Your Personal Todo App</p>
        <br/>

        <form className='form'>

            <label for="todo">Create your Todo List</label>
            
            <br/>

            <input type="text" value={inputtask} onChange={(e) => setInputtask(e.target.value)}/>
             
             
                { 
                  {edit} ? <button className='btnchange' onClick={addedtask}>Update</button> : <button className='add' onClick={addedtask}>Add</button>
                }

        </form>



        <ul className='tasklist'>

            { todo.map((elem,index) => (

                <div key = {elem}>
                    
                    <li className='todos'>{todo}
                    
                        <span className='inputtext'>{elem}</span>

                        <button className='btntask' onClick={ () => edittaskitem(elem) }>

                            <i className='fa-solid fa-pen-to-square'></i>
                        </button>

                        <button className='btntask' onClick={ () => remove(elem) }>

                            <i className='fa-solid fa-trash'></i>
                        </button>

                    </li>

                </div>

                ) )
            }

        </ul>

        <footer>
            <img className='loki' src={logo} alt='loki'/>
        </footer>


    </>
    );


}

export default App;
