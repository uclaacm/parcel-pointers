import { FC, useState, useEffect } from 'react';
import JustX from '../../public/Lesson6/Lesson6_JustX.png';
import X from '../../public/Lesson6/Lesson6_X_arrow.png';
import XY from '../../public/Lesson6/Lesson6_XY_arrow.png';
import YX from '../../public/Lesson6/Lesson6_YX_arrow.png';
import AppWrapper from '../components/AppWrapper';
import CompareCode from '../components/CompareCode';
import NavButtons from '../components/NavButtons';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';
import '../styles/PageWrapper.scss';
import '../styles/CodeDiagram.scss';
import '../styles/Terminal/Terminal.scss';

export interface CodeDiagramProps {
  code: {
    code: string;
  }[];
}

function CodeDiagram(props: CodeDiagramProps): JSX.Element {
  const [clicked, setClick] = useState(Array(props.code.length).fill(false));
  const [diagram, setDiagram] = useState(0);

  useEffect(() => {
    const newClicked = [...clicked]; // Create a shallow copy of the original array
    newClicked[0] = true; // Modify the desired element
    setClick(newClicked); // Update the state with the modified array
  }, []);

  return (
    <div className="container">
      <div className="codebox">
        {props.code.map((code, index) => (
          <div
            className={clicked[index] ? 'clicked' : 'notclicked'}
            onClick={() => {
              const newClicked = [...clicked];
              for (let i = 0; i < newClicked.length; i++) newClicked[i] = false;
              newClicked[index] = true;
              setClick(newClicked);
              setDiagram(index);
            }}
            key={index}
          >
            <p>{code.code}</p>
          </div>
        ))}
      </div>
      <div style={{ height: '402px', paddingTop: '1.5em' }}>
        {diagram == 0 ? (
          <img src={JustX} alt={'Just X'} />
        ) : (
          <>
            {diagram == 1 ? (
              <img src={X} alt={'X box'} />
            ) : (
              <>
                {diagram == 2 ? (
                  <img src={XY} alt={'XY Box'} />
                ) : (
                  <> {diagram == 3 ? <img src={YX} alt={'YX Box'} /> : <></>}</>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

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

          {/**
           * THIS IS WHERE THE SLIDESHOW GOES
           */}

          <CodeDiagram code={diagram} />

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
