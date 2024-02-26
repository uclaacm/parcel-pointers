import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conclusion from './pages/Conclusion';
import Demo from './pages/Demo';
import Error404 from './pages/Error404';
import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';
import Exercise5 from './pages/Exercise5';
import Exercise6 from './pages/Exercise6';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1';
import Lesson10 from './pages/Lesson10';
import Lesson2_1 from './pages/Lesson2_1';
import Lesson2_2 from './pages/Lesson2_2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';
import Lesson6 from './pages/Lesson6';
import Lesson7 from './pages/Lesson7';
import Lesson8 from './pages/Lesson8';
import Lesson9 from './pages/Lesson9';

import PointerMotivation from './pages/PointerMotivation';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pointer-motivation" element={<PointerMotivation />} />
          <Route path="/lesson-1" element={<Lesson1 />} />
          <Route path="/lesson-2-1" element={<Lesson2_1 />} />
          <Route path="/lesson-2-2" element={<Lesson2_2 />} />
          <Route path="/lesson-3" element={<Lesson3 />} />
          <Route path="/lesson-4" element={<Lesson4 />} />
          <Route path="/lesson-5" element={<Lesson5 />} />
          <Route path="/lesson-6" element={<Lesson6 />} />
          <Route path="/lesson-7" element={<Lesson7 />} />
          <Route path="/lesson-8" element={<Lesson8 />} />
          <Route path="/lesson-9" element={<Lesson9 />} />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="/exercise-1" element={<Exercise1 />} />
          <Route path="/exercise-2" element={<Exercise2 />} />
          <Route path="/exercise-3" element={<Exercise3 />} />
          <Route path="/exercise-4" element={<Exercise4 />} />
          <Route path="/exercise-5" element={<Exercise5 />} />
          <Route path="/exercise-6" element={<Exercise6 />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
