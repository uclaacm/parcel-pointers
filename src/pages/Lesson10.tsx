import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';

const Lesson10: FC = () => {
  const code1 = `
    class Node
    {
        int value;
        Node* next;
        Node(int val){value = val;}
    };
    `;

  const code2 = `
    Node* newNode = new Node(1); //make new node with
    cout << newNode ->value << endl; //prints 1
    `;

  const code3 = `
    vector<Node*> nodes; // vector of node pointers
    nodes.push_back(newNode); // add node pointer to vector
    cout << nodes[0]->value; // prints 1
    `;

  const pointerArrow = '->';

  return (
    <>
      <AppWrapper section={HeaderSections.LESSON_10}>
        <div className="page-wrapper">
          <h1>Dynamic Memory Allocation</h1>
          <p>
            Let’s take a look at another common application of pointers: dynamic
            memory allocation
          </p>
          <p>
            Dynamic memory allocation is the process of creating new objects on
            the heap dynamically based on the needs of the application instead
            of on the stack like normal objects. The difference between stack
            and heap is out of scope and unimportant for this learning lab, but
            basically they are just different parts of memory.
          </p>
          <p>
            Why would we want to dynamically create objects instead of creating
            them normally? This is because we cannot put objects into a data
            structure like an array or linked list, but we can put pointers to
            those objects in these data structures. Dynamic memory allocation
            enables this, especially with a dynamically sized data structure
            like a vector or linked list.
          </p>
          <p>
            So how do we dynamically allocate objects? In C++ we use the{' '}
            <span className="code">new</span> keyword. Consider our Node class
            from the linked list.
          </p>

          <div className="diagram">
            <Terminal code={code1} />
          </div>

          <p>We can dynamically allocate a new Node like this:</p>

          <div className="diagram">
            <Terminal code={code2} />
          </div>

          <p>
            Notice the <span className="code">{pointerArrow}</span>notation -
            this is syntactic sugar for *(newNode).value. We use the{' '}
            <span className="code">{pointerArrow}</span> notation when we want
            to access an object’s members through a pointer.
          </p>

          <p>Then we can add it to a vector like this:</p>

          <div className="diagram">
            <Terminal code={code3} />
          </div>

          <p>
            Dynamic memory has many applications! We encourage you to try using
            this in your own applications! Now, you know everything you need to
            complete the exercises!
          </p>
          <NavButtons page={13}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Lesson10;
