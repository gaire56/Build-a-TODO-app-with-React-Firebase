import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'

function App() {
  const [todos, setTodos] = useState(['Wake-Up', 'Exercise','Eat','Code', 'Eat', 'Sleep' ]);
  const [input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    // this will fire off when we click the button:
    event.preventDefault(); //will stop the Refresh
    console.log('im working!');
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Hey! What's up!?</h1>
      <form action="">
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>      
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}        
      </ul>

    </div>
  );
}

export default App;
