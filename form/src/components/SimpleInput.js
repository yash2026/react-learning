import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNametouched, setEnteredNameTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== "";
  const nameInputInvalid = !enteredNameValid && enteredNametouched;

  useEffect(() => {
    if (enteredNameValid) {
      console.log("Yash is great");
    }
  }, [enteredNameValid]);
  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
  };
  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputInvalid && (
          <p className="error-text">Please Enter the values in the inputs</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
