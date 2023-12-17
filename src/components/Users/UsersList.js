import React from "react";
import Card from "../UI/Card";
import './UserList.css';

const UserList= props=>{
    return (
        <Card>
       < div className="users">
    <ul>
        {props.users.map(user => 
        
        <li key={user.id} >
            {user.name} 
            is {user.age} years old
        </li>
      )

        }
    </ul>
    </div>
    </Card>
    );
}
export default UserList;