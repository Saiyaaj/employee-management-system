import PropTypes from 'prop-types'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onTaskAction }) => {
  const taskList = data?.tasks || []

  return (
    <div>
      <div className='mb-6 flex items-center justify-between gap-4'>
        <div>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-400'>Task feed</p>
          <h2 className='mt-2 text-2xl font-semibold text-slate-100'>Your current tasks</h2>
        </div>
        <span className='rounded-full bg-slate-950/80 px-4 py-2 text-sm text-slate-300'>{taskList.length} total</span>
      </div>

      {taskList.length > 0 ? (
        <div className='grid gap-5 lg:grid-cols-2 xl:grid-cols-3'>
          {taskList.map((task, idx) => {
            if (task.active) return <AcceptTask key={idx} data={task} onComplete={() => onTaskAction(idx, 'complete')} onFail={() => onTaskAction(idx, 'fail')} />
            if (task.newTask) return <NewTask key={idx} data={task} onAccept={() => onTaskAction(idx, 'accept')} />
            if (task.completed) return <CompleteTask key={idx} data={task} />
            if (task.failed) return <FailedTask key={idx} data={task} />
            return null
          })}
        </div>
      ) : (
        <div className='rounded-[1.75rem] border border-slate-800 bg-slate-950/90 p-8 text-center text-slate-400'>No tasks yet. Check back once your manager assigns work.</div>
      )}
    </div>
  )
}

TaskList.propTypes = {
  data: PropTypes.shape({
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool,
        newTask: PropTypes.bool,
        completed: PropTypes.bool,
        failed: PropTypes.bool,
      })
    ),
  }),
  onTaskAction: PropTypes.func.isRequired,
}

export default TaskList