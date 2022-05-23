import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import SideBarWrap from '../components/SidebarWrap';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';

const Home: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.DEFAULT_SECTION}>
        <SideBarWrap></SideBarWrap>
      </AppWrapper>
    </div>
  );
};

export default Home;
