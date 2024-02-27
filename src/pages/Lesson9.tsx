import { FC } from 'react';
import lesson9pic1 from '../../public/Lesson9Diagram1.svg';
import lesson9pic2 from '../../public/Lesson9Diagram2.svg';
import lesson9pic3 from '../../public/Lesson9Diagram3.svg';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import Note from '../components/Note';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Lesson9.scss';

const Lesson9: FC = () => {
  const code1 = `
    class Node
    {
      int value;
      Node* next;
    };
  `;

  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_9}>
        <div className="page-wrapper">
          <h1>Pointers in Linked Lists</h1>
          <p>
            We are going to take a look at one of the most common applications
            of pointers: linked lists.
          </p>
          <p>
            Linked lists are a string of nodes that each contain a value and a
            pointer to the next node. Generally, they start with a head pointer
            to the first node, then that node points to the next, and so on.
          </p>
          <h2>Simple Implementation of a Node Class</h2>

          <div className="diagram">
            <Terminal code={code1} />
          </div>

          <p>
            We can then chain these nodes together to make a linked list. The
            final node will have a next pointer equal to the nullptr.
          </p>
          <p>
            We can actually represent these nodes as boxes where each box has a
            note to the address of the next box! The final linked list will look
            something like this:
          </p>

          <div className="lesson9-diagram">
            <img src={lesson9pic1} alt="Lesson 1 Diagram 1" />
          </div>

          <p>
            We can also make this a <strong>circularly linked </strong>list by
            making the final next pointer actually point back to the first node.
          </p>

          <div className="lesson9-diagram">
            <img src={lesson9pic2} alt="Lesson 1 Diagram 2" />
          </div>

          <p>
            We have been talking about singly linked lists so far, since we only
            have a pointer that points to the next node, but there are also
            <strong>doubly linked lists</strong>. Doubly linked lists also have
            a pointer that goes backwards through the list. See this example of
            tracing a linked list through the tail pointer, a pointer that
            points to the last node.
          </p>

          <div className="lesson9-diagram">
            <img src={lesson9pic3} alt="Lesson 1 Diagram 3" />
          </div>

          <div className="diagram">
            <Note title="Note: What is nullptr">
              <p>
                <strong>nullptr</strong> in C++ is the{' '}
                <strong>null pointer</strong>. In C++ it actually has a
                different meaning from the <strong>NULL </strong>keyword (which
                is actually equal to 0). It is a keyword that specifically means
                that a pointer does not point to anything, so generally it is
                only used when initializing new pointers. If a nullptr is{' '}
                <strong>dereferenced</strong>, it is{' '}
                <strong>undefined behavior</strong> and most of the time your
                program will hang (never finish execution). It is possible to
                make a pointer <strong>NULL</strong>(basically pointing to
                address 0), but this is undefined behavior as well if the
                pointer is dereferenced.
              </p>
            </Note>
          </div>
          <NavButtons page={12}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson9;
