import React from "react";
// import { counter } from '../redux/Store'
import { RootState } from "../redux/Store";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,incrementByAmount } from "../redux/Counter";
import styled from "styled-components";
import { useState } from "react";

export function CounterCom() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [inputNum, setinputNum] = useState(0)

  return (
    <Container>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <input type="number" id="inputNum"  value={inputNum} />
      <div>THE CONT IS {count}</div>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Increment by number"
        onClick={() => dispatch(incrementByAmount(33))}
      >
        incrementByAmount
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-color: transparent;
  color: #0ccda1;
  /* background-image: url("/flare.jpg"); */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;

  /* align-content: flex-start; */
  button {
    height: 30px;
  }
`;
