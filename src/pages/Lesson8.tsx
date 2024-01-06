import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import CompareCode from '../components/CompareCode';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../styles/PageWrapper.scss';
import '../styles/Lesson8.scss';

const Lesson8: FC = () => {
  const code1 = `
    #include <iostream>

    Void addFiveNormal(int x) 
    {
        X += 5;
    }

    Void addFivePointer(int* x) 
    {
        *X += 5;
    }

    Void addFiveReference(int &x) 
    {
        X += 5;
    }

    Int main() 
    {
        Int first = 0;
        Int second = 0;
        Int third = 0;
        addFiveNormal(first);
        addFivePointer(&second);
        addFiveReference(third);
        std::cout << first << endl;
        std::cout << second << endl;
        std::cout << third << endl;
    }

    `;

  const code2 = `
    Our Output:
    0
    5
    5
    `;

  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_8}>
        <div className="page-wrapper">
          <h1 className="title">References vs. Pointers</h1>
          <p>
            Now let&apos;s take a look at one way that pointers can be useful!
          </p>
          <div className="diagram">
            <CompareCode
              code1={code1}
              caption1="Code"
              code2={code2}
              caption2={'Output'}
            />
          </div>
          <p>
            The first function doesn&apos;t work like we want, even though the
            other two do! This is because when we normally pass a variable into
            a function, the function will make a copy of that variable with the
            same value, which is called pass by value. This means that any
            changes to the value of that variable will not be reflected outside
            the function, also known as having side effects.
            <br />
            <br />
            Passing by pointer can be thought of as passing a pointer by value
            to the function, or simply passing in a copy of the pointer,
            creating a new pointer that points to the same variable. This is
            also equivalent to passing by object reference (this is the way that
            Python handles parameter passing!). This means that any changes to
            the pointer will not create side effects, but changes made by
            dereferencing the pointer will. In this case, we dereference x and
            add 5 to the original variable, meaning that there is a side effect
            outside of the function and change the value to be 5.
            <br />
            <br />
            Finally, passing by reference is actually still passing in a pointer
            to the same variable under the hood, but using the reference will
            automatically dereference that pointer. This means that simply
            referring to the variable x normally in this case will cause a side
            effect outside the function and change the value to be 5.
          </p>
          <NavButtons page={11}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};
export default Lesson8;
