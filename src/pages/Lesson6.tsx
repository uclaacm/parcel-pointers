import { FC } from 'react';
import lesson6pic1 from '../../public/lesson6pic1.svg';
import lesson6pic2 from '../../public/lesson6pic2.svg';
import lesson6pic3 from '../../public/lesson6pic3.svg';
import lesson6pic4 from '../../public/lesson6pic4.svg';
import AppWrapper from '../components/AppWrapper';
import CodeDiagram from '../components/CodeDiagram';
import CompareCode from '../components/CompareCode';

import NavButtons from '../components/NavButtons';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';
import '../styles/PageWrapper.scss';

const Lesson6: FC = () => {
  const code1 = `
  Int x;
  Int* myPointer = &x;
  Int y;
  myPointer = &y;
  `;
  const code2 = `
  int x;
  int* myPointer = &x;
  int y;
  int* myPointer2 = &y;
  myPointer = myPointer2;
  `;

  const diagram = [
    {
      code: 'Int x;',
    },
    {
      code: 'Int* myPointer = &x;',
    },
    {
      code: 'Int y;',
    },
    {
      code: 'myPointer = &y;',
    },
  ];

  const imageArray = [
    { src: lesson6pic1, alt: 'Lesson 6 Pic1', className: 'resizedimage3' },
    { src: lesson6pic2, alt: 'Lesson 6 Pic2', className: 'resizedimage3' },
    { src: lesson6pic3, alt: 'Lesson 6 Pic3', className: 'resizedimage3' },
    { src: lesson6pic4, alt: 'Lesson 6 Pic4', className: 'resizedimage3' },
  ];

  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_6}>
        <div className="page-wrapper">
          <h1>Reassigning Pointers</h1>
          <p>
            So now we&apos;ve learned that we can use pointers to reassign the
            underlying value stored at that address. But a pointer variable is
            just a variable, and like any other variable, we can reassign the
            value stored in a pointer variable too! If a pointer variable
            already stores a memory address, we can reassign it to store a
            different memory address:
          </p>
          <div className="diagram">
            <Terminal code={code1} />
          </div>
          <p>
            In the above code snippet, we start by creating an int variable
            called <span className="code">x</span> , and we have myPointer store
            its memory address. Then we create a new int variable called y, and
            we reassign myPointer to store y&apos;s memory address instead.
            Another way of thinking about this is that first myPointer pointed
            to variable
            <span className="code">x</span>, but then we changed it to point to
            variable <span className="code">y</span> instead.
          </p>

          <p>
            Going back to our warehouse example, it&apos;s like first giving
            Pipi the instruction to go to a particular address, but then
            scribbling on that instruction and writing down a different address
            instead. We changed the address on the instruction, and so now he is
            &quot;pointing&quot; towards a different box and will go there
            instead.
          </p>

          <CodeDiagram code={diagram} images={imageArray} />

          <p>
            In this same way, we can reassign pointers to other pointers too!
          </p>

          <div className="diagram">
            <CompareCode
              code1={code1}
              caption1="Version 1"
              code2={code2}
              caption2="Version 2"
            />
          </div>

          <p>
            This does the same thing, reassigning myPointer to point at the
            variable y instead, just now myPointer2 is also pointing at the same
            variable. Note how we neither dereference (with a{' '}
            <span className="code">*</span>) or get the memory address (with an{' '}
            <span className="code">&</span>) when we reassign a pointer to
            another pointer. This is because the pointer, in this case
            myPointer2, contains the memory address of the variable it is
            pointing to already, so we simply want to assign that same memory
            address into our other pointer, myPointer. In this way, myPointer
            will have the same memory address as myPointer2, thus pointing to
            the same variable that myPointer2 is pointing to. Remember, a
            pointer is just another type of variable!
          </p>

          <p>
            To recap, we can reassign the value of a pointer without derefencing
            it first. If we reassign a pointer to a different memory address,
            you can think of this as changing the pointer to point to a
            different variable.
          </p>

          <NavButtons page={9}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson6;
