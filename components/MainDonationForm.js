import React from 'react';
import { useRouter } from 'next/router';

export default function MainDonationForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let succeed = true;
    
    if (event.target.amount.value == 0) {
      alert('Please choose an amount to give');
      succeed = false;
    }

    if (succeed) {
      const causes = event.target.cause;
      const validCause = [];
      for (let i = 0; i < causes.length; i++) {
        if (causes[i].checked) {
          validCause.push(' ' + causes[i].defaultValue);
        }
      }
      
      const response = await fetch('/api/create-stripe-session', {
        body: JSON.stringify({
          amount: event.target.amount.value * 100,
          cause: validCause,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const result = await response.json();
      router.push(result.url);
    }
  };

  // isAnyoneInNeedToggled = stores the state of the "Anyone in need" toggle
  const [isAnyoneInNeedToggled, setIsAnyoneInNeedToggled] = React.useState(true);

  // mainForm is the topmost form that is shown to the user
  const mainForm = React.createRef();

  // handleClick is called via the onClick event when the user clicks 
  // on the "Anyone in need" toggle switch
  const handleClick = () => {
    setIsAnyoneInNeedToggled(!isAnyoneInNeedToggled);

    // If the "Anyone in need" toggle is on, we need to uncheck all the 
    // checkboxes in the cause list
    if (isAnyoneInNeedToggled) {
      const form = mainForm.current;

      // Loop through all the checkboxes in the cause list and uncheck them
      const inputs = form.getElementsByClassName('donate-form-checkbox');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={mainForm}>
      <div className="p-6 mb-5 card bordered bg-base-100" data-theme="dark">
        <h2 className="card-title">{'Help us develop programs for:'}</h2>

        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">{'Anyone in need'}</span>
            <input
              type="checkbox"
              name="cause"
              className="toggle"
              value="Anyone in need"
              onClick={handleClick}
              autoComplete="off"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">{'Students in Need'}</span>
            <input
              type="checkbox"
              name="cause"
              className="checkbox donate-form-checkbox"
              value="Students in Need"

              // Prevents the browser from using cached checkbox states.
              // The use of cached values caused interaction issues that were
              // unintended.
              autoComplete="off"

              // If the "Anyone in need" toggle is on, we need to uncheck all the
              // checkboxes in the cause list, such as this one
              disabled={!isAnyoneInNeedToggled}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">{'People of Color in Need'}</span>
            <input
              type="checkbox"
              name="cause"
              className="checkbox donate-form-checkbox"
              value="People of Color in Need"
              disabled={!isAnyoneInNeedToggled}
              autoComplete="off"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">{'Immigrants in Need'}</span>
            <input
              type="checkbox"
              name="cause"
              className="checkbox donate-form-checkbox"
              value="Immigrants in Need"
              disabled={!isAnyoneInNeedToggled}
              autoComplete="off"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">{'Seniors in Need'}</span>
            <input
              type="checkbox"
              name="cause"
              className="checkbox donate-form-checkbox"
              value="Seniors in Need"
              disabled={!isAnyoneInNeedToggled}
              autoComplete="off"
            />
          </label>
        </div>

        <select
          name="amount"
          className="select select-bordered select-info w-full max-w-xs text-white-700"
        >
          <option value="0" disabled="disabled" selected="selected">
            {'Choose your donation amount'}
          </option>
          <option value="5">{'$5'}</option>
          <option value="25">{'$25'}</option>
          <option value="50">{'$50'}</option>
          <option value="75">{'$75'}</option>
          <option value="125">{'$125'}</option>
          <option value="250">{'$250'}</option>
          <option value="500">{'$500'}</option>
          <option value="1000">{'$1,000'}</option>
          <option value="5000">{'$5,000'}</option>
          <option value="10000">{'$10,000'}</option>
          <option value="25000">{'$25,000'}</option>
        </select>

        <div className="divider" />

        {/* <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Monthly Recurring?</span> 
            <input type="checkbox" name="recurring" className="checkbox checkbox-primary"></input>
          </label>
        </div>   */}

        <button className="btn btn-primary">
          {'Donate'}
        </button>
      </div>
    </form>
  );
}
