import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;

    const timeoutId = window.setTimeout(() => {
      const navOffset = 96;
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: 'auto' });
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [hash, pathname]);

  return null;
}
