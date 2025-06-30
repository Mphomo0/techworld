import React from 'react'
import PageWrapper from '@/components/global/PageWrapper'
import HoursOfOperation from '@/components/sections/contact/HoursOfOperation'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactPage() {
  return (
    <>
      <PageWrapper
        title='Contact'
        link={{ href: '/contact', text: 'Contact' }}
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col md:flex-row gap-8 mb-16'>
          <div className='flex-1 bg-gray-200 rounded-lg p-4 w-full md:w-[60%] px-4 md:px-10 mt-16'>
            <ContactForm />
          </div>
          <div className='flex-1 mt-16'>
            <div className='bg-white rounded-lg p-4 shadow-md mb-8'>
              <ContactInfo />
            </div>
            <div className='bg-white rounded-lg p-4 shadow-lg'>
              <div className='my-16'>
                <HoursOfOperation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
