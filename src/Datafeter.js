import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Data Fetcher</h1>
      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <table>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed ? 'Yes' : 'No'}</td>
                </tr>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
