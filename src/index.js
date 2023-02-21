import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import "./pages/Style/reset.scss";
import "./pages/Style/common.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Router />);