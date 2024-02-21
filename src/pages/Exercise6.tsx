import { FC } from 'react';
import '../styles/Exercise6.scss';
import RunCode from '../components/RunCode';

const question = [
  {
    options: [
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
      'head = new Node();\nhead->next = new Node();\nhead->next = head;\ntail = head->next;',
      '*head = new Node();\n*(head->next) = new Node();\n*(head->next->prev) = *head;\ntail = *head->next;',
      'head = new Node();\nhead-> next = new Node();\ntail = head->next;\nhead->next->prev = head;',
    ],
    answer:
      'head = new Node();\nhead-> next = new Node();\ntail = head->next;\nhead->next->prev = head;',
    correctText:
      'Correct! Let’s go through this line by line. The first line creates a new node and assigns head to point to it. The second line creates a second node and assigns the head node’s next pointer to point to it. The third line assigns tail to point at the second node, since it copies the head node’s next pointer. The fourth line actually simplifies to tail->prev = *head, since from the third line we know tail = head->next, it assigns the previous pointer of the tail node to point back to the head node.',
    wrongText: 'Not quite',
  },
];

const Exercise6: FC = () => {
  return (
    <div className="exercise6-div">
      <RunCode
        questions={question}
        displayText={
          'Which code segment correctly starts the linked list?\n Node* head; // head Node, assume Node class is defined\nNode* tail; // tail Node'
        }
      />
    </div>
  );
};

export default Exercise6;
