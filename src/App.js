import { Form } from 'react-router-dom';
import './App.css';
import { StudentArrow } from './components/arrow-component/arrow';
import { StudentClass } from './components/class-component/testc';
import Student from './components/functional-component/testf';
import { Studentstate } from './components/states/stateusingclass';
import Stateusingfunctional from './components/states/stateusingfunctional';
import FormCompopent from './components/form-component.jsx/form';
import TodoList from './components/todoList-Component/todoList';

function App() {
  return (
    <div className="App">

      {/* Props example for dynamic components. */}
      {/* <Student name='Ankit Kapoor' classPosition="10th" contact="8437926804" email="ankitkapoor8437@gmail.com" /> */}
      {/* <StudentArrow name='Ankit Kapoor' class="10th" contact="8437926804" email="ankitkapoor8437@gmail.com" /> */}
      {/* <StudentClass name='Ankit Kapoor' classPosition="10th" contact="8437926804" email="ankitkapoor8437@gmail.com" /> */}
      {/* <Studentstate/> */}
      {/* <Stateusingfunctional/> */}
      {/* <FormCompopent/> */}
      <TodoList/>

    </div>
  );
}

export default App;
