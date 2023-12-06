import React from 'react'

const Button = ({ title, iter, isSelected, setselected }) => {
   return (
    <div
      onClick={() => setselected(iter)}
      className={`px-4 py-2 rounded-3xl text-[0.95rem] hover:bg-yellow-500 w-max h-max m-2 cursor-pointer ${isSelected? 'bg-yellow-500 font-bold':'bg-slate-200 font-md'}`}
    >
      {title}
    </div>
  );
};



export default Button