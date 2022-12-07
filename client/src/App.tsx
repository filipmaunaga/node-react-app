import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<null>(null);

  useEffect(() => {
    fetch("/api")
      .then((res: Response) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
