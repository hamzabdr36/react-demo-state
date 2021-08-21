import React from 'react';
import react, {useState} from 'react';
function Room() {
  
    const [isLit, setLit] = useState(true);
    let [age, setage] = useState(23);

    function updateLit(){
            console.log("clicked");
            setLit(!isLit);
    }
    // ******** NEW FUNCTION STYLE ********
    // const updateAge =()=>{
    //     console.log("age-clicked");
    //     setage(++age);
    // }
  

  return (
    <div>This room is {isLit? "Lit":"dark"}
    <br/>
         age is {age}
    <br/>  
    <button onClick={updateLit} >toggle click</button>

    <button onClick={()=>{               //function updateAge is used in event
        console.log("age-clicked");
        setage(++age);
    }}> update age</button>

    </div>
  );
}

export default Room;
