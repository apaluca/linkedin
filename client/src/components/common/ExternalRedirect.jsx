import { useEffect } from "react";

const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null; // This component doesn't render anything
};

export default ExternalRedirect;
