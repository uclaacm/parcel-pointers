import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';

const Home: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.DEFAULT_SECTION}>
        Your content here! 🥔
      </AppWrapper>
    </div>
  );
};

export default Home;
