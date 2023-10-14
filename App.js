import React, { useState, useEffect } from 'react';
import LoadingAnimation from './components/Loading/LoadingAnimation';
import Homepage from './components/HomePage/Homepage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an asynchronous operation (e.g., fetching data) that takes some time
  useEffect(() => {
    // Simulate a delay of 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
