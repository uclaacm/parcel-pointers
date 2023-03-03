import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import FillArrow from '../components/FillArrow';
import NavButtons from '../components/NavButtons';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson2.scss';
import '../styles/PageWrapper.scss';

const code1 = `
  int* intPointer;
  char* charPointer;
  `;

const code2 = `
  variable_type* variable_name;
  `;

const Lesson2_2: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_2}>
        <div className="page-wrapper">
          <h1>Introducing Pointers</h1>
          <p>
            To recap, pointer variables store the memory address of another
            variable. Another way of thinking about this is that the pointer
            variable tells you where the other variable is in memory, and so it
            &quot;points&quot; to where the other variable is located. This is
            where the name pointer comes from!
          </p>
          <div className="diagram">
            <FillArrow text1="pointer" text2="variable" />
          </div>
          <p>
            In C++, pointers don&apos;t just want to hold a memory address -
            they&apos;d also like to know what kind of variable they are
            pointing to. This is why we end up with different types of pointers
            - <span className="code">int</span> pointers,{' '}
            <span className="code">float</span> pointers,{' '}
            <span className="code">char</span> pointers, etc.
          </p>
          <h2>Creating a Pointer</h2>
          <p>
            So enough waffling, how do we create a pointer? First we have to say
            what kind of variable our pointer is going to point to, and then we
            use the asterisk symbol <span className="code">*</span> to let C++
            now that we want this variable to be a pointer, and finally we
            declare the name of our pointer variable:
          </p>
          <div className="diagram">
            <Terminal code={code1} />
          </div>
          <p>
            As you can see, the only difference between declaring a normal
            variable and declaring a pointer variable is that we put an asterisk{' '}
            <span className="code">*</span> in between the variable type and the
            variable name.
          </p>
          <div className="diagram">
            <Terminal code={code2} />
          </div>
          <NavButtons page={5}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson2_2;
