import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserhandler = (uName, uAge) => {
    setUserList((prev) => {
      return [
        ...prev,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserhandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
