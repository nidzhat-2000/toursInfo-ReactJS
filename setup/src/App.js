import React, { useState, useEffect } from 'react';
import Loading from './Loading.jsx';
import Tours from './Tours.jsx';

const url = 'https://course-api.com/react-tours-project';

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

  const removeTour = id => {
    const newTours = tours.filter(removedTour => removedTour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // {loading && <main> <Loading /> </main> }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
