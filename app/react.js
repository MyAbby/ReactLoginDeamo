'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import DataBox from './component/DataBox';
/*function ComponentBox(props){
return (
   <p>Hello, {props.name}</p>

);

}*/

const element = (
<DataBox url="../data.json"/>
);

ReactDOM.render(
element,
document.getElementById('root')
);


