import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
      setTimeout(() => setShowLoadingScreen(false), 500);
    };

    handleComplete();

    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  return { loading, showLoadingScreen };
};
