import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function DogName(props) {
    let navigate = useNavigate();
    const [name, setName] = useState();

    const obj = { name }

    const handelbackbtn = () => {
        navigate("/")
    }

    const handelchangeevent = (e) => {
        setName(e.target.value);
        // console.log(name)
    }

    const handleclickbtn = (e) => {
        navigate("/Gender")
        e.preventDefault();
        props.snddata(name);
    }

    return (
        <>

            {/* Container */}
            <div className='container-fluid' >
                {/* 1st Row */}
                <div className='row' >
                    <div className='col-2 '  >
                        <div className='mx-2 text-start pt-3' id='navheadind'>
                            Butternut <br /> Box</div>
                    </div>
                    <div className='col-8' ></div>
                </div>

                {/* 3rd Row */}
                <div className='row mb-3'>
                    <div className='col mt-3 py-1' id='headingbg'>
                        <h1 id='headingcolor' className='py-4' >First,what's your dog's name?</h1>
                    </div>
                </div>

                {/* 4th Row */}
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 my-4 py-3">

                        <div className='row' >
                            <div className='col-1'></div>
                            <div className='col-9 shadow p-3 mb-2 rounded'>
                                <label htmlFor="exampleFormControlInput1" className="form-label " id='labelclr'>My dog is called...</label>
                                <input onChange={handelchangeevent} value={name} id='inputhover' className="form-control form-control-lg border" type="text" placeholder="Your dog's name" aria-label=".form-control-lg example" />
                            </div>

                            <div className='row'>
                                <div className='col-2'></div>
                                <div className='col-9 text-end mt-3' id='atag'>
                                    <a id='labelclr' className='mx-2' href="">I have another dog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5th Row */}
                <div className='row' id='FreshFact' >
                    <div className='col-2' ></div>
                    <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
                        <h2>Fresh Fact</h2>
                        <p>
                            The story of Butternut Box begins with a farting Staffie called Rudie. Only home-cooked meals could help her terrible farts, and the rest, as they say, is history
                        </p>
                    </div>
                    <div className='col3' ></div>
                </div>

                {/* 6th Row */}
                <div className='row' id='footer' >
                    <div className='col-5' ></div>
                    <div className='col-2'>
                        <button onClick={handleclickbtn} type="button" className="btn btn-sm py-1 px-1 m-3" id='btnfont'>LET'S START</button>
                    </div>
                    <div className='col-5' ></div>
                </div>

                {/* Container End */}
            </div>
        </>
    )
}


// value={name}