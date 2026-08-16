import PropTypes from 'prop-types'

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className='rounded-[1.75rem] border border-amber-500/20 bg-slate-950/95 p-6 shadow-lg shadow-slate-950/20'>
      <div className='flex items-center justify-between gap-3'>
        <span className='rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300'>Accepted</span>
        <span className='text-sm text-slate-400'>{data.taskDate}</span>
      </div>
      <h2 className='mt-5 text-xl font-semibold text-slate-100'>{data.taskTitle}</h2>
      <p className='mt-3 text-sm leading-6 text-slate-400'>{data.taskDescription}</p>
      <div className='mt-6 flex flex-wrap gap-3'>
        <span className='rounded-3xl bg-slate-950/80 px-3 py-2 text-sm text-slate-300'>{data.category}</span>
        <button onClick={onComplete} className='rounded-3xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400'>Complete</button>
        <button onClick={onFail} className='rounded-3xl bg-rose-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-rose-400'>Fail</button>
      </div>
    </div>
  )
}

AcceptTask.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    taskDate: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onFail: PropTypes.func.isRequired,
}

export default AcceptTask