/**
 * ChatGPTに聞いて出てきた重い計算を行う関数
 * @param {*} iterations 試行回数
 * @returns 計算後の値を返す
 */

export const heavyfunc = (iterations) => {
  return new Promise((resolve) => {
    let result = 0;
    // 重い計算を段階的に行う
    const calculateChunk = (start, end) => {
      for (let i = start; i < end; i++) {
        result += Math.sqrt(i) * Math.sin(i) * Math.cos(i); // 重い計算
      }
    };

    const chunkSize = 10000; // 1回の計算で処理する量
    let current = 0;

    const processNextChunk = () => {
      const end = Math.min(current + chunkSize, iterations);
      calculateChunk(current, end);
      current = end;

      if (current < iterations) {
        setTimeout(processNextChunk, 0); // 次のチャンクを非同期的にスケジュール
      } else {
        resolve(result);
      }
    };

    processNextChunk();
  });
};
