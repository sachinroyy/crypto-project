import { useEffect, useRef } from "react";

function useDevTools(enable = false) {
  const devTools = useRef({});

  useEffect(() => {
    const withDevTools =
      typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
      
    if (enable) {
      if (withDevTools) {
        let toolsObj = window.__REDUX_DEVTOOLS_EXTENSION__.connect();
        Object.assign(devTools.current, toolsObj);
        devTools.current.init({ value: "initial state" });
        // devTools.current.open();
      } else {
        console.log(
          "no dev tools found, make sure you have redux devtools extension :)"
        );
      }
    }

    return () => {
      if (enable) {
        if (withDevTools) {
          window.__REDUX_DEVTOOLS_EXTENSION__?.disconnect();
        }
        Object.assign(devTools.current, {});
        // devTools.current = {};
      }
    };
  }, []);

  return devTools.current;
}

export default useDevTools;
