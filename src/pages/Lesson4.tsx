import { FC } from 'react';
import FillArrowImage from '../../public/FillArrow.svg';
import AppWrapper from '../components/AppWrapper';
import FillArrow from '../components/FillArrow';
import NavButtons from '../components/NavButtons';
import Note from '../components/Note';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson4.scss';

const code1 = `
  * // = "get the value stored at this address" AKA dereferencing
  `;
const code2 = `
  int* ptr = &x;
  `;

const code3 = `
  int x = *ptr;
  `;

const Lesson4: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_4}>
        <div className="page-wrapper">
          <h1>Dereferencing Pointers</h1>
          <div className="lesson4-img">
            <img src={FillArrowImage} alt="Fill Arrow" />
          </div>
          <p>
            Now you might be wondering, what good will knowing an address do?
            And you&apos;re right - most of the time, we don&apos;t care about
            the actual value of the address itself, we care about the value
            stored at that address. So if we are just given an address, it would
            be really useful if there were a way for us to find out what value
            is stored there. And you guessed it, there is!
          </p>
          <div className="diagram">
            <Terminal code={code1} />
          </div>
          <p>
            If we put the <span className="code">*</span> operator in front of a
            memory address, our computer will go to that address in memory and
            return to us the value stored there. This is known as{' '}
            <u>dereferencing</u>. In our example, this is like giving Pipi an
            address, going to the box at that address, and telling us
            what&apos;s inside the box. We have gone from selecting the pointer
            to selecting the variable with this operator.
          </p>
          <div className="diagram">
            <FillArrow text1="myPointer" text2="myVariable" />
          </div>
          <p>
            This is also why we need to declare what type of pointer we want
            when creating a pointer - this tells your computer what kind of
            variable it needs to return and allows dereferencing to become
            possible.
          </p>
          <p>
            You might have noticed something. Didn&apos;t we see the{' '}
            <span className="code">*</span> operator being used for something
            else already? And unfortunately, yes we did. We also use it to
            declare that we are creating a new pointer variable. This is where a
            lot of people get confused - we are using the same symbol to mean
            two very different things. Why would the creators of C++ do that? If
            we knew the answer we would tell you.
          </p>
          <div className="diagram">
            <Note title="Note">
              <p>
                Since <span className="code">*</span> has two meanings when it
                comes to pointers, you just have to be really careful. Really
                try and make sure you understand what the code is doing and use
                context clues to infer the meaning of{' '}
                <span className="code">*</span>. In general, if you see{' '}
                <span className="code">*</span> between a variable type and a
                variable name, that means a new pointer variable is being
                declared and created. If you see <span className="code">*</span>{' '}
                before a variable name but there is no variable type, that means
                you are dereferencing an existing pointer getting the value
                stored at that address.
              </p>
              <label className="mlabel">
                Declaring a new pointer variable:
              </label>
              <p>
                The <span className="code">*</span> appears between a variable
                type and a variable name - we must be declaring a new pointer
                variable.
              </p>
              <div className="diagram">
                <Terminal code={code2} />
              </div>
              <label>Dereferencing a pointer:</label>
              <p>
                The <span className="code">*</span> appears before a variable
                name with no variable type - we must be dereferencing a pointer
                variable.
              </p>
              <div className="diagram">
                <Terminal code={code3} />
              </div>
              <p>
                Another tip is that if we are declaring a pointer variable, it
                can only appear on the left side of an{' '}
                <span className="code">=</span> statement, never on the right
                side. If it appears on the right side, we know that we are
                dereferencing a pointer.
              </p>
            </Note>
          </div>
          <NavButtons page={7}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson4;
