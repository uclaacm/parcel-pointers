import EastIcon from '@mui/icons-material/East';
import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson2.scss';
import '../styles/PageWrapper.scss';

interface TypeDiagramProps {
  first: string;
  second: string;
}

function TypeDiagram(props: TypeDiagramProps): JSX.Element {
  return (
    <>
      <span className="type-diagram">
        <h2 style={{ paddingTop: '0' }}>{props.first}</h2>
        <EastIcon fontSize="large" />
        <h2 className="type-diagram-boxed" style={{ paddingTop: '12px' }}>
          {props.second}
        </h2>
      </span>
    </>
  );
}

const Lesson2_1: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_2}>
        <div className="page-wrapper">
          <h1>Introducing Pointers</h1>
          <p>
            In our example, Pipi wanted to go to a box but they didn&apos;t know
            where to find it. You passed along a piece of paper with a helpful
            little note on it, telling Pipi the address of the box they were
            looking for. This is basically what a pointer does! A pointer is a
            variable that stores a memory address.
          </p>
          <p>
            In C++, you&apos;ve learned that there are different types of
            variables, which are basically just containers for storing a
            particular kind of value. An <span className="code">int</span>{' '}
            variable can store an integer, a <span className="code">char</span>{' '}
            variable can store a character, a <span className="code">bool</span>{' '}
            can store true/false, etc.
          </p>
          <div className="diagram">
            <span className="type-diagram-container">
              <TypeDiagram first="int" second="integer" />
              <TypeDiagram first="char" second="character" />
              <TypeDiagram first="bool" second="boolean" />
            </span>
          </div>
          <p>
            A pointer variable, like all other variables, is also just a
            container that stores a particular value. A pointer is special
            though because it stores memory addresses - in particular, we use it
            to store the memory address of another variable.
          </p>
          <div className="diagram">
            <span className="type-diagram-container">
              <TypeDiagram first="pointer" second="memory address" />
            </span>
          </div>
          <p>
            If we create an <span className="code">int</span> variable, we know
            that this value gets stored at a particular address somewhere in
            memory. Sometimes it is useful for us to know where in memory this
            is - and so to keep track of this address, we can just get this
            address and store it in our pointer variable!
          </p>
          <NavButtons page={4}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson2_1;
