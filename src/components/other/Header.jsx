import PropTypes from 'prop-types'

const Header = ({ changeUser, data, role }) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser?.('')
  }

  const displayName = data?.firstName || 'Admin'
  const roleLabel = role === 'employee' ? 'Employee Dashboard' : 'Admin Dashboard'

  return (
    <header className='mb-8 rounded-[2rem] border border-white/10 bg-slate-900/95 px-6 py-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
      <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-center gap-4'>
          <div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-bold text-slate-950'>EMS</div>
          <div>
            <p className='text-xs uppercase tracking-[0.35em] text-cyan-400'>{roleLabel}</p>
            <h1 className='mt-2 text-3xl font-semibold text-slate-100'>Hi, {displayName}</h1>
            {data?.email ? <p className='mt-1 text-sm text-slate-400'>{data.email}</p> : null}
          </div>
        </div>
        <button
          onClick={logOutUser}
          className='inline-flex items-center justify-center rounded-3xl bg-rose-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-400'>
          Sign out
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  changeUser: PropTypes.func,
  data: PropTypes.object,
  role: PropTypes.string,
}

export default Header