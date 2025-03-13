import { Suspense } from 'react';
import AllRoutes from '../route/AllRoutes';
// import ImageGenerator from './ImageGenerator';

const Views = () => {

  return (
    <Suspense fallback={<></>}>
      <AllRoutes />
    </Suspense>
  );
};

export default Views;
