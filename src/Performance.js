import React, { useEffect, useState } from 'react';

const PerformanceData = () => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const timingData = performance.getEntriesByType('navigation')[0];
    setPerformanceData(timingData);
  }, []);

  return (
    <div className="performance-data">
      {performanceData && (
        <div>
          <h2></h2>
          <p>Page load time: {performanceData.loadEventEnd - performanceData.navigationStart} ms</p>
          {}
        </div>
      )}
    </div>
  );
};

export default PerformanceData;
