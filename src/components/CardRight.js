import React from "react";

export default function CardRight({ value, onReset }) {
  return (
    <div className='right'>
      <div className='right-wrap'>
        <div className='amount'>
          <p>Tip Amount</p>
          <h3>$ {value?.tipamt}</h3>
        </div>
        <div className='total'>
          <p>Total</p>
          <h3>$ {value?.totaltipamt}</h3>
        </div>
      </div>
      <button
        className='btn btn-primary card-btn'
        onClick={onReset}
        id='resetbtn'
      >
        RESET
      </button>
    </div>
  );
}
