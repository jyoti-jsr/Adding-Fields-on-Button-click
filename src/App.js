import "./styles.css";
import { useState } from "react";
export default function App() {
  const inputArr = [
    {
      id: 1,
      landingPage: "",
      sortOrder: "",
      isActive: false,
      image: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          id: Math.random(),
          landingPage: "",
          sortOrder: "",
          isActive: false,
          image: ""
        }
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    console.log(index);
    setArr((s) => {
      const newArr = s.slice();
      console.log(newArr);
      newArr[index].landingPage = e.target.value;
      console.log(newArr[index].value, e.target.value);

      return newArr;
    });
  };
  const handleChange1 = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      console.log(newArr);
      newArr[index].sortOrder = e.target.value;

      console.log(newArr[index].value, e.target.value);

      return newArr;
    });
  };

  const handleChange2 = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      console.log(newArr);
      newArr[index].isActive = e.target.checked;

      console.log(newArr[index].value, e.target.value);

      return newArr;
    });
  };
  const handleChange3 = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      console.log(newArr);
      newArr[index].image = e.target.value;

      console.log(newArr[index].value, e.target.value);

      return newArr;
    });
  };
  return (
    <div>
      <button onClick={addInput}>+</button>
      {arr.map((item, i) => {
        return (
          <>
            <input
              onChange={handleChange}
              value={item.landingPage}
              id={i}
              type="text"
              size="40"
            />
            <input
              onChange={handleChange1}
              value={item.sortOrder}
              id={i}
              type="text"
              size="40"
            />
            <input
              onChange={handleChange2}
              value={item.isActive}
              id={i}
              type="checkbox"
              size="40"
            />
            <input
              onChange={handleChange3}
              value={item.image}
              id={i}
              type="file"
              size="40"
            />
          </>
        );
      })}
    </div>
  );
}
