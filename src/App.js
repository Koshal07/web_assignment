
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import react, {useState} from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [hidden,SetisHidden] = useState(false);
  const onBasketClick = () => {
    SetisHidden(!hidden)
  }
  return (
    <div className={`${hidden ? '' : 'bg-[#fafafa]'}`}>
    <Navbar onClickBasketHandler={onBasketClick}/>
    <Sidebar isHidden = {hidden} OnCloseHandler = {onBasketClick}/>
    <Product isHidden={hidden}/>
    </div>
  );
}

export default App;
