import React, { useState } from "react";
import "./FinalTodosList.css";

function TodosList() {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const handleDelete = (id) => {
    let newTods = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newTods);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter Some Text"
          className="mt-5"
          style={{ border: "1px solid black" }}
          value={message.text}
          onChange={changeMessage}
        />
        <button onClick={handleSubmit} className="addbtn121">
          add
        </button>
      </form>
      <hr />
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;

          return (
            <li key={id}>
              <b className="mx-3">{text}</b>
              <button className="mx-2 p-1 mt-2 bg-primary">edit</button>
              <button
                className="p-1 bg-danger"
                onClick={() => handleDelete(id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TodosList;
