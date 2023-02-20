import EastIcon from '@mui/icons-material/East';
import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson2.scss';
import '../styles/PageWrapper.scss';

const Lesson2_2: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_2}>
        <div className="page-wrapper">
          <h1>Introducing Pointers</h1>
          <p>
            To recap, pointer variables store the memory address of another variable. Another way of thinking about this is that the pointer variable tells you where the other variable is in memory, and so it "points" to where the other variable is located. This is where the name pointer comes from!
          </p>
          <div className='diagram'>

          </div>
          <p>
            In C++, pointers don&apos;t just want to hold a memory address - they'd also like to know what kind of variable they are pointing to. This is why we end up with different types of pointers - int pointers, float pointers, char pointers, etc
          </p>
          <h2>Creating a Pointer</h2>
          <p>
            So enough waffling, how do we create a pointer? First we have to say what kind of variable our pointer is going to point to, and then we use the asterisk symbol * to let C++ know that we want this variable to be a pointer, and finally we declare the name of our pointer variable:
          </p>
          <div className='diagram'>

          </div>
          <p>
            As you can see, the only difference between declaring a normal variable and declaring a pointer variable is that we put an asterisk * in between the variable type and the variable name.
          </p>
          <label>Boxed Syntax Notation:</label>
          <div className='diagram'>

          </div>
          <NavButtons page={5}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson2_2;
