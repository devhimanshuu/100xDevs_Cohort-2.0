import { useEffect, useState } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
}

function App() {
  const isOnline = useIsOnline(5);

  return <>{isOnline ? "You are online yay!" : "You are not online"}</>;
}

export default App;
