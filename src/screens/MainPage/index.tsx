import { ReactElement } from 'react';

import Shopping from './Shopping';
import Cart from './Cart';

const MainPage = (): ReactElement => {
  return (
    <div className={'flex flex-col items-center gap-5'}>
      <Shopping />
      <Cart />
    </div>
  );
};
export default MainPage;
