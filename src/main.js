import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

//document.getElementsByTagName('body')[0].style.backgroundColor = 'red'


const Tor = () => {
    return (<div>
        <h1>This is new element. </h1>
    </div>)
}

ReactDOM.createRoot(document.getElementById('root')).render(<Tor></Tor>);
