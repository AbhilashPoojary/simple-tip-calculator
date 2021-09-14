import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import CardLeft from "./components/CardLeft";
import CardRight from "./components/CardRight";
import logo from "./images/logo.svg";

function App() {
  const makenodigits1 = parseInt(0).toFixed(2);
  const makenodigits2 = parseInt(0).toFixed(2);
  const [value, setValue] = useState({
    bill: 0,
    tip: 0,
    people: 0,
    tipamt: makenodigits1,
    totaltipamt: makenodigits2,
    danger: true,
    reset: false,
  });
  const [click, setClick] = useState({ active: "" });
  // const checkValue = value.bill > 0 && value.tip > 0 && value.people > 0;
  // const [custom, setCustom] = useState(!checkValue);
  // console.log(checkValue, custom);
  const onchangeBill = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onselectTip = (e) => {
    const name = e.target.getAttribute("name");
    const val = e.target.getAttribute("value");
    setValue({
      ...value,
      [name]: e.target.value,
    });

    if (click.active === val) {
      setClick({ active: val });
    } else {
      setClick({ active: val });
    }
    document.getElementById("tip").value = "";
  };

  const onchangeCustom = (e) => {
    const name = e.target.getAttribute("name");
    setValue({
      ...value,
      [name]: e.target.value,
    });
    setClick({
      active: "",
    });
  };

  const onaddPeople = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      danger: false,
    });
  };
  useEffect(() => {
    if (value.people > 0 && value.tip && value.bill) {
      const tipAmount = ((value.bill * value.tip) / 100 / value.people).toFixed(
        2
      );
      const fullTipAmount = (value.bill * value.tip) / 100;
      const total = parseFloat(
        (parseInt(value.bill) + parseInt(fullTipAmount)) / value.people
      ).toFixed(2);
      setValue({
        ...value,
        tipamt: tipAmount,
        totaltipamt: total,
      });
      console.log(parseInt(value.bill) + parseInt(fullTipAmount));
    }
    if (!value.danger) {
      if (value.people <= 0) {
        document.getElementById("number").classList.add("input-danger");
        document.getElementById("err").classList.add("span-danger");
      }
      if (value.people > 0) {
        document.getElementById("number").classList.remove("input-danger");
        document.getElementById("err").classList.remove("span-danger");
      }
    }
    if (value.tipamt <= 0) {
      document.getElementById("resetbtn").setAttribute("disabled", "");
    }
    if (value.tipamt > 0) {
      document.getElementById("resetbtn").removeAttribute("disabled");
    }
  }, [value.people, value.bill, value.tip, value.danger, value.tipamt]);

  const onReset = () => {
    setValue({
      bill: 0,
      tip: 0,
      people: 0,
      tipamt: makenodigits1,
      totaltipamt: makenodigits2,
      reset: true,
    });
    document.getElementById("tip").value = "";
    setClick({ active: "" });
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='card'>
          <div className='card-wrapper'>
            <CardLeft
              value={value}
              onchangeBill={onchangeBill}
              onaddPeople={onaddPeople}
              onselectTip={onselectTip}
              onchangeCustom={onchangeCustom}
              click={click}
              setClick={setClick}
            />
            <CardRight value={value} onReset={onReset} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
