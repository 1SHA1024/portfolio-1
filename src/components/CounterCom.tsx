import React from "react";
// import { counter } from '../redux/Store'
import { RootState } from "../redux/Store";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/Counter";
import styled from "styled-components";

export function CounterCom() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Container>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <div>{count}</div>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  color: #0ccda1;
  /* background-image: url("/svg/land.svg"); */
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;

  /* align-content: flex-start; */
  button {
    height: 30px;
  }
`;
