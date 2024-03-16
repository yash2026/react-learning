import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState();

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "") {
      return;
    }
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
