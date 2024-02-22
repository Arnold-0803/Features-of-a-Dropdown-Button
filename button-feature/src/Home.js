import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from "react-icons/io";

const Home = () => {
  return (
    <div className="home">
      <h2>Drop Down List</h2>
      <button 
        style={{
          padding: "15px 20px",
          fontSize: "20px"
        }}
      >Click
        <IoIosArrowDropupCircle id="up"/>
        <IoIosArrowDropdownCircle id="down"/>
      </button>
      <ul>
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