import {useState} from 'react';
function Banner() {
    
    // let name  = "Bruce Banner"
    let [name, setName] = useState("Bruce ");

    function changeName(){
        // name="Hulk"
        // console.log(name);
        setName("Hulk");
    }

    return(

        <div className="banner">
            <h1>{name}</h1>
            <button className="btn" onClick={changeName}>ChangeData</button>

        </div>

    )
}

export default Banner; 