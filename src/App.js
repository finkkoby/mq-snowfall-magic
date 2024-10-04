import { Helmet } from 'react-helmet'

import './App.css';
import Header from './components/Header';

function App() {

  // console.log(snowStorm)
  
  // function freeze() {
  //   snowStorm.freeze()
  // }

  // function unfreeze() {
  //   snowStorm.resume()
  // }
  

  return (
    <div className="App">
      <Header />
      {/* <button onClick={freeze}>freeze</button>
      <button onClick={unfreeze}>unfreeze</button> */}
    </div>
  );
}

export default App;
