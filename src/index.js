import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './custom.scss';
import { Provider } from 'react-redux';
import { store } from './_helpers/store';
import firebase from "firebase/app";
import "firebase/analytics";

function initialize() {
  // [START analytics_initialize]
  const analytics = firebase.analytics();
  // [END analytics_initialize]
}

function logEvent() {
  // [START analytics_log_event]
  firebase.analytics().logEvent('notification_received');
  // [END analytics_log_event]
}

function logEventParams() {
  const analytics = firebase.analytics();
  
  // [START analytics_log_event_params]
  analytics.logEvent('select_content', {
    content_type: 'image',
    content_id: 'P12453',
    items: [{ name: 'Kittens' }]
  });
  // [END analytics_log_event_params]
}

function logEventCustomParams() {
  const analytics = firebase.analytics();

  // [START analytics_log_event_custom_params]
  analytics.logEvent('goal_completion', { name: 'lever_puzzle'});
  // [END analytics_log_event_custom_params]
}

function setUserProperties() {
  // [START analytics_set_user_properties]
  firebase.analytics().setUserProperties({favorite_food: 'apples'});
  // [END analytics_set_user_properties]
}

function recordScreenView() {
  const screenName = '<SCREEN_NAME>';
  const screenClass = '<SCREEN_CLASS>';

  // [START analytics_record_screen_view]
  firebase.analytics().logEvent('screen_view', {
    firebase_screen: screenName, 
    firebase_screen_class: screenClass
  });
  // [END analytics_record_screen_view]
}

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
