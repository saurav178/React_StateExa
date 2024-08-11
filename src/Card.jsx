import React from 'react'
import './Card.css'

function Card() {
  return (
    <>
    <div className='cards'>
      <div className='card'>

      <h1>Top netflix series</h1>  
        <img src="https://images.thequint.com/thequint/2019-09/ae28ee31-9d3e-4687-a191-e42911a6d083/Full_Family.jpg" alt="mypic"
        className='card_img'/><br/>
          <a href='https://youtu.be/RvwG2PRq3IE"' target='something'>
            <button>watch now</button>
            </a>
            <h3 className='card_title'>Dark</h3>
      </div>



      <div className='cards'>
        
        <img src="https://images.thequint.com/thequint/2019-09/ae28ee31-9d3e-4687-a191-e42911a6d083/Full_Family.jpg" alt="mypic"
        className='card_img'/>
        <div>
          <a href='https://youtu.be/RvwG2PRq3IE"' target='something'>
            <button>watch now</button>
            </a>
            <h3 className='card_title'>Dark</h3>
        </div>

      </div>

      <div className='cards'>
        
        <img src="https://images.thequint.com/thequint/2019-09/ae28ee31-9d3e-4687-a191-e42911a6d083/Full_Family.jpg" alt="mypic"
        className='card_img'/>
        <div>
          <a href='https://youtu.be/RvwG2PRq3IE"' target='something'>
            <button>watch now</button>
            </a>
            <h3 className='card_title'>Dark</h3>
        </div>

      </div>
      </div>
      
            
    </>
    
  )
}

export default Card
