import { Suspense } from 'react';

const Views = () => {

  return (
    <Suspense fallback={<></>}>
      <div>
        Start!
      </div>
    </Suspense>
  );
};

export default Views;
