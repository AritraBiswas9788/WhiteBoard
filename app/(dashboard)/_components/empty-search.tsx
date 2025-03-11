import Image from 'next/image'
import React from 'react'

const EmptySearch = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image
      src="/empty-search.svg"
      alt="EmptySearch"
      height={140}
      width={140}
      />
      <h2 className='text-2xl font-semibold mt-6'>No Results</h2>
      <p className='text-muted-foreground text-sm mt-2'>Try Searching for something else</p>
    </div>
  )
}

export default EmptySearch
