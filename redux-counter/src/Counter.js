import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {
    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };
    
    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };
    
    return (
        <div>
            <h2>Counter</h2>
            <div>
                <span>{count}</span>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps)(Counter);