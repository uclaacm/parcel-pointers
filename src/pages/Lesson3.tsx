import { FC } from 'react';
import FillArrowImage from '../../public/FillArrow.svg';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import Note from '../components/Note';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson3.scss';

const code1 = `
  & // = "get the address of"
  `;

const code2 = `
  &x // = "get the address of" x
  &myValue // = "get the address of" myValue
  &start // = "get the address of" start
  `;

const code3 = `
  int myVariable;
  int* myPointer = &myVariable;
  `;

const Lesson3: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_3}>
        <div className="page-wrapper">
          <h1>Assigning a Value to Pointers</h1>
          <p>
            Great! Now we know how to declare a pointer variable. But how do we
            give it a value?
          </p>
          <p>
            Well, we know that we want our pointer variable to store the address
            of another variable. There is a special operation that we can use to
            ask C++ to fetch the address of any variable:
          </p>
          <div className="diagram">
            <Terminal code={code1} />
          </div>
          <p>
            To use this operator, we just put it in front of any variable that
            we have created:
          </p>
          <div className="diagram">
            <Terminal code={code2} />
          </div>
          <p>
            If you put <span className="code">&</span> in front of any variable,
            it will return the memory address of that variable. And now that it
            has returned a value, you can treat it just like any other value by
            assigning it to a variable. You can assign this address value to a
            pointer variable like this:
          </p>
          <div className="diagram">
            <Terminal code={code3} />
          </div>
          <p>
            In the above code, <span className="code">myPointer</span> will now
            store the address of <span className="code">myVariable</span>. You
            can think about using <span className="code">myPointer</span> as
            simply selecting a separate object that points to
            <span className="code">myPointer</span> as highlighted below:
          </p>
          <div className="lesson3-img">
            <img src={FillArrowImage} alt="Fill Arrow" />
          </div>
          <p>
            The <span className="code">&</span> operator gives you the address
            of any variable you&apos;ve created. In our warehouse, it&apos;s
            like Pipi asking you for the address of the box they want to go to.
            Or it&apos;s like searching on Google for the address of a
            restaurant you want to go to.
          </p>
          <div className="diagram">
            <Note title="Note">
              <p>
                If you try to print out the value of a memory address using{' '}
                <span className="code">cout</span>, you might see that the value
                looks something like:{' '}
                <span className="code">0x7ffde45c9a54</span>
              </p>
              <p>
                Don&apos;t be alarmed by this - this is an actual memory address
                in your computer! Since your computer&apos;s memory is huge, the
                addresses get to be very large numbers, and these numbers can be
                really long. To represent large numbers in a more compact way,
                computers use a numbering system called hexadecimal. You can
                tell that this is a hexadecimal number because the address
                begins with <span className="code">0x</span> at the front, and
                among the numbers you will also find the letters A-F.
                You&apos;ll learn more about this in a later class!
              </p>
            </Note>
          </div>

          <NavButtons page={6}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson3;
