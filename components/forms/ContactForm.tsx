'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  fullName: z.string().min(1, { message: 'Full Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message is required' }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    console.log(data)
  }
  return (
    <div>
      <h1 className='text-4xl font-bold my-6'>Get in touch</h1>
      <p className='my-6'>
        Feel free to contact us and we will get back to you as soon as possible
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            {...register('fullName')}
            id='fullName'
            type='text'
            placeholder='John Doe'
            className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2 mt-2'
          />
          {errors.fullName && (
            <span className='text-red-500'>{errors.fullName.message}</span>
          )}
        </div>

        <div className='w-full mb-4'>
          <label htmlFor='email'>Email Address</label>
          <input
            {...register('email')}
            id='email'
            type='email'
            placeholder='johndoe@example.co.za'
            className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2 mt-2'
          />
          {errors.email && (
            <span className='text-red-500'>{errors.email.message}</span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='message'>Message:</label>
          <textarea
            {...register('message')}
            id='message'
            rows={4}
            placeholder='Your Message'
            className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2 mt-2'
          />
          {errors.message && (
            <span className='text-red-500'>{errors.message.message}</span>
          )}
        </div>

        <div>
          <button
            disabled={isSubmitting}
            className='w-full bg-green-500 text-white p-2 rounded-lg'
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}
