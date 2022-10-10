import { useState } from "react";
import { useSelector } from "react-redux";

function Counter() {
  // let counter1 = 0;
  const counterData = useSelector((state) => state.counter);
  console.log(counterData);

  const [counter, setCounter] = useState(0);
  // value 1/index 0 = untuk memanggil nilai di dalam variabel
  // value 2/index 1 = untuk merubah nilai di dalam variable tsb

  const [email, setEmail] = useState("");
  const [keyword, setKeyword] = useState("");

  const increment = (data) => {
    console.log("INCREMENT DATA", data);
    setCounter(counter + data);
  };
  const decrement = () => {
    console.log("DECREMENT DATA");
    setCounter(counter - 1);
  };

  const handleSearch = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("User Press Enter !");
      setKeyword(e.target.value);
    }
  };

  return (
    <div className="container text-center">
      <div>
        <h1>Counter App</h1>
        <hr />
        <h3>{counter}</h3>
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            console.log("RESET DATA");
            setCounter(0);
          }}
        >
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => increment(2)}>
          +2
        </button>
      </div>
      <hr />
      <h1>HANDLE INPUT</h1>
      {/* onChange = akan berjalan setiap user memasukkan nilai ke dalam form input */}
      <input
        type="text"
        name="email"
        placeholder="Input your email"
        onChange={(e) => {
          console.log(e);
          setEmail(e.target.value);
        }}
      />
      <h5>Your email is {email}</h5>

      {/* onKeyPress = sama seperti onChange yang dmn digunakan untuk menambil nilai di dalam input tapi disini dapat di tambahkan kondisi karna ada attribut tambahan */}
      <input type="text" placeholder="Search ..." onKeyPress={handleSearch} />
      <h5>Your keyword is {keyword}</h5>
    </div>
  );
}

export default Counter;
