import { FC} from 'react';
import '../styles/Conclusion.scss';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';


const Conclusion: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.CONCLUSION}>
        <div className="page-wrapper">
          <h1>Conclusion</h1>
          <p>
          Congratulations on finishing our learning lab! We have covered a lot of topics in this learning lab! Our best advice for really solidifying your understanding of pointers is to try them out yourself. For any of our code snippets throughout the exercises, we have provided a copy to clipboard button so that you can try them out yourself! If you don’t have a C++ compiler installed, you can use this online one instead, and it will compile and run the code for you!
        </p>

        <p className="conclusion-footer">
          made with &lt;3 by ACM Teach LA's dev team
        </p>
          
        </div>
      </AppWrapper>
      <NavButtons page={16}></NavButtons>
    </>
  );
};

export default Conclusion;