import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import Error404 from './pages/Error404';
import Exercise1 from './pages/Exercise1';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1';
import Lesson10 from './pages/Lesson10';
import Lesson2_1 from './pages/Lesson2_1';
import Lesson2_2 from './pages/Lesson2_2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';
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
          <Route path="/exercise-1" element={<Exercise1 />} />
          <Route path="/lesson-4" element={<Lesson4 />} />
          <Route path="/lesson-5" element={<Lesson5 />} />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
