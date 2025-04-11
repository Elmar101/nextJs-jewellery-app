'use client';
import { useState } from 'react';
import ExampleServerComponent from '../servercomponent/ExampleServerComponent ';

export default function ExampleClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p> {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {' '}
        clic+{' '}
      </button>

      <ExampleServerComponent />
    </>
  );
}
