import logo from './logo.svg';
import './App.css';
import { images } from './images';
import  { Home } from './pages/Home/home';
function App() {
const index = Math.floor(Math.random() * images.length);  

  const bgImage =images[index].image;
  console.log(bgImage);
  return (
    <div className="App"  style={{backgroundImage: `url(${bgImage})`}}>
      <Home/>
     </div>
   

  );
}

export default App;
