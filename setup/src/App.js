import React, { useState, useEffect } from "react";
import Loading from "./Loading.jsx";
import Tours from "./Tours.jsx";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setTours(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // {loading && <main> <Loading /> </main> }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default App;
