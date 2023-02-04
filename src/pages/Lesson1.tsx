import { FC } from 'react';
import NavButtons from '../components/NavButtons';

const Lesson1: FC = () => {
  return (
    <>
      <h1>Lesson 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        lacus at consequat rutrum.
      </p>
      <NavButtons page={2}></NavButtons>
    </>
  );
};

export default Lesson1;
