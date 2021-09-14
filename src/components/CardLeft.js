import React from "react";

export default function CardLeft({
  value,
  onaddPeople,
  onchangeBill,
  onselectTip,
  onchangeCustom,
  click,
}) {
  console.log(click);
  return (
    <div className='left'>
      <div className='form-group'>
        <label>
          Bill
          <input
            className='form-control'
            placeholder='$'
            value={value.bill}
            name='bill'
            onChange={onchangeBill}
          />
        </label>
      </div>
      <div className='tip-section'>
        <p>Select Tip%</p>
        <ul>
          <li
            value='5'
            onClick={onselectTip}
            name='tip'
            className={`${click.active === "5" ? "active" : ""}`}
          >
            5%
          </li>
          <li
            value='10'
            onClick={onselectTip}
            name='tip'
            className={`${click.active === "10" ? "active" : ""}`}
          >
            10%
          </li>
          <li
            value='15'
            onClick={onselectTip}
            name='tip'
            className={`${click.active === "15" ? "active" : ""}`}
          >
            15%
          </li>
          <li
            value='25'
            onClick={onselectTip}
            name='tip'
            className={`${click.active === "25" ? "active" : ""}`}
          >
            25%
          </li>
          <li
            value='50'
            onClick={onselectTip}
            name='tip'
            className={`${click.active === "50" ? "active" : ""}`}
          >
            50%
          </li>
          <input
            className='form-group custom-tip'
            onChange={onchangeCustom}
            name='tip'
            placeholder='Custom'
            id='tip'
          />
        </ul>
      </div>
      <div className='form-group'>
        <label>
          Number of people
          <input
            className='form-control'
            placeholder='$'
            value={value.people}
            name='people'
            onChange={onaddPeople}
            id='number'
          />
          <span className='' id='err' style={{ display: "none" }}>
            Can't be zero
          </span>
        </label>
      </div>
    </div>
  );
}
