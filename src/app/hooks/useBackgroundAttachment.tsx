import { useEffect, useState } from "react";

const isIosSafari = (): boolean => {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent;

  return (
    /iP(ad|hone|od)/.test(ua) &&
    /Safari/.test(ua) &&
    !/CriOS/.test(ua) &&
    !/FxiOS/.test(ua)
  );
};

const useBackgroundAttachment = (): "fixed" | "scroll" => {
  const [backgroundAttachment, setBackgroundAttachment] = useState<
    "fixed" | "scroll"
  >("fixed");

  useEffect(() => {
    if (isIosSafari()) {
      setBackgroundAttachment("scroll");
    }
  }, []);

  return backgroundAttachment;
};

export default useBackgroundAttachment;
