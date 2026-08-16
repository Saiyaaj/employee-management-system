import PropTypes from 'prop-types'

const FailedTask = ({ data }) => {
  return (
    <div className='rounded-[1.75rem] border border-rose-500/20 bg-slate-950/95 p-6 shadow-lg shadow-slate-950/20'>
      <div className='flex items-center justify-between gap-3'>
        <span className='rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-300'>Failed</span>
        <span className='text-sm text-slate-400'>{data.taskDate}</span>
      </div>
      <h2 className='mt-5 text-xl font-semibold text-slate-100'>{data.taskTitle}</h2>
      <p className='mt-3 text-sm leading-6 text-slate-400'>{data.taskDescription}</p>
      <div className='mt-6 flex flex-wrap gap-3'>
        <span className='rounded-3xl bg-slate-950/80 px-3 py-2 text-sm text-slate-300'>{data.category}</span>
      </div>
    </div>
  )
}

FailedTask.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    taskDate: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
  }).isRequired,
}

export default FailedTask