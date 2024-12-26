import React from 'react';

import './App.css';

import Shape1 from './components/Shape1';
import Shape2 from './components/Shape2';
/**
 * 
 * This App for Composition with Clone Element  in Dynamic Component
 */
export default function App() {

     const data =[
      {
        compName:Shape1,
        data:{id:1,name:'Ali',email:'Ali111@email.com',age:31},
      },
      {
        compName:Shape2,
        data:{id:2,name:'Ahmed',email:'Ahmed222@eamil.com',age:30},
      },
      
     ];
      const child=data.map((element)=>{
        let  CompName=element.compName;
        return <CompName item={element.data} key={element.data.id}/>;
      });
 return(
  <div className='App'>
      <div className='welcome'>Compostion Clone Element Using Map : Dynamic Component</div>
      <br/>
         {child}
  </div>

 );
}

