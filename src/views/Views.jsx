import { Suspense } from 'react';
import AllRoutes from '../route/AllRoutes';

const Views = () => {

  return (
    <Suspense fallback={<></>}>
      <AllRoutes />
    </Suspense>
  );
};

export default Views;
