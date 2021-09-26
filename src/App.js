import logo from './logo.svg';
/* import header and donators */
import './App.css';
import Header from './components/Header/Header';
import Donators from './components/Donators/Donators';

function App() {
  return (
    <div className="body">
      {/* here is header & donators component */}
      <Header></Header>
      <Donators></Donators>
    </div>
  );
}

export default App;
