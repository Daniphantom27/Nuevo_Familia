import React from 'react';
import logo from '../components/img/yo.jpg';
import logo2 from '../components/img/bro.jpg';
import logo3 from '../components/img/ma.jpg';
import logo4 from '../components/img/pa.jpg';

const Daniel = () => {
    const user = {
        name: "Daniel Andres",
        lastname: "Sanchez Castro",
        age: 17,
        Job: "Programmer",
    }

    const user2 = {
      nameb:"Juan David",
      lastnameb: "Sanchez Castro",
      ageb: 22,
      Jobb:["Network Technicial"],   
  }

  const user3 = {
    namem:"Carmen Elisa",
    lastnamem: "Castro Barraza",
    agem: 48,
    Jobm:"Housewife",
}

const user4 = {
  namep:"Miguel Antonio",
  lastnamep: "Sanchez Villareal",
  agep: 56,
  Jobp:"electric technicial",
}

  return (
    <div className='container'>

   
    <div className='yo'>
        <br/>
        <h2>{user.name}</h2>
        <h2>{user.lastname}</h2>
        <h2>{user.age}</h2>
        <h2>{user.Job}</h2>
        <img src={logo} alt="imagen"></img>

        <div className='bro'>
          <br/>
        <h2>{user2.nameb}</h2>
        <h2>{user2.lastnameb}</h2>
        <h2>{user2.ageb}</h2>
        <h2>{user2.Jobb}</h2>
        <img src={logo2} alt="imagen"></img>
      </div>

      <div className='ma'>
          <br/>
        <h2>{user3.namem}</h2>
        <h2>{user3.lastnamem}</h2>
        <h2>{user3.agem}</h2>
        <h2>{user3.Jobm}</h2>
        <img src={logo3} alt="imagen"></img>
      </div>

      <div className='pa'>
      <br/>
        <h2>{user4.namep}</h2>
        <h2>{user4.lastnamep}</h2>
        <h2>{user4.agep}</h2>
        <h2>{user4.Jobp}</h2>
        <img src={logo4} alt="imagen"></img>
      </div>
    </div>
    </div>
   
    
  )
}

export default Daniel