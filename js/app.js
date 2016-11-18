import Hello from './hello';
import Nav from './nav';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

ReactDOM.render(<Hello/>, document.getElementById('reactEntry'));

ReactDOM.render(
    <div>
      <Nav/>
      <div> Other Content</div>
      
    </div>
  
, document.getElementById('placeholder'))
