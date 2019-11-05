import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: ['Sacar la ropa','Hacer la cama', 'Leer un rato'],
      inputTask: ''
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            { this.state.tasks.map((task) => 
              <li key={task}>{task}</li>
            )}
          </ul>
           <form>
             <input value={this.state.inputTask} onKeyPress={this.onKeyPressTask} onChange={this.onChangeTask} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }

  onChangeTask = (e) => {
    this.setState({
      inputTask: e.target.value
    });
  }

  onKeyPressTask = (e) => {
    if (e.key === 'Enter'){
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.concat(this.state.inputTask)
      });
      this.setState({
        inputTask: ''
      });
    }
  }
}


export default App;
