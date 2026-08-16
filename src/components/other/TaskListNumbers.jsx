import PropTypes from 'prop-types'

const TaskListNumbers = ({ data }) => {
  const counts = data?.taskCounts || {}

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      <div className='rounded-[1.75rem] border border-cyan-500/20 bg-slate-950/90 p-6 shadow-lg shadow-slate-950/10'>
        <p className='text-sm uppercase tracking-[0.35em] text-slate-400'>New</p>
        <p className='mt-4 text-4xl font-semibold text-cyan-300'>{counts.newTask || 0}</p>
      </div>
      <div className='rounded-[1.75rem] border border-amber-500/20 bg-slate-950/90 p-6 shadow-lg shadow-slate-950/10'>
        <p className='text-sm uppercase tracking-[0.35em] text-slate-400'>Active</p>
        <p className='mt-4 text-4xl font-semibold text-amber-300'>{counts.active || 0}</p>
      </div>
      <div className='rounded-[1.75rem] border border-emerald-500/20 bg-slate-950/90 p-6 shadow-lg shadow-slate-950/10'>
        <p className='text-sm uppercase tracking-[0.35em] text-slate-400'>Completed</p>
        <p className='mt-4 text-4xl font-semibold text-emerald-300'>{counts.completed || 0}</p>
      </div>
      <div className='rounded-[1.75rem] border border-rose-500/20 bg-slate-950/90 p-6 shadow-lg shadow-slate-950/10'>
        <p className='text-sm uppercase tracking-[0.35em] text-slate-400'>Failed</p>
        <p className='mt-4 text-4xl font-semibold text-rose-300'>{counts.failed || 0}</p>
      </div>
    </div>
  )
}

TaskListNumbers.propTypes = {
  data: PropTypes.shape({
    taskCounts: PropTypes.shape({
      newTask: PropTypes.number,
      completed: PropTypes.number,
      active: PropTypes.number,
      failed: PropTypes.number,
    }),
  }).isRequired,
}

export default TaskListNumbers