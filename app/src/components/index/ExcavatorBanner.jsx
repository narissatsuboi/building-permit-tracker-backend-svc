import * as React from 'react'
import excavImg from '../../assets/excavator.jpg'
import * as customCSS from '../../css/custom.css'  // react bootstrap

export default function ExcavatorBanner() {
  return (
    <div style={{ backgroundImage: `url(${excavImg})`, backgroundRepeat:'no-repeat',
                  backgroundSize:'contain', 
                  height: 550,
                }}>
      <p style={{m:0}}>Automated permit tracking</p>
    </div>
  );
}


