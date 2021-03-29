import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

export default function Notes() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    const [count, setCount] = useState(getRandomInt(100));

    const addClick = () => {
        setCount(count+1)
    }

    const minusClick = () => {
        setCount(count-1)
    }

    return (
        <div>
            <p>Hi</p>
            <p>count: {count}</p>
            <Button variant="contained" color="primary" onClick={addClick}>add</Button>
            <Button variant="contained" color="secondary" onClick={minusClick}>minus</Button>

        </div>
    )
}