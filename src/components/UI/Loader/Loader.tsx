import type { FC } from 'react';
//import './Loader.module.css';

const Loader: FC = () => {
  
    return (
      <div className="w-10 h-10 border-4 border-[#f3f3f3] border-t-[#3498db] rounded-full animate-spin"></div>
    );
};

export default Loader;
