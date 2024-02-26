import { FC } from 'react';
import '../styles/Exercise6.scss';
import exercise6diagram1 from '../../public/Exercise6Diagram1.svg';
import exercise6diagram2 from '../../public/Exercise6Diagram2.svg';
import exercise6diagram3 from '../../public/Exercise6Diagram3.svg';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import RunCode from '../components/RunCode';
import { HeaderSections } from '../types/globalTypes';

const question1 = [
  {
    options: [
      '*head = new Node();\n*(head->next) = new Node();\n*(head->next->prev) = *head;\ntail = *head->next;',
      'head = new Node();\ntail = new Node();\nhead->next = *head;\ntail->next = *head;',
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
      'head = new Node();\nhead-> next = new Node();\ntail = head->next;\nhead->next->prev = head;',
    ],
    answer:
      'head = new Node();\nhead-> next = new Node();\ntail = head->next;\nhead->next->prev = head;',
    answerText: new Map([
      [
        '*head = new Node();\n*(head->next) = new Node();\n*(head->next->prev) = *head;\ntail = *head->next;',
        'Not quite, remember that the new keyword gives us a pointer, not an object',
      ],
      [
        'head = new Node();\ntail = new Node();\nhead->next = *head;\ntail->next = *head;',
        'Not quite, the tail-> next = *head would circle back to the head node and we are not trying to create a circular linked list',
      ],
      [
        'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
        'Not quite, head->next = head would make the head node’s next pointer point to itself',
      ],
      [
        'head = new Node();\nhead-> next = new Node();\ntail = head->next;\nhead->next->prev = head;',
        'Correct! Let’s go through this line by line. The first line creates a new node and assigns head to point to it. The second line creates a second node and assigns the head node’s next pointer to point to it. The third line assigns tail to point at the second node, since it copies the head node’s next pointer. The fourth line actually simplifies to tail->prev = *head, since from the third line we know tail = head->next, it assigns the previous pointer of the tail node to point back to the head node.',
      ],
    ]),
  },
];
const question2 = [
  {
    options: [
      'head->next = newNode;\nnewNode->next =  head->next;\nnewNode->prev = head;\ntail->prev = newNode;',
      'Node* temp = head->next;\nhead ->next = newNode;\nnewNode->next = temp;\nnewNode->prev = head;\ntemp->prev = newNode;',
      'Node* temp = head->next;\nhead ->next = newNode;\nnewNode->next = temp;\nnewNode->prev = head;',
      'Node* temp = head->next;\nhead ->next = newNode;\nnewNode->prev = tail;\nnewNode->next = temp;\ntemp->prev = newNode;',
    ],
    answer:
      'Node* temp = head->next;\nhead ->next = newNode;\nnewNode->next = temp;\nnewNode->prev = head;\ntemp->prev = newNode;',
    answerText: new Map([
      [
        'head->next = newNode;\nnewNode->next =  head->next;\nnewNode->prev = head;\ntail->prev = newNode;',
        'Not quite, the newNode->next pointer here is incorrect since it is set to head->next, which equals newNode.',
      ],
      [
        'Node* temp = head->next;\nhead ->next = newNode;\nnewNode->next = temp;\nnewNode->prev = head;\ntemp->prev = newNode;',
        'Correct! Note that just 4 pointers need to be changed to insert an element in a linked list of any size!',
      ],
      [
        'Node* temp = head->next;\nhead ->next = newNode;\nnewNode->next = temp;\nnewNode->prev = head;',
        'Not quite, the prev pointer on the tail node is still set to the head node instead of the new node.',
      ],
      [
        'Node* temp = head->next;\nhead ->next = newNode;\nnewNode->prev = tail;\nnewNode->next = temp;\ntemp->prev = newNode;',
        'Not quite, the prev pointer of the new node is set to tail instead of head.',
      ],
    ]),
  },
];
const question3 = [
  {
    options: [
      'delete nodeToDelete;',
      'delete nodeToDelete;\nnodeToDelete->next->prev = nodeToDelete->prev;\nnodeToDelete->prev->next = nodeToDelete->next;',
      'nodeToDelete->next->prev=nodeToDelete->prev;\nnodeToDelete->prev->next = nodeToDelete->next;\ndelete nodeToDelete;',
      'nodeToDelete->next->prev=nodeToDelete->next;\nnodeToDelete->prev->next = nodeToDelete->prev;\ndelete nodeToDelete;',
    ],
    answer:
      'nodeToDelete->next->prev=nodeToDelete->prev;\nnodeToDelete->prev->next = nodeToDelete->next;\ndelete nodeToDelete;',
    answerText: new Map([
      [
        'delete nodeToDelete;',
        'Not quite, the head->next and tail->prev pointers still point to the node after deletion which could lead to use after free errors.',
      ],
      [
        'delete nodeToDelete;\nnodeToDelete->next->prev = nodeToDelete->prev;\nnodeToDelete->prev->next = nodeToDelete->next;',
        'Not quite, we delete nodeToDelete before referencing it, which is a use after free error.',
      ],
      [
        'nodeToDelete->next->prev=nodeToDelete->prev;\nnodeToDelete->prev->next = nodeToDelete->next;\ndelete nodeToDelete;',
        'Correct! This sets the next node’s previous pointer to point to the deleted node’s previous pointer and the previous node’s next pointer to point to the deleted node’s next pointer.',
      ],
      [
        'nodeToDelete->next->prev=nodeToDelete->next;\nnodeToDelete->prev->next = nodeToDelete->prev;\ndelete nodeToDelete;',
        'Not quite, the prev pointer of the next node is set to point to itself and the next pointer of the previous node is set to point to itself.',
      ],
    ]),
  },
];
const question4 = [
  {
    options: [
      'for(Node* ptr = head; ptr != nullptr; ptr = ptr->next)\n{\n  delete ptr;\n}',
      'delete head;\nfor(Node* ptr = head->next; ptr != nullptr; ptr = ptr->next)\n{\n  delete ptr;\n}',
      'for(Node* ptr = head; ptr != nullptr; ptr++)\n{\n  delete ptr;\n}',
      'for(Node* ptr = head; ptr != nullptr;)\n{\n  Node* temp = ptr->next;\n  delete ptr;\n  ptr = temp;\n}',
    ],
    answer:
      'for(Node* ptr = head; ptr != nullptr;)\n{\n  Node* temp = ptr->next;\n  delete ptr;\n  ptr = temp;\n}',
    answerText: new Map([
      [
        'for(Node* ptr = head; ptr != nullptr; ptr = ptr->next)\n{\n  delete ptr;\n}',
        'Not quite, if we just take the first two iterations, we delete the head node, then we dereference the head pointer to the head node to get the next pointer and then delete that. This is a problem because we access the deleted head node, which is undefined behavior.',
      ],
      [
        'delete head;\nfor(Node* ptr = head->next; ptr != nullptr; ptr = ptr->next)\n{\n  delete ptr;\n}',
        'Not quite, since we deleted the head node already, referencing head->next dereferences the head pointer to the head node and is undefined behavior.',
      ],
      [
        'for(Node* ptr = head; ptr != nullptr; ptr++)\n{\n  delete ptr;\n}',
        'Not quite, Doing ptr++ to advance to the next element is a good way to iterate through an array since it is contiguous in memory, but linked lists are not.',
      ],
      [
        'for(Node* ptr = head; ptr != nullptr;)\n{\n  Node* temp = ptr->next;\n  delete ptr;\n  ptr = temp;\n}',
        'Correct! In general, we can use this type of for loop to iterate through a linked list. In this case, we save a copy of our next pointer before we delete the node, so we know which box to go to next. This is like writing down the contents of the box before throwing the box away. The delete operation will then delete the current node and then we can update our pointer to look at the next node.',
      ],
    ]),
  },
];

const code1 = `Node* head; // head Node, assume Node class is defined
Node* tail; // tail Node
`;
const code2 = 'Node* newNode = new Node(); // create new node';
const code3 =
  'Node* nodeToDelete = head ->next; // pointer to the node we want to delete';

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
          <div className="exercise6-div">
            <RunCode questions={question1} displayText={code1} />
          </div>
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
          <div className="exercise6-div">
            <RunCode questions={question2} displayText={code2} />
          </div>
          <p>Oh no, the box that Pipi added was actually a dud!</p>
          <div className="exercise6-diagram">
            <img src={exercise6diagram3} alt="Exercise 6 Diagram 3" />
          </div>
          <h2>
            How can we undo this insertion and delete this newly added box?
          </h2>
          <div className="exercise6-div">
            <RunCode questions={question3} displayText={code3} />
          </div>
          <p>
            We are all done now! Pipi is done playing with these linked boxes
            and wants to clean them up! How can we iteratively go through all
            these boxes and delete them? (Hint: We need to make sure to clean
            them up in a way that still allows us to find the next box even
            after we delete the current box!)
          </p>
          <h2>Which code segment correctly deletes the entire linked list?</h2>
          <div className="exercise6-div">
            <RunCode questions={question4} displayText={''} />
          </div>
          <p>
            It is important to note that the exercise of creation, insertion,
            and deletion of the linked list that we did here will have very
            similar implementations in other pointer-based data structures!
          </p>
        </div>
      </AppWrapper>
      <NavButtons page={19}></NavButtons>
    </>
  );
};

export default Exercise6;
