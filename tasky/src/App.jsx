import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {

   const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", piority: "Low" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", piority: "Medium"},
      { id: 3, title: "Tidy up", deadline: "Today", piority: "High"}
    ]
  });


    return (
    <div className="container">
      <h1>Tasky</h1>
     {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      piority={task.piority}
      key={task.id}
    />
  ))} 

    </div>
  );

}

export default App;
