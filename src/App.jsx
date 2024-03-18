
import './App.css';
import {Header} from "./Header/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home/Home";
import {About} from "./About/About";
import {Contacts} from "./Contacts/Contacts";
import {Skils} from "./Skils/Skils";

function App() {
  return (
    <>

<Header />
    <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/about'} element={<About/>}></Route>
        <Route path={'/skils'} element={<Skils/>}></Route>
        <Route path={'/contacts'} element={<Contacts/>}></Route>
    </Routes>

    </>
  );
}

export default App;
