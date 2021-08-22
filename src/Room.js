import React from 'react';
import react, {useState} from 'react';
import './Room.css';
function Room() {
  
    const [isLit, setLit] = useState(true); /*useState returns array which has 'isLit' as variable
     and 'setLit' as function which can be used to change a state
     value in "useState" can only be changed by function provided in it */
     
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
      //on below line, checking if room is Lit or dark and then display value in 'isLit'.

      //<button onClick={updateLit} >toggle click</button>....{updateLit} is being passed so it calls when u click the button only

    <div className={`room ${isLit? "lit":"dark"}`}>This room is {isLit? "Lit":"dark"} 
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

export default Room; //exporting this Room component
