import { FC } from 'react';
import PipiBox from '../../public/PipiBox.png';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson1.scss';
import '../styles/Lesson.scss';

const Lesson1: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_1}>
        <div className='lesson'>
          <h1>What are Memory Addresses?</h1>
          <p>
            As you can see from the example, our warehouse had a bunch of
            labeled shelves, and there were some boxes on each of the shelves.
            Our helpful little robot friend was tasked with finding a particular
            box to visit. But how did he know where to find the box he needed?
            Well luckily for him, he has you to count on! You could see the box
            he needed to go to, and you told him the address he needed to visit
            if he wanted to find his box. That&apos;s why it was really
            important to label our shelves with addresses - it made it much
            easier for PiPi to know where to go. It&apos;s the same reason why
            houses have addresses - an address gives you an easy way of
            describing where something is located, so you can find it more
            easily. It would be much harder to find your friend&apos;s house if
            you didn&apos;t know what their address was! For the same reasons,
            the memory in your computer is also labeled with addresses.
          </p>
          <div className="diagram">
            <img src={PipiBox} className="pipi"></img>
          </div>
          <p>
            Every time your program creates a variable, it places the variable
            somewhere in memory, and keeps track of the address so it can find
            the variable again the next time you need to use it. This is all
            automatically done for you by your computer, and you don&apos;t need
            to worry about it - every time you use a variable name in your
            program, your computer will know where to find that variable in
            memory, and it will get the value of that variable for you so you
            can use it. Sometimes though, we care about where a particular
            variable is stored in memory, and we want a way of keeping track of
            that. This is where pointers come in!
          </p>
          <NavButtons page={3} />
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson1;
