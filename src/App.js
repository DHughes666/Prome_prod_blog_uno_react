import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation-component";
import Home from "./routes/home/home-component";
import Scholar from "./routes/scolar/scolar-component";

const App = () => {
    return (
        <>
        <Navigation />
        <Home />
        <Scholar />
        </>
        
    )
}

export default App;