import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Store } from './Components/Store';
import { Cart } from './Components/Cart';
import '../src/css/App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path= '/landing-vite/' element={<Home />}/>
        <Route path='/landing-vite/STORE' element={<Store />} />
        <Route path= '/landing-vite/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
