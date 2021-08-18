import { useRouter } from "next/router";
import React from 'react';

export default function MainDonationForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (+event.target.amount.value === 0) {
      alert("Please choose an amount to give");
      return;
    }

    let selectedCauses = [];
    for (let i = 0; i < causes.length; i++) {
      if (causes[i].isChecked) {
        selectedCauses.push(" " + causes[i].text);
      }
    }
    if (isAnyoneInNeedToggled || causes.length === selectedCauses.length) {
      selectedCauses = [" Anyone in need"];
    }

    if (selectedCauses.length === 0) {
      alert("Please select a cause for donation");
      return;
    }
    
    const response = await fetch("/api/create-stripe-session", {
      body: JSON.stringify({
        amount: event.target.amount.value * 100,
        cause: selectedCauses,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await response.json();
    router.push(result.url);
  };

  // isAnyoneInNeedToggled = stores the state of the "Anyone in need" toggle
  const [isAnyoneInNeedToggled, setIsAnyoneInNeedToggled] = React.useState(true);
  const [causes, setCauses] = React.useState([
    {
      text: "Students in Need",
      isChecked: true,
    },
    {
      text: "People of Color in Need",
      isChecked: true,
    },
    {
      text: "Immigrants in Need",
      isChecked: true,
    },
    {
      text: "Seniors in Need",
      isChecked: true,
    },
  ]);

  // mainForm is the topmost form that is shown to the user
  const mainForm = React.createRef();

  // handleClick is called via the onClick event when the user clicks 
  // on the "Anyone in need" toggle switch
  const handleClick = () => {
    // If the "Anyone in need" toggle is on, we need to uncheck all the 
    // checkboxes in the cause list
    if (!isAnyoneInNeedToggled) {
      const data = causes;

      // Loop through all the checkboxes in the cause list and uncheck them
      for (let i = 0; i < data.length; i++) {
        data[i].isChecked = true;
      }
      setCauses(data);
    }

    setIsAnyoneInNeedToggled(!isAnyoneInNeedToggled);
  };

  return (
    <form onSubmit={handleSubmit} ref={mainForm}>
<div className="p-6 mb-5 card bordered bg-base-100" data-theme="dark">
  <h2 className="card-title">Help us develop programs for:</h2>

  <div className="form-control">
    <label className="cursor-pointer label">
      <span className="label-text">Anyone in need</span>
      <input
        type="checkbox"
        name="cause"
        className="toggle"
        value="Anyone in need"
        onChange={handleClick}
        autoComplete="off"
        checked={isAnyoneInNeedToggled}
      />
    </label>
  </div>

  {
    causes.map((item, index) => {
      return (
        <div className="form-control" key={index} style={isAnyoneInNeedToggled ? {
          display: 'none'
        } : {}}>
          <label className="cursor-pointer label">
            <span className="label-text">{item.text}</span>
            <input
              type="checkbox"
              name="cause"
              className="checkbox donate-form-checkbox"
              value={item.text}
              checked={item.isChecked}
              onChange={() => {
                const data = [...causes];
                if (data[index].isChecked) {
                  setIsAnyoneInNeedToggled(false);
                }
                data[index].isChecked = !data[index].isChecked;
                setCauses(data);
              }}
              // Prevents the browser from using cached checkbox states.
              // The use of cached values caused interaction issues that were
              // unintended.
              autoComplete="off"

              // If the "Anyone in need" toggle is on, we need to uncheck all the
              // checkboxes in the cause list, such as this one
              autoComplete="off"
            />
          </label>
        </div>
      );
    })
  }

  <div style={{marginBottom: '10px'}} />

  <select
    name="amount"
    className="select select-bordered select-info w-full max-w-xs text-white-700"
  >
    <option value="0" disabled="disabled" selected="selected">
      Choose your donation amount
    </option>
    <option value="5">$5</option>
    <option value="25">$25</option>
    <option value="50">$50</option>
    <option value="75">$75</option>
    <option value="125">$125</option>
    <option value="250">$250</option>
    <option value="500">$500</option>
    <option value="1000">$1,000</option>
    <option value="5000">$5,000</option>
    <option value="10000">$10,000</option>
    <option value="25000">$25,000</option>
  </select>

  <div className="divider" />

  {/* <div className="form-control">
    <label className="cursor-pointer label">
      <span className="label-text">Monthly Recurring?</span> 
      <input type="checkbox" name="recurring" className="checkbox checkbox-primary"></input>
    </label>
  </div>   */}

  <button className="btn btn-primary">
    Donate <span />
  </button>
</div>
</form>

  );
}
