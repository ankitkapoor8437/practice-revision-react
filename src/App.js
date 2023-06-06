import { Form } from 'react-router-dom';
import './App.css';
import { StudentArrow } from './components/arrow-component/arrow';
import { StudentClass } from './components/class-component/testc';
import Student from './components/functional-component/testf';
import { Studentstate } from './components/states/stateusingclass';
import Stateusingfunctional from './components/states/stateusingfunctional';
import FormCompopent from './components/form-component.jsx/form';
import TodoList from './components/todoList-Component/todoList';
import Fragment from './components/fragment-components/fragment';
import BasicForm from './components/test-component/basicForm';
import { ReducerFunction } from './components/reducer-component/reduce';

import { Routes, Route } from 'react-router-dom';


// Basic CRUD Pages
import { Create } from './components/CRUD-component/Create-component/create'
import Read from './components/CRUD-component/Read-component/read';
import {Update} from './components/CRUD-component/Update-component/update';

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
      {/* <TodoList/> */}
      {/* <Fragment/> */}

      {/* <BasicForm/> */}

      {/* <ReducerFunction /> */}


      {/* CRUD APPLICATION */}

      <div className='container'>
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
