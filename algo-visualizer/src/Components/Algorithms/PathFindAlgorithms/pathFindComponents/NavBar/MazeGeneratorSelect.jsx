import React from 'react'

function MazeGeneratorSelect(
    {
        value,
        onChange,
        options,
        label,
        isDisabled,
    }
) {

    return (
        <div className='flex flex-col items-start gap-1'>
            <label className='text-xs text-gray-300 ml-1'>
                {label}
            </label>
            <select
            disabled={isDisabled}
            className='bg-gray-700 rounded-md cursor-pointer hover:bg-gray-800 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full'

            id={value}
            value={value}
            onChange={onChange}
            >
                {
                    options.map((op) => (
                        <option key={op.value} value={op.value}>
                            {op.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default MazeGeneratorSelect