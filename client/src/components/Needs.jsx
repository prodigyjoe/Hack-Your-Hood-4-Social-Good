import React, { useState } from 'react';
import {
    Checkbox,
    Label
} from '@material-ui/core';

const Needs = (props) => {

    const {
        price,
        setPrice
    } = props;

    // props {
        // price: 0
    // }
    // props.price


    const [checkedB, setCheckedB] = useState(false);
    const [checkedC, setCheckedC] = useState(false);    

    // function
    const update = (itemPrice, item) => {
        if (checkedB) {
            setPrice(price - itemPrice)
        } 
        else {
            setPrice(price + itemPrice)
        }
        if (checkedC) {
            setPrice(price - itemPrice)
        } 
        else {
            setPrice(price + itemPrice)
        }
            if (item === 'B') {
                setCheckedB(!checkedB)
            }
        if (item === 'C') {
            setCheckedC(!checkedC)
        }

    }


    // updates the toggle
    // also updates the parent price state with stPrice

    console.log('price:', price)
    return (
        <div className='needs'>
            <h1>Show checkboxes:</h1>

            <h5>I have a bike</h5>
            <Checkbox
                checked={checkedB}
                onChange={() => update(20, 'B')}
                value="checkedB"
                color="primary"
                inputProps={{
                'aria-label': 'secondary checkbox',
                }}
            />

            <h5>I have a car</h5>
            <Checkbox
                checked={checkedC}
                onChange={() => update(20, 'C')}
                value="checkedB"
                color="primary"
                inputProps={{
                'aria-label': 'secondary checkbox',
                }}
            />

            {/* <h5>I have a bike</h5>
            <Checkbox
                checked={checkedB}
                onChange={() => setCheckedB(!checkedB)}
                value="checkedB"
                color="primary"
                inputProps={{
                'aria-label': 'secondary checkbox',
                }}
            />

            <h5>I have a bike</h5>
            <Checkbox
                checked={checkedB}
                onChange={() => setCheckedB(!checkedB)}
                value="checkedB"
                color="primary"
                inputProps={{
                'aria-label': 'secondary checkbox',
                }} */}
            {/* /> */}

            <button>Submit</button>
        </div>
    )
}

export default Needs
