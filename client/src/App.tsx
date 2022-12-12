import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const res = await axios.get("/posts");
    console.log(res.data);
    setData(res.data);
  };

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res: Response) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {!data ? (
            <p>"Loading..."</p>
          ) : (
            data.map((post) => <p key={post._id}>{post.postTitle}</p>)
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
