import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <AppRoutes />
    </>
  );
}
