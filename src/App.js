import logo from './logo.svg';
import './App.css';
//import Header from './Header';
import Avenger from './Avenger';
import Banner from './Banner';

function App() {
    return ( 

    <div className = "App" >
        <h1 className="title">Avenger List</h1>
        <div className='container'>
            <Avenger name ="ironman" age = "20" />
            <Avenger name ="iron" age = "200" />
            <Avenger name ="ironiron" age = "00" />
        </div>
    <Banner/>

        </div>
    );
}

export default App;