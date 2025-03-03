import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const[isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
  }
  const handleFocus = () => {

  }
  const handleBlur = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Dimitry',
        from_email: form.email,
        to_email: 'dzmitrymotuz@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false)
      //TODO Show success message
      //TODO Hide the alert
      setForm({name: '', email: '', message: ''})
    }).catch((error)=>{
      setIsLoading(false)
      console.log(error)
      //TODO show error message
    })
  }

  return (
    <section className="bg-[rgb(6,11,25)]">
      <div className='relative flex lg:flex-row flex-col max-container bg-[rgb(6,11,25)] border-t-2 border-[#141e3b] font-poppins'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className=' animate-in-right head-text text-gray-200' >Get in touch</h1>
        <form className=' w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}>
          <label className=' text-gray-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input-dark bg-[rgb(6,11,25)]'
              placeholder='ex: John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>
          <label className='text-gray-500 font-semibold'>
            Email
            <input
              type='text'
              name='email'
              className='input-dark'
              placeholder='example@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>
          <label className='text-gray-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={5}
              className='textarea-dark'
              placeholder='Let me know if I can help!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>
          <button
          type="submit"
          className='btn-dark animate-up'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
            >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      </div>
      

    </section>
  )
}

export default Contact
