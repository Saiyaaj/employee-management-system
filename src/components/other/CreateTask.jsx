import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const updatedData = userData.map((employee) => {
      if (assignTo.trim().toLowerCase() === employee.firstName.toLowerCase()) {
        return {
          ...employee,
          tasks: [...employee.tasks, task],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1,
          },
        }
      }
      return employee
    })

    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))
    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <section className='rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-400'>New task</p>
          <h2 className='mt-2 text-2xl font-semibold text-slate-100'>Add assignment</h2>
        </div>
        <p className='text-sm text-slate-400'>Assign tasks by employee name and set a deadline.</p>
      </div>

      <form onSubmit={submitHandler} className='mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='space-y-4'>
          <label className='block'>
            <span className='text-sm text-slate-300'>Task title</span>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder='Design update for dashboard'
              className='mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            />
          </label>

          <label className='block'>
            <span className='text-sm text-slate-300'>Deadline</span>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type='date'
              className='mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            />
          </label>

          <label className='block'>
            <span className='text-sm text-slate-300'>Assign to</span>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder='Employee first name'
              className='mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            />
          </label>

          <label className='block'>
            <span className='text-sm text-slate-300'>Category</span>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Design, Dev, QA'
              className='mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            />
          </label>
        </div>

        <div className='space-y-4'>
          <label className='block'>
            <span className='text-sm text-slate-300'>Description</span>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows='10'
              className='mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            />
          </label>
          <button className='w-full rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400'>Create task</button>
        </div>
      </form>
    </section>
  )
}

export default CreateTask