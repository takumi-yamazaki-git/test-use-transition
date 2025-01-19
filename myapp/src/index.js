import React from "react";
import ReactDOM from "react-dom/client";
import { Test } from "./Test";
import { CountButton } from "./CountButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>React useTransitionテスト</h1>
    <p>
      重い処理を行っているとき、useTransitionが設定されていると
      <br />
      そのstateの更新優先度が下がるため、
      <br />
      他のstate変更を優先して行うことができます。
    </p>
    <p> useTransitionの有無でUIフリーズの違いを確認するためのボタン</p>
    <Test />
    <p>UIフリーズ確認用のカウントボタン</p>
    <CountButton />
  </React.StrictMode>,
);
