import './App.css';
import { useState } from 'react';
import logo from './mylogo.png';

function TodoApp() {

  const [todo, setTodo] = useState([]);

  const [input, setInput] = useState("");

  const [edit, setEdit] = useState(false);

  const [changetask, setChangetask] = useState("");
  
  
  
  // ADDING TASK ITEMS
  
    const addedtask = (e) => {
        e.preventDefault();
        }

        if (edit) {
        update(changetask);
        setInput("")
        setEdit(false)
        } else {
            if(input === ""){
            alert("Enter Your Task")
            return;
           }
            else{
               setTodo([...todo, input])
               setInput("")
            }
    }


 // UPDATE TASK ITEMS

    const update = (valueSentByAddButton) => {

        const indexvalue = todo.indexOf(valueSentByAddButton);

        todo.splice(indexvalue,1,input);
    
    }


 // EDIT ITEMS

    const edittaskitem = (elementSent) => {

        const indexvaluetwo = todo.find(element => element === elementSent);

        if (indexvaluetwo == elementSent) {
            
            setInput(elementSent);
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
    
    <div>

        <form className='form'>

            <label for="todo">Create your Todo List</label>
            <input type="text" name="todo" value={input} onChange={ (e) =>setInput(e.target.value) } placeholder="Add Your Task"/>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
             
                { 
                  edit? <button className='btnchange' onClick={addedtask}>Update</button> : <button className='add' onClick={addedtask}>Add</button>
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

    </div>

);

}


function App() {

    return (

        <>
            <h1>Your Personal Todo App</h1>
            <TodoApp />
            <footer>
                <img className='loki' src={logo} alt='loki'/>
            </footer>

        </>
    );
}

export default App;