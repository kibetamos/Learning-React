
import './App.css';
//import Header from './Header';
import Avenger from './Avenger';
// import Banner from './Banner';
import Weather from './Weather';

function App() {

    let pokes=[
        {
            name:"pikachu",
            type:"Ele"
        },
        {
            name:"pika",
            type:"Glass"
        },
        {
            name:"pikach",
            type:"Grass"
        },
        {
            name:"pi",
            type:"Rock"
        }

    ]
    return ( 

    <div className = "App" >
        {/* <h1 className="title">Avenger List</h1> */}
        {/* <div className='container'>
            <Avenger name ="ironman" age = "20" />
            <Avenger name ="iron" age = "200" />
            <Avenger name ="ironiron" age = "00" />
        </div> */}
    {/* <Banner/> */}
    {/* <div className='container'>
        {
            pokes.map(function(poke, index){
                return(
                    <div className="card pk-card" key={index}>
                        <h3>{poke.name}</h3>
                        <h3>{poke.type}</h3>
                    </div>

                )
            })
        }
    
    

    </div> */}
     <h1 className="title">Weather</h1>
    <Weather/>
           
        </div>
    );
}

export default App;