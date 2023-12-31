import React,{useState,useRef} from 'react';
import Button from '../UI/Button';
import  './AddUser.css';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrappers';


 const AddUser= props =>{

    const collegeName=useRef();



 const[enteredUserName,setUserName]=useState('');
 const[enteredAge,setAge]=useState('');
 const[error,setError]=useState('')

    const submitHandler=(event)=>{

        event.preventDefault();
        const enteredCollege=collegeName.current.value;
        console.log(enteredCollege);
        if(enteredUserName.trim().length===0 || enteredAge.length===0  || enteredCollege.length===0)
        {
            setError({
                title:'Invalid Input',
                message:'Please enter valid age and name'
            });
            
        }
    else if(+enteredAge<1)
       {
        setError({
            title:'Invalid Age',
            message:'Please enter valid age more than 0'
        });
       
       }
       else{
     props.onAddUser(enteredUserName,enteredAge,enteredCollege);}
     
     collegeName.current.value='';
        
      setAge('');
      setUserName('');
    }
    const userNameHandler=(event)=>{
       
   setUserName(event.target.value);
    }
    const ageHandler=(event)=>{
       
        setAge(event.target.value);
         }
         const errorHandler=()=>{
            console.log("okay clicked")
            setError(null);
         }
    return(
        <Wrapper>
       {error && 
       <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>} 
   <Card className="input">
     
    <form  onSubmit={submitHandler}>
    <label htmlFor='username'>User Name</label><br/>
    <input
     id ="name" 
     type="text"
      value={enteredUserName} 
     onChange={userNameHandler}>
    
     </input>
    <br/><br/>
    <label htmlFor='age'>Age</label><br/>
    <input 
    id="age" 
    type="number" 
    value={enteredAge} 
    onChange={ageHandler}></input>
    <br/><br/>
    <label htmlFor='college'>College Name</label><br/>
    <input
     id ="college" 
     type="text"
     ref={collegeName}
   
      >
    
     </input>
     <br/><br/>
    <Button type="submit"  >Add User</Button>
</form>
</Card>
</Wrapper>
)
 }
 export default AddUser;