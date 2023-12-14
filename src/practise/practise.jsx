import { useState } from "react";

            //SIMPLE FORM

function Practise() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [rollNo, setRollNo] = useState("");
  const initialState={
    firstName:"",
    lastName:"",
    rollNo:""
  }
  const[input,setInput]=useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "This form is submitted with values==========>",
      input.firstName,input.lastName,input.rollNo
    );
  };
  useEffect(
    () => console.log(input.firstName,input.lastName,input.rollNo),
    [input.firstName, input.lastName, input.rollNo]
  );
  return (
    <div className="app">
      <form>
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={(e) => setInput({...input,firstName:e.target.value})}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={(e) => setInput({...input,lastName:e.target.value})}
        />
        <br />
        <label>RollNo</label>
        <br />
        <input
          type="text"
          name="rollNo"
          value={input.rollNo}
          onChange={(e) => setInput({...input,rollNo:e.target.value})}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}



export default Practise