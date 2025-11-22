import React from 'react';
import { useSearchParams } from 'next/navigation';

const Custom404 = () => {
  const searchParams = useSearchParams();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default Custom404;
