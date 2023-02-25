import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';

const Lesson3: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_3}>
        <div className='page-wrapper'>
          <h1>Assigning a Value to Pointers</h1>
          <p>
            Great! Now we know how to declare a pointer variable. But how do we give
            it a value?
          </p>
          <p>
            Well, we know that we want our pointer variable to store the address of
            another variable. There is a special operation that we can use to ask
            C++ to fetch the address of any variable:
          </p>
          <div className="diagram">terminal 1</div>
          <p>
            To use this operator, we just put it in front of any variable that we
            have created:
          </p>
          <div className="diagram">terminal 2</div>
          <p>
            If you put & in front of any variable, it will return the memory address
            of that variable. And now that it has returned a value, you can treat it
            just like any other value by assigning it to a variable. You can assign
            this address value to a pointer variable like this:
          </p>
          <div className="diagram">terminal 3</div>
          <p>
            In the above code, myPointer will now store the address of myVariable:
          </p>
          <div className="diagram">pointer animation</div>
          <p>
            The & operator gives you the address of any variable you&apos;ve
            created. In our warehouse, it&apos;s like Pipi asking you for the
            address of the box he wants to go to. Or it&apos;s like searching on
            Google for the address of a restaurant you want to go to.
          </p>
          <h2>Note</h2>
          <p>
            If you try to print out the value of a memory address using cout, you
            might see that the value looks something like 0x7ffde45c9a54
          </p>
          <p>
            Don&apos;t be alarmed by this - this is an actual memory address in your
            computer! Since your computer&apos;s memory is huge, the addresses get
            to be very large numbers, and these numbers can be really long. To
            represent large numbers in a more compact way, computers use a numbering
            system called hexadecimal. You can tell that this is a hexadecimal
            number because the address begins with 0x at the front, and among the
            numbers you will also find the letters a-f. You&apos;ll learn more about
            this in a later class!
          </p>
          <NavButtons page={5}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson3;
