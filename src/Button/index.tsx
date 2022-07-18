import React from 'react';

export default (props: { onClick?: () => void; label: string }) => (
  <button
    className="flex justify-center items-center h-8 w-20 bg-slate-100 active:bg-slate-200 outline outline-1 outline-slate-200 rounded select-none"
    onClick={props.onClick}
  >
    <span>{props.label}</span>
  </button>
);
