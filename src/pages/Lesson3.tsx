import { FC } from 'react';
import NavButtons from '../components/NavButtons';

const Lesson3: FC = () => {
  return (
    <>
      <h1>Lesson 3</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        lacus at consequat rutrum.
      </p>
      <NavButtons page={4}></NavButtons>
    </>
  );
};

export default Lesson3;
