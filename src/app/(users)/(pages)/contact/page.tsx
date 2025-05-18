'use client';

import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '@/redux-store/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux-store/store';

const ContactPage = () => {
  const count = useAppSelector(store => store.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br /> <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br /> <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <br /> <br />
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default ContactPage;
