import React, { Suspense, lazy } from "react";

import Loader from "./Loader";

const LowLoad = lazy(() => import("./LowLoad"));
const HeavyLoad = lazy(() => import("./HeavyLoad"));

const LazyLoading = () => {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <LowLoad />
          <HeavyLoad />
        </Suspense>
      </div>
    </>
  );
};

export default LazyLoading;
