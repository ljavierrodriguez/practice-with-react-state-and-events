import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Test } from './Test';


// React 17
//ReactDOM.render(<Test />, document.querySelector('#root'));

// Forma de React 18
ReactDOM.createRoot(document.querySelector('#root')).render(<Test />);