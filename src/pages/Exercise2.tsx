import RunCode from '../components/RunCode';

// questions: Array<{
//   options: string[];
//   answer: string;
//   correctText: string;
//   wrongText: string;
// }>;

const questions = [
  {
    options: [
      'Basketball **basketballPtrPtr = basketballPtr;',
      'Basketball **basketballPtrPtr = &basketballPtr;',
      'Basketball *basketballPtrPtr = *basketballPtr;',
      'Basketball *basketballPtrPtr = basketballPtr;',
    ],
    answer: 'Basketball **basketballPtrPtr = basketballPtr;',
    correctText: 'Correct!',
    wrongText: 'Not quite.',
  },
];

const Exercise2: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <RunCode
        questions={questions}
        displayText={'"string x = "basketball";'}
      />
    </div>
  );
};

export default Exercise2;
