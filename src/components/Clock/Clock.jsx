import React from 'react';

const Clock = (props) => {
    let state = props.store.getState();
    return (
        <div>
            {state.currentTime.hours}
        </div>
    )
}

export default Clock;
