import React, { useState } from 'react';

//Hooks <= 미끼.

function Index() {
  const [button1Score, setButton1Score] = useState(10);
  const [button2Score, setButton2Score] = useState(20);
  // let button1Score = 10;
  // let button2Score = 20;

  const button1plus = () => {
    console.log('buttom 1+ pressed');
    setButton1Score(button1Score + 1);
  }

  const button1minus = () => {
    console.log('buttom 1- pressed');
    setButton1Score(button1Score - 1);
    // button1Score = button1Score - 1;
  }

  const button2plus = () => {
    console.log('buttom 2+ pressed');
    setButton2Score(button2Score + 1);
  }

  const button2minus = () => {
    console.log('buttom 2- pressed');
    setButton2Score(button2Score - 1);
  }

  return (
    <div>
      <div>버튼 1 점수 : {button1Score} </div>
      <button onClick={button1plus}> 버튼 1 + </button>
      <button onClick={button1minus}> 버튼 1 - </button>
      <div>버튼 2 점수 : {button2Score}</div>
      <button onClick={button2plus}> 버튼 2 +</button>
      <button onClick={button2minus}> 버튼 2 -</button>
    </div>
  )
}

export default Index;