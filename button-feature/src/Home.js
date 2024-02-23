import { useState } from "react";
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from "react-icons/io";

const Home = () => {

  const [display, setDisplay] = useState(true);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(true);

  const showDisplay = () => {
    setDisplay((prev) => !prev);
    setUp((prev) => !prev);
    setDown((prev) => !prev);

  }

  

  return (
    <div className="home">
      <h2>Drop Down List</h2>
      <button onClick={() => {showDisplay()}}>
        Click
        <IoIosArrowDropupCircle id="up-icon" className={up ? "active" : ""}/>
        <IoIosArrowDropdownCircle id="down-icon" className={down ? "inactive" : ""}/>
      </button>
      <ul className={display ? "active" : ""}>
        <li>List a</li>
        <li>List b</li>
        <li>List c</li>
        <li>List d</li>
        <li>List e</li>
      </ul>
    </div>
  );
}
 
export default Home;