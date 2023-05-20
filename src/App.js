import './App.css';
import { StudentArrow } from './components/arrow-component/arrow';
import { StudentClass } from './components/class-component/testc';
import Student from './components/functional-component/testf';
import { Studentstate } from './components/states/stateusingclass';
import Stateusingfunctional from './components/states/stateusingfunctional';

function App() {
  return (
    <div className="App">

      {/* Props example for dynamic components. */}
      {/* <Student name='Ankit Kapoor' classPosition="10th" contact="8437926804" email="ankitkapoor8437@gmail.com" /> */}
      {/* <StudentArrow name='Ankit Kapoor' class="10th" contact="8437926804" email="ankitkapoor8437@gmail.com" /> */}
      {/* <StudentClass name='Ankit Kapoor' classPosition="10th" contact="8437926804" email="ankitkapoor8437@gmail.com" /> */}
      {/* <Studentstate/> */}
      <Stateusingfunctional/>




    </div>
  );
}

export default App;
