import React from 'react'

export default function HoursOfOperation() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Hours of Operation</h1>

      <div>
        <p className='flex gap-2'>
          <span>Monday - Friday</span> <span className=''> 9am - 6pm</span>
        </p>
        <p>Saturday: 10am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  )
}
