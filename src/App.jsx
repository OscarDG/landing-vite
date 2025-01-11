import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Store } from './Components/Store';
import { FiltersProvider } from './contexts/filterContext';
import '../src/css/App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path= '/landing-vite/' element={<Home />}/>
        <Route path='/landing-vite/STORE' element={
            <FiltersProvider>
                <Store />
            </FiltersProvider>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
