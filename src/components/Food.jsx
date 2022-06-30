import React, { useState } from 'react'

export const Food = () => {
    const[noodes, setNoodes] = useState(0);
    const [node, setNode] = useState(0)
    const [biriyani, setBiriyani] = useState(0);
    const [bir, setBir] = useState(0);
    const [chips, setChips] = useState(0);
    const [chip, setChip] = useState(0);

    function handelNooden(){
        setNoodes(noodes-30);
        setNode(node-1);
    }
    function handelNoodep(){
        setNoodes(noodes+30);
        setNode(node+1);
    }
function handelbirn(){
    setBiriyani(biriyani-30);
    setBir(bir-1);
}
    function handelbirp(){
        setBiriyani(biriyani+30);
        setBir(bir+1);
    }

    function handelchipn(){
        setChips(chips-10);
        setChip(chip-1);
    }
    function handelchipp(){
        setChips(chips+10);
        setChip(chip+1);
    }
    let total = noodes + biriyani + chips;

  return (
    <div>Food
<h3>Noodes  ₹ {noodes}   <button onClick={handelNooden} disabled={noodes<=0}>-</button>{node}<button onClick={handelNoodep}>+</button></h3>
<h3>biriyani  ₹ {biriyani}   <button onClick={handelbirn} disabled={biriyani<=0}>-</button>{bir}<button onClick={handelbirp}>+</button></h3>
<h3>chips  ₹ {chips}   <button onClick={handelchipn} disabled={chips<=0}>-</button>{chip}<button onClick={handelchipp}>+</button></h3>
    
    <h1>Total : {total}</h1>
    </div>
  )
}
