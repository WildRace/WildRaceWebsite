"use client";

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/Builds.loader.js",
    dataUrl: "build/Builds.data",
    frameworkUrl: "build/Builds.framework.js",
    codeUrl: "build/Builds.wasm",
  });

  return (
    <div style={{ width: "960px", height: "600px", margin: "0 auto" }}>
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%", background: "black" }}
      />
    </div>
  );
}

export default Game;
