import { FC } from 'react';
import PipiBox from '../../public/PipiBox.png';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson1.scss';
import '../styles/PageWrapper.scss';

const Lesson5: FC = () => {
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

            {/*That&apos;s why it was really*/}
            
            
          </p>
          <div className="diagram">
            <img src={PipiBox} className="pipi"></img>
          </div>
          <p>
          In the above code snippet, we start by creating a variable called myVariable, 
          and we give it a value of 3. In the next line, we create a pointer that stores 
          the memory address of myVariable - myPointer now points to myVariable. 

          The third line is where things get interesting. This is basically saying that 
          we go to the value stored at the address in myPointer, and we set that value 
          equal to 5. Just like when we reassign a normal variable to a new value, when 
          we reassign the value stored at a memory address we overwrite the previous 
          value and it now just contains the new value. 

          Click through each line of code to see how the diagram changes
          </p>
          <NavButtons page={8}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson5;
