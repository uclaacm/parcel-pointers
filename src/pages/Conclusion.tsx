import { FC } from 'react';
import '../styles/Conclusion.scss';
import { Link } from 'react-router-dom';
import ConclusionDiagram from '../../public/ConclusionDiagram.svg';
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
            Congratulations on finishing our learning lab! We have covered a lot
            of topics in this learning lab! Our best advice for really
            solidifying your understanding of pointers is to try them out
            yourself. For any of our code snippets throughout the exercises, we
            have provided a copy to clipboard button so that you can try them
            out yourself! If you don&apos;t have a C++ compiler installed, you
            can use this{' '}
            <Link to="https://www.programiz.com/cpp-programming/online-compiler/">
              online one instead
            </Link>
            , and it will compile and run the code for you!
          </p>

          <div className="exercise-1-diagram diagram">
            <img src={ConclusionDiagram} alt="Diagram" />
          </div>

          <div className="conclusion-footer ">
            made with &lt;3 by{' '}
            <Link to="https://teachla.uclaacm.com/">ACM Teach LA&apos;s</Link>{' '}
            dev team
          </div>
        </div>
      </AppWrapper>
      <NavButtons page={20} noNext={true}></NavButtons>
    </>
  );
};

export default Conclusion;
