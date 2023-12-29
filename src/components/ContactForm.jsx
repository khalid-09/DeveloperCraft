// import { useState } from 'react';
import mailIcon from '../assets/icons/mail.svg';
import sendIcon from '../assets/icons/send.svg';
import { useForm } from 'react-hook-form';
import Error from './Error';

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // e.preventDefault();
    // console.log(name, email, message);
    // setEmail('');
    // setMessage('');
    // setName('');
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="w-full rounded-2xl border border-stone-700 border-opacity-30 bg-mainBg p-6 transition duration-300 ease-in dark:bg-lightBg">
        <div className=" ml-1 flex items-center gap-2">
          <img src={mailIcon} alt="mail-icon" width={20} height={20} />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#57534e]">Contact</p>
        </div>
        <h3 className="mb-6 ml-1 mt-8 font-poppins text-sm tracking-wide text-stone-300">
          Contact me by filling out the form below, or by sending to{' '}
          <span className="font-semibold italic text-stone-50">
            <a href="mailto:khaliljpc@gmail.com">khaliljpc@gmail.com</a>
          </span>
        </h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              disabled
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              {...register('name', {
                required: 'This field is required',
              })}
              id="name"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-stone-100 border-opacity-10 bg-mainBg px-4 py-3 font-poppins text-stone-500 outline-none focus:border-stone-600 focus:border-opacity-90 dark:bg-lightBg"
            />
            {errors?.name?.message && <Error>{errors.name.message}</Error>}
          </div>
          <div className="">
            <input
              disabled
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              {...register('email', {
                required: 'This field is required',
              })}
              id="email"
              name="emailAddress"
              type="email"
              className="w-full rounded-xl border border-stone-100 border-opacity-10 bg-mainBg px-4  py-3 font-poppins text-stone-500 outline-none focus:border-stone-600 focus:border-opacity-90 dark:bg-lightBg"
              placeholder="Enter your email address"
            />
            {errors?.email?.message && <Error>{errors.email.message}</Error>}
          </div>
          <div className="">
            <textarea
              disabled
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              name="usersMessage"
              id="message"
              minLength={5}
              maxLength={10000}
              {...register('message', {
                required: 'This field is required',
              })}
              rows={3}
              className="w-full rounded-xl border border-stone-100 border-opacity-10 bg-mainBg px-4 py-3 pb-8 font-poppins outline-none focus:border-stone-600 focus:border-opacity-90 dark:bg-lightBg"
              placeholder="Enter your message here..."
            />
            {errors?.message?.message && <Error>{errors.message.message}</Error>}
          </div>
          <div className="flex justify-end">
            <button
              disabled
              className=" flex items-center gap-1 rounded-2xl border border-stone-200 border-opacity-30 bg-white px-6 py-2 font-poppins  font-semibold tracking-wide text-mainBg dark:bg-white "
            >
              Submit
              <img src={sendIcon} alt="mail-icon" width={18} height={18} className="fill-black dark:fill-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
