// client/src/App.js

import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data)

      });
  }, []);

  if (!data) return <p>"Loading..."</p>

  return data && (
    <>
      <h1>Hola</h1>
      <ul>

        {data.slice(0, 20).map((el) => <li key={el.id}>{el.name.english}</li>)}
      </ul>
    </>

  );
}

export default App;