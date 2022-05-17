function Avenger (props)
{

    return(
        <div className="card">
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <button>VIEW</button>
        </div>
    )


}

export default Avenger;