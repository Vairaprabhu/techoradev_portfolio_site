import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ visible }) {
  const [progress, setProgress] = useState(6);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = current >= 100 ? 100 : current + 12;
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="loader-card"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="loader-progress" aria-label="Loading progress">
              <span style={{ width: `${progress}%` }} />
            </div>
            <p className="loader-label">Loading digital solutions...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
