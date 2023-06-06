import  { useEffect, useState } from 'react';

const useBodyHeight = (): number => {
  const [bodyHeight, setBodyHeight] = useState(document.body.clientHeight);

  useEffect(() => {
    const handleResize = () => {
      setBodyHeight(document.body.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return bodyHeight;
};

export default useBodyHeight;