import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { hero, modern } from '../../assets/images/julia/julia_images'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({name: '', email: '',phone: '', message: ''})
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
    console.log(form)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Julia Smakava',
        from_email: form.email,
        to_email: 'j.v.smakova@gmail.com',
        phone: form.phone,
        email: form.email,
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false)
      //TODO Show success message
      //TODO Hide the alert
      setForm({name: '', email: '',phone: '', message: ''})
    }).catch((error)=>{
      setIsLoading(false)
      console.log(error)
      //TODO show error message
    })
  }

  return (
<section
  className="bg-cover bg-center bg-no-repeat min-h-screen flex items-top justify-center text-gray-700"
  style={{ backgroundImage: `url(${modern})` }}
>
    {/* <img src={hero} alt='hero' className='absolute inset-0 w-full h-full object-cover object-center'/> */}
    <div className='+bg-[rgba(255,255,255,0.1)] rounded-xl p-4 font-poppins '>
      <div className='flex-1 min-w-[50%] flex flex-col '>
        <h1 className='animate-in-right head-text ' >Postryg z Juliei</h1>
        <form className='w-full flex flex-col gap- mt-4'
          onSubmit={handleSubmit}>
          <label className='mb-2 font-semibold'>
            Nazwa
            <input
              type='text'
              name='name'
              className='input bg-[rgb(6,11,25)]'
              placeholder='np. Zlatko'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>
          <label className='mb-2  font-semibold'>
            Email
            <input
              type='text'
              name='email'
              className='input '
              placeholder='przykład@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>
          <label className='mb-2  font-semibold'>
            Telefon
            <input
              type='text'
              name='phone'
              className='input '
              placeholder='555-0123'
              required
              value={form.phone}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>
          {/* <label className='mb-2 font-semibold'>
            Twoja wiadomość
            <textarea
              name='message'
              rows={5}
              className='textarea '
              placeholder='Daj mi znać, jak mogę pomóc!'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label> */}
          <button
          type="submit"
          className='mt-4 bg-white hover:bg-gray-700 hover:text-white rounded-xl py-3 text-black animate-up'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
            >
            {isLoading ? 'Sending...' : 'Ostrzyc Fryzurę!'}
          </button>
        </form>
      </div>
      </div>
      

    </section>
  )
}

export default Contact
