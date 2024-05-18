import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import ProductItems from './component/ProductItems/ProductItems';

function App() {
  return (
    <div className="App">
    <Header/>
    <ProductItems/>
    <div className='footer'>
      <div className='first'>
        <div className='left'>
          <div>
           <h4>Be the First to know</h4>
            
           <p>sign up for the updates from meta muse</p>
           <div style = {{display : 'flex' , justifyContent : 'space-between'}}>
            <input style = {{padding : '10px'}} type = 'text' placeholder='Enter your mail...'/>
            <button style = {{backgroundColor : 'black' , color : 'grey'}}>Subscribe</button>
           </div>
           </div>
        </div>
        <div className='right'>
          <div>
            <h4>Contact Us</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4>Currency</h4>
            <p>Transaction will be completed in euros and a Currency reference is available on hover</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
