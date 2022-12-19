import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    }
    document.addEventListener("mouseup", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("touchstart", listener);
    }
  }, [ref, handler]);
}

export default useOnClickOutside;