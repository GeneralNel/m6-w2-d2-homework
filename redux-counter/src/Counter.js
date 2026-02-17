import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';

const Counter = ({ count, dispatch }) => {
    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };
    
    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };
    
    const reset = () => {
        dispatch({ type: 'RESET' });
    };
    
    return (
        <div className="counter-container">
            <h2>Counter</h2>
            <div className="counter-display">
                <button className="counter-btn" onClick={decrement}>-</button>
                <span className="counter-value">{count}</span>
                <button className="counter-btn" onClick={increment}>+</button>
            </div>
            <div>
                <button className="counter-btn" onClick={reset}>Reset</button>
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