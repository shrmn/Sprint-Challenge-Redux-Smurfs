import React from 'react';

const Smurf = smurf => {
    console.log(smurf);
    return (
        <div className="smurf">
            <h3>{smurf.smurf.name}</h3>
            <p><strong>{smurf.smurf.height} tall</strong></p>
            <p><strong>{smurf.smurf.age} years old</strong></p>
        </div>
    )
}

export default Smurf;