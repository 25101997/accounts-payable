import './App.css';
import Header from './components/Header';
import SideBarMenu from './components/SideBarMenu';

function App() {
  return (
    <div className="App">
      <Header sms="Header"/>
      <SideBarMenu/>
    </div>
  );
}

export default App;
