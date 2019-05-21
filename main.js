import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./stores/store";
import App from './App.jsx';


  var folderGridData = [
      {
          id:1,
          name:'subfolder1',
          created:'21/05/2019',
          updated:'22/05/2019'
      },
      {
          id:2,
          name:'subfolder2',
          created:'19/05/2019',
          updated:'20/05/2019'
      }
  ]


ReactDOM.render( <Provider store={store}><App folderGridData1 = {folderGridData}/></Provider>, document.getElementById('app'));