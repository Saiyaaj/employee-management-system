import { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({ handleLogin, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.45)]'>
        <div className='mb-8 text-center'>
          <p className='text-xs uppercase tracking-[0.4em] text-cyan-400'>EMS secure login</p>
          <h1 className='mt-4 text-3xl font-semibold text-slate-100'>Welcome back</h1>
          <p className='mt-2 text-sm text-slate-400'>Sign in to access the admin and employee dashboard.</p>
        </div>

        <form onSubmit={submitHandler} className='space-y-5'>
          <div>
            <label className='mb-2 block text-sm font-medium text-slate-300'>Email address</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='hello@company.com'
              className='w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-slate-300'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter password'
              className='w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            />
          </div>

          <button className='w-full rounded-3xl bg-cyan-500 px-4 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400'>Log in</button>

          {error ? <p className='text-center text-sm text-rose-400'>{error}</p> : null}
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default Login