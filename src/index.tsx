import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

chrome.devtools.panels.create("Garbanzo",
  "favicon.ico",
  "index.html",
  function (panel) {
    // code invoked on panel creation
  }
);
chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
  function (sidebar) {
    // sidebar initialization code here
    sidebar.setObject({ some_data: "Some data to show" });
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
