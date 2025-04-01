import { useEffect } from "react";

// use hooks -> useEffect

export default function DataFetcher() {
  useEffect(() => {
    fetch("https://api.example.com/data").then((response) => response.json);
    return () => console.log("clean up");
  }, []);
}
