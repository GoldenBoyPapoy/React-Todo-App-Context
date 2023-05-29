// Importing necessary packages and components from React
import React, { FC, useState } from "react";

// Importing RouteComponentProps for using the history object in this component.
import { RouteComponentProps } from "react-router-dom";

// Importing CSS file for styling of the Home component.
import "./home.css";

// Importing Redirect component from react-router-dom package to redirect to another route.
import { Redirect } from "react-router-dom";

// Importing custom hook useMainContext() from "../context" for getting access to global state and actions.
import { useMainContext } from "../context";

// Define type for RouteComponentProps which will be passed as props to this component.
type SomeComponentProps = RouteComponentProps;

// Defining a functional component named `Home` which accepts the props of type `SomeComponentProps`.
const Home: FC<SomeComponentProps> = ({ history }) => {
  // Destructure addTodo and Todos from useMainContext() hook.
  const { todoList, setTodoList } = useMainContext();

  // Use useState to keep track of data, todo, and id states.
  const [todo, setTodo] = useState("");

  // Logout function clears local storage and redirects to login page when called.
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  // handleAddTodo function creates a new Todo object with the given id and todo
  // text by calling addTodo function provided by useMainContext() hook.
  const handleAddTodo = () => {
    const newTodo = { id: todoList.length + 1, todo: todo };
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };
  const handleDeleteTodo = (id: number) => {
    let temp = todoList.filter((item: any) => id !== item.id);
    setTodoList(temp);
  };

  // Conditional rendering checking for accessToken in local storage.
  // If accessToken exists, Home component is rendered, else Redirect to login page.
  return localStorage.getItem("accessToken") ? (
    <main className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <div>
          <h3 className="m-3">Home</h3>
        </div>
        <div>
          <button type="submit" className="m-2 btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <button className="btn btn-primary m-2" onClick={handleAddTodo}>
        Add
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.todo}</td>
              <td>
                <button
                  onClick={() => handleDeleteTodo(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  ) : (
    <Redirect to="/login" />
  );
};

// Exporting the Home component as default export.
export default Home;
