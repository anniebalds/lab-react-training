import React from 'react';

const Random = ({min, max}) => {

    function getRandomArbitrary({min, max}) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    let toReturn = getRandomArbitrary({min, max})

    return (
        <div className='random'>
        <p>Random value between {min} and {max} is {toReturn}</p>
        </div>
    )
}

export default Random;