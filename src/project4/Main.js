import React, { useState } from 'react'
import { VictoryPie } from 'victory'


function Main() {



    const [toggle, setToggle] = useState(false)

    const [input, setInput] = useState({
        box1: 0,
        box2: 0
    })
    const [myData, setMyData] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))
    }

    const handleBlur = (e) => {
        if (e.target.name === 'box1' && 100 > e.target.value) {
            setInput((pre) => ({ ...pre, box2: 100 - e.target.value }))
        } else {
            setInput((pre) => ({ ...pre, box1: 100 - e.target.value }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log();
        console.log();
        setMyData([
            { x: "Box1", y: +input.box1 },
            { x: "Box2", y: +input.box2 },
        ])

        setToggle(true)
    }

    return (

        <>
        <h1 className='bg-primary p-4 text-center text-white'> Create Pie Chart</h1>

            <div className=' col-5 shadow p-3 mb-5 bg-white rounded mt-5' style={{ margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label>Box1
                                <input onBlur={handleBlur} type='number' name='box1' value={input.box1} onChange={handleChange} className='form-control' />
                            </label>
                            {input.box1 > 100 && <p className='h6 text-danger'>Enter value less than 100</p>}

                        </div>
                        <div className='form-group'>
                            <label>Box2
                                <input onBlur={handleBlur} type='number' name='box2' value={input.box2} onChange={handleChange} className='form-control' />
                            </label>
                            {input.box2 > 100 && <p className='h6 text-danger'>Enter value less than 100</p>}

                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn px-5 btn-success' type='submit'>Create Chart</button>
                    </div>
                </form>
            </div>
            {toggle &&
                <div style={{ height: 400 }}>
                    <VictoryPie
                        data={myData}
                    />
                </div>
            }

        </>
    )
}

export default Main