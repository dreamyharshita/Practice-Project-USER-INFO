import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const[userList,setUserList]=useState([]);
 
  const AdduserHandler=(uName,uAge,uCollege)=> {
    setUserList((prevList)=> {
return [...prevList,{ name: uName, age: uAge, college: uCollege, id:Math.random().toString()}]

});
    

  }
 
  
  return (
    <div>
<AddUser onAddUser={AdduserHandler}></AddUser>
<UserList users={userList} ></UserList>
    </div>
  );
}

export default App;
