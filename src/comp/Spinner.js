import React from 'react';
import loading from './loader.gif';

const Spinner =()=>{

    return (
      <div>
        <div className="text-center">
        <img style={{width:"60px"}} src={loading} alt="" />
        </div>
      </div>
    );
    
  
}

export default Spinner;
