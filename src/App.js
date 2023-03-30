import { Provider } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { store } from './app/store';
import Skills from './Components/Skills/Skills';
import Main from './Components/Main/Main';
import Contact from './Components/Contact/Contact';
import Certificados from './Components/Certificados/Certificados';
import Proyect from './pages/Proyect';
import Proyectport from './pages/proyectport';






function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>} />
      <Route path='/proyecto' element={<Proyect/>} />
      <Route path='/proyectport' element={<Proyectport/>} />

    </Routes>
      
     
     
     

     
      
   </BrowserRouter>
     
      
    </Provider>
  
   
     
  ); 
}

export default App;
