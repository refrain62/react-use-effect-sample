import { useEffect, useState } from "react";

type FetchState<T> = {
  state: "loading";
} | {
  state: "fulfilled";
  date: T;
}| {
  state: "rejected";
  error: unknown;
}

const Fetchonce: React.FC = () => {
  const [fetchState, setFetchState] = useState<FetchState<string>>({ state: "loading" });

  useEffect(() => {
    // loading中は何もしない
    if (fetchState.state !== "loading") return;

    const controller = new AbortController();

    console.log("fetching...");
    fetch("https://example.com/get-number", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("エラー（今回はエラー処理はテキトウ）");
        }
        return response.json();
      })
      .then((data) => {
        setFetchState({ 
          state: "fulfilled", 
          date: data 
        });
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setFetchState({ 
            state: "rejected", 
            error 
          });
        }
      });

      return () => {
        controller.abort();
      }
    }, [fetchState]);

    // ...
    return (
      <div>
        {fetchState.state === "loading" && <p>Loading...</p>}
        {fetchState.state === "fulfilled" && <p>Data: {fetchState.date}</p>}
        {fetchState.state === "rejected" && <p>Error: {String(fetchState.error)}</p>}
      </div>
    );
}

export default Fetchonce;