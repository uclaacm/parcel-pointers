import { FC } from 'react';
import lesson5pic1 from '../../public/lesson5pic1.svg';
import lesson5pic2 from '../../public/lesson5pic2.svg';
import lesson5pic3 from '../../public/lesson5pic3.svg';
import AppWrapper from '../components/AppWrapper';
import CodeDiagram from '../components/CodeDiagram';
import CompareCode from '../components/CompareCode';
import NavButtons from '../components/NavButtons';
import Note from '../components/Note';
import { HeaderSections } from '../types/globalTypes';
import '../styles/PageWrapper.scss';

const Lesson5: FC = () => {
  const code1 = `
  int x = 3;
  x = 5;
  `;
  const code2 = `
  int myVariable = 3;
  int* myPointer = &myVariable;
  *myPointer = 5;
  `;

  const imageArray = [
    { src: lesson5pic1, alt: 'Lesson 5 Pic1', className: 'resizedimage' },
    { src: lesson5pic2, alt: 'Lesson 5 Pic2', className: 'resizedimage1' },
    { src: lesson5pic3, alt: 'Lesson 5 Pic3', className: 'resizedimage1' },
  ];

  const diagram = [
    {
      code: 'int myVariable = 3;',
    },
    {
      code: 'int* myPointer = &myVariable;',
    },
    {
      code: '*myPointer = 5;',
    },
  ];

  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_5}>
        <div className="page-wrapper">
          <h1>Reassigning the Value Pointed to</h1>
          <p>
            There are other things we can do with pointers besides just taking a
            peek at the value stored at that address - we can also modify the
            value stored at that address! This is like telling Pipi to go to the
            box stored at a particular address, and then modifying the contents
            inside that box.
          </p>
          <div className="diagram">
            <CompareCode
              code1={code1}
              caption1="Normal Reassignment"
              code2={code2}
              caption2="Pointer Reassignment"
            />
          </div>
          <p>
            In the above code snippet, we start by creating a variable called
            <strong> myVariable</strong>, and we give it a value of 3. In the
            next line, we create a pointer that stores the memory address of
            myVariable - <strong>myPointer</strong> now points to myVariable.
          </p>

          <p>
            The third line is where things get interesting. This is basically
            saying that we go to the value stored at the address in myPointer,
            and we set that value equal to 5. Just like when we reassign a
            normal variable to a new value, when we reassign the value stored at
            a memory address we overwrite the previous value and it now just
            contains the new value.
          </p>

          <p>
            <em>
              Click through each line of code to see how the diagram changes
            </em>
          </p>
          <CodeDiagram code={diagram} images={imageArray} />
          <p>
            This has an interesting implication - we directly overwrote the
            value that was stored at the address in myPointer. But we know that
            myVariable contained the value stored at this address. What this
            means is that we changed the value of myVariable, without ever
            explicitly reassigning it to a new value! At no point did we ever
            write a line of code that said myVariable = 5, and yet we&apos;ve
            still managed to change the value of myVariable. This is what makes
            pointers so powerful, it gives us another way of changing the value
            of a variable, and you&apos;ll learn later why this can be so
            useful.
          </p>

          <p>
            To recap, if we see <strong>dereferencing</strong> happening on the
            left side of an assignment statement, that means we are going to the
            address and getting the value there, and now we want to change the
            value to whatever is on the right side. Because you are directly
            modifying the value stored at the address, you are also changing the
            contents of the variable at that address. If you try to use that
            variable again in your program, you will see that its value has
            changed.
          </p>

          <div className="diagram">
            <Note title="Note">
              <p>
                If myPointer is a pointer that points to myVariable, we know
                that *myPointer and myVariable will be the same variable. In
                fact, they can actually be used interchangeably - anytime you
                write myVariable in your program, you could replace it with
                *myPointer and your code would function exactly the same, and
                vice versa. This is known as <strong>aliasing</strong> -
                myVariable and *myPointer are aliases of each other since
                despite appearing as different names, they are actually
                referring to the exact same value stored in memory. It&apos;s
                like how Clark Kent is an alias for Superman - even though they
                are two different names, they are both referring to the same
                person.
              </p>
            </Note>
          </div>
          <NavButtons page={8}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson5;
