import "./home.css"

export  const Home = () => {
    return (   
        <div className="home-container d-flex direction-column align-center gap-lg ">
            <h1 className = "main-heading">Browser  Extension</h1>
            <div className="user-details d-flex direction-column gap" > 
            <span className="heading-1">Hello, What's your name ?</span>
            <form >
                <input className="input"  />
            </form>
            </div>
           
        </div>  
        )}