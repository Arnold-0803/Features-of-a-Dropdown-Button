import { useState } from "react";
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from "react-icons/io";

const Home = () => {

  const [display, setDisplay] = useState(true);

  const showDisplay = () => {
    setDisplay((prev) => !prev);
  }

  return (
    <div className="home">
      <h2>Drop Down List</h2>
      <button onClick={() => {showDisplay()}}>
        Click
        <IoIosArrowDropupCircle id="up"/>
        <IoIosArrowDropdownCircle id="down"/>
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