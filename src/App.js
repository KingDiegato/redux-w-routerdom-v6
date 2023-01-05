import './App.css';
import NavigationBar from './components/containers/navigationBar';
import FooterBar from './components/containers/footerBar';
import { Route, Routes } from 'react-router-dom';

//! Pages
import Home from './pages/home';
import Search from './pages/search';
import Faq from './pages/faq';
import About from './pages/about';
import TodosContainer from './components/containers/todosContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <main className="App-main">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/todoList' element={<TodosContainer/>}></Route>
        </Routes>
      </main>
      <footer>
        <FooterBar></FooterBar>
      </footer>
    </div>
  );
}

export default App;
