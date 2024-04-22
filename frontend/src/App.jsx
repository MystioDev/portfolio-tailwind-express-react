import { useEffect, useState } from "react";

const App = () => {
  const [bakcendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="bg-blue-800 h-screen">
      {typeof bakcendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        bakcendData.users.map((user, i) => {
          return <p key={i}>{user}</p>;
        })
      )}
    </div>
  );
};

export default App;
