import React, { useEffect } from "react";

const PromisesAndAsyncAwait = () => {
  const promiseOne = (paramOne) => {
    return new Promise((resolve, reject) => {
      if (paramOne === "Girish") {
        resolve("Promise Resolved");
      } else {
        reject("Promise Rejected");
      }
    });
  };

  const promiseTwo = (paramTwo) => {
    return new Promise((resolve, reject) => {
      if (paramTwo === "Promise Resolved") {
        resolve("Girish is a Good Boy");
      } else {
        reject("Girish is still a Good Boy");
      }
    });
  };

  //Promises
  const promiseMain = () => {
    promiseOne("Girish")
      .then((firstResponse) => {
        console.log(firstResponse);
        return promiseTwo(firstResponse);
      })
      .then((secondResponse) => {
        console.log(secondResponse);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Async and Await
  const asyncMain = async () => {
    try {
      let res = await promiseOne("Shailesh");
      console.log(res);
      let resTwo = await promiseTwo(res);
      console.log(resTwo);
    } catch (error) {
      console.log(error, "From Async Await");
    }
  };

  useEffect(() => {
    asyncMain();
  });
  useEffect(() => {
    promiseMain();
  });

  return (
    <>
      <div></div>
    </>
  );
};

export default PromisesAndAsyncAwait;
