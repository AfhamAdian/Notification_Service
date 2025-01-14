import logo from './logo.svg';
import './App.css';


import { useEffect } from 'react';
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';


// To send CUstom notifcations from the sever i have to save the token of each use in a DB then send message to that 
// token from the server
function App() {

  async function requestPermission() {
      try{
        const permission = await Notification.requestPermission();
        if( permission === 'granted'){
          alert('Notification permission granted');
          const token = await getToken(messaging, {
            vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
          });

          //SAVE this token to DB

          console.log('token:', token);

        }else if ( permission === 'denied'){
          alert('Notification permission denied');
        }
      }catch( error){
        console.error(error);
      }
  }

  useEffect(() => {
    requestPermission();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
