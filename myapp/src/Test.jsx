import React, { useState, useTransition } from "react";

import { heavyfunc } from "./heavyfunc";

export const Test = () => {
  const [value, setValue] = useState("初期値");
  const [isPending, startTransition] = useTransition();

  const heavyFuncHandler = async () => {
    const result = await heavyfunc(5000000);
    setValue(result);
  };

  const heavyFuncTransitionHandler = async () => {
    startTransition(async () => {
      const result = await heavyfunc(5000000);
      setValue(result);
    });
  };

  return (
    <>
      <button
        onClick={() => {
          setValue("初期値");
        }}
      >
        stateリセット
      </button>
      <button
        onClick={async () => {
          setValue(heavyFuncHandler());
        }}
      >
        激重処理(useTransition無し)
      </button>

      <button
        onClick={async () => {
          setValue(heavyFuncTransitionHandler());
        }}
      >
        激重処理(useTransition有り)
      </button>
      <div>{isPending ? "ローディング中" : value}</div>
    </>
  );
};
