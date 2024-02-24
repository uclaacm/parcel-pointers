import { FC } from 'react';
import '../styles/Exercise6.scss';
import exercise6diagram1 from '../../public/Exercise6Diagram1.svg';
import exercise6diagram2 from '../../public/Exercise6Diagram2.svg';
import exercise6diagram3 from '../../public/Exercise6Diagram3.svg';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import RunCode from '../components/RunCode';
import { HeaderSections } from '../types/globalTypes';

const question = [
  {
    options: [
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
    ],
    answer:
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
    correctText:
      'Correct! Let’s go through this line by line. The first line creates a new node and assigns head to point to it. The second line creates a second node and assigns the head node’s next pointer to point to it. The third line assigns tail to point at the second node, since it copies the head node’s next pointer. The fourth line actually simplifies to tail->prev = *head, since from the third line we know tail = head->next, it assigns the previous pointer of the tail node to point back to the head node.',
    wrongText: 'Not quite',
  },
];
const code1 = `Node* head; // head Node, assume Node class is defined
Node* tail; // tail Node
`;

const Exercise6: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.EXERCISE_6}>
        <div className="page-wrapper">
          <h1>Exercise 6: Linking Objects with Pointers</h1>
          <p>
            For this exercise, you will be linking your knowledge of pointers
            together with linked lists and dynamic memory allocation to come up
            with ways to solve problems of creation, insertion, and deletion of
            pointer-linked data structures, like the ones we showed at the
            beginning of the learning lab!
          </p>
          <p>
            Pipi first wants to create a doubly linked list of 2 boxes, each of
            which have some content and a note to the next and previous box. Of
            course, Pipi already has a head pointer that points to where they
            can start the linked list.
          </p>
          <div className="exercise6-diagram">
            <img src={exercise6diagram1} alt="Exercise 6 Diagram 1" />
          </div>
          <h2>Which code segment correctly starts the linked list?</h2>
          <RunCode questions={question} displayText={code1} />
          <p>
            Pipi now understands how to create a linked list, but they want to
            insert a new box into the middle of the linked list between the 2
            boxes!
          </p>
          <div className="exercise6-diagram">
            <img src={exercise6diagram2} alt="Exercise 6 Diagram 2" />
          </div>
          <h2>
            Which code segment correctly inserts a box into the linked list?
          </h2>
          <RunCode
            questions={question}
            displayText={'Which code segment correctly starts the linked list?'}
          />
          <p>Oh no, the box that Pipi added was actually a dud!</p>
          <div className="exercise6-diagram">
            <img src={exercise6diagram3} alt="Exercise 6 Diagram 3" />
          </div>
          <h2>
            How can we undo this insertion and delete this newly added box?
          </h2>
          <RunCode
            questions={question}
            displayText={'Which code segment correctly starts the linked list?'}
          />
          <p>
            We are all done now! Pipi is done playing with these linked boxes
            and wants to clean them up! How can we iteratively go through all
            these boxes and delete them? (Hint: We need to make sure to clean
            them up in a way that still allows us to find the next box even
            after we delete the current box!)
          </p>
          <h2>Which code segment correctly deletes the entire linked list?</h2>
          <RunCode
            questions={question}
            displayText={'Which code segment correctly starts the linked list?'}
          />
          <p>
            It is important to note that the exercise of creation, insertion,
            and deletion of the linked list that we did here will have very
            similar implementations in other pointer-based data structures!
          </p>
        </div>
      </AppWrapper>
      <NavButtons page={17}></NavButtons>
    </>
  );
};

export default Exercise6;
