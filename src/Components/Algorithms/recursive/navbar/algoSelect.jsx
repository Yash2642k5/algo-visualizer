import React from 'react';

function AlgoSelect({
  value,
  onChange,
  options,
  label,
  isDisabled = false,
}) {
  return (
    <div className='flex flex-col items-start gap-1'>
      <label className='text-xs text-gray-700 ml-1'>{label}</label>
      <select
        className='bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition ease-in active:ring-0 p-2 min-w-[200px]'
        disabled={isDisabled}
        value={value}
        onChange={onChange}
      >
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AlgoSelect;
