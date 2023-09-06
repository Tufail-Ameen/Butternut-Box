import React from 'react'
import { useNavigate } from "react-router-dom";


export default function CurrentlyEating(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/FussyEater")
  }

  const handelbackbtn = () => {
    navigate("/Breed")
  }
  return (
    <>
      <div className='container-fluid' >
        {/* 1st Row */}
        <div className='row' >
          <div className='col-2 '  >
            <div className='mx-2 text-start pt-3' id='navheadind'>
              Butternut <br /> Box</div>
          </div>
          <div className='col-8' ></div>
        </div>


        {/* 2rd Row */}
        <div className='row mb-3'>
          <div className='col mt-3 py-1' id='headingbg'>
            <h1 id='headingcolor' className='py-4' >What is {props.name} currently eating?</h1>
          </div>
        </div>

        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3' id='inputheading1'>-------------------------  Kylan Watkins eats...  -------------------------</span>
        </div>

        <div className='row text-center' >
          <ul class="ks-cboxtags pt-3">
            <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
              <label for="checkboxOne">Dry</label></li>
            <li><input type="checkbox" id="checkboxTwo" value="Cotton Candy" />
              <label for="checkboxTwo">Wet</label></li>
            <li><input type="checkbox" id="checkboxThree" value="Rarity" />
              <label for="checkboxThree">Raw</label></li>
            <li><input type="checkbox" id="checkboxFour" value="Moondancer" /><label for="checkboxFour">Home-cooked</label></li>
          </ul>
        </div>

        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-2' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              We gently cook our freshly prepared ingredients at 90°, so all of our meals are both highly digestible and highly tasty. A winning combo.
            </p>
          </div>
          <div className='col3' ></div>
        </div>

        {/* 5th Row */}
        <div className='row' id='footer' >
          <div className='col-4'></div>
          <div className='col-4'>
            <a href="#" onClick={handelbackbtn} class="previous mt-3 mb-3">&laquo; Back</a>
            <a href="#" onClick={handleclickbtn} class="next mt-3 mb2">Continue &raquo;</a>
          </div>
        </div>
      </div>

    </>
  )
}
