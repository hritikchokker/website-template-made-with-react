
import './App.css';
import Header from './components/header/Header';
import MainWrapper from './components/main/main';
import SideWrapper from './components/side/SideWrapper';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <SideWrapper />
        <MainWrapper />
        <SideWrapper />
      </div>
    </div>
  );
}

export default App;
