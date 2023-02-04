import { FC } from 'react';
import NavButtons from '../components/NavButtons';

const Lesson2: FC = () => {
  return (
    <>
      <h1>Lesson 2</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        lacus at consequat rutrum.
      </p>
      <NavButtons page={3}></NavButtons>
    </>
  );
};

export default Lesson2;
