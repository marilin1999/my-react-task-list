import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/router/Home';
import SobreNosotros from './components/router/SobreNosotros';
import Tareas from './components/router/Tareas';
import Menu from './components/Menu';
import "./app.css";


function App() {
    return (
        <ChakraProvider>
            <Router>           
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tareas" element={<Tareas />} />
                    <Route path="/sobrenosotros" element={<SobreNosotros/>} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
