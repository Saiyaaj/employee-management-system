import { useContext } from 'react'
import PropTypes from 'prop-types'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ changeUser, data, setLoggedInUserData }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, action) => {
    if (!data?.email || !Array.isArray(userData)) return

    const updatedEmployees = userData.map((employee) => {
      if (employee.email !== data.email) return employee

      const updatedTasks = employee.tasks.map((task, idx) => {
        if (idx !== taskIndex) return task
        if (action === 'accept') {
          return { ...task, active: true, newTask: false, completed: false, failed: false }
        }
        if (action === 'complete') {
          return { ...task, active: false, newTask: false, completed: true, failed: false }
        }
        if (action === 'fail') {
          return { ...task, active: false, newTask: false, completed: false, failed: true }
        }
        return task
      })

      const taskCounts = updatedTasks.reduce(
        (counts, task) => {
          if (task.active) counts.active += 1
          if (task.newTask) counts.newTask += 1
          if (task.completed) counts.completed += 1
          if (task.failed) counts.failed += 1
          return counts
        },
        { active: 0, newTask: 0, completed: 0, failed: 0 }
      )

      return { ...employee, tasks: updatedTasks, taskCounts }
    })

    setUserData(updatedEmployees)

    const updatedEmployee = updatedEmployees.find((employee) => employee.email === data.email)
    if (updatedEmployee) {
      setLoggedInUserData(updatedEmployee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
    }
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <main className='min-h-screen bg-slate-950 text-slate-100'>
      <div className='relative overflow-hidden'>
        <div className='pointer-events-none absolute -left-16 top-12 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl' />
        <div className='pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl' />

        <div className='relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <Header changeUser={changeUser} data={data} role='employee' />

          <section className='grid gap-6 xl:grid-cols-[1.4fr_0.9fr]'>
            <div className='rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl'>
              <span className='inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300'>My workspace</span>
              <h1 className='mt-5 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl'>See your tasks with clarity.</h1>
              <p className='mt-4 max-w-2xl text-base leading-7 text-slate-400'>A clean personal dashboard built for fast task review, status tracking, and polished mobile responsiveness.</p>
            </div>

            <div className='space-y-6'>
              <div className='rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-400'>Dashboard summary</p>
                <div className='mt-5 grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-[1.75rem] bg-slate-950/85 p-5 shadow-lg shadow-slate-950/10'>
                    <p className='text-sm uppercase tracking-[0.35em] text-slate-500'>Open tasks</p>
                    <p className='mt-4 text-3xl font-semibold text-slate-100'>{data?.tasks?.length || 0}</p>
                  </div>
                  <div className='rounded-[1.75rem] bg-slate-950/85 p-5 shadow-lg shadow-slate-950/10'>
                    <p className='text-sm uppercase tracking-[0.35em] text-slate-500'>Completed</p>
                    <p className='mt-4 text-3xl font-semibold text-emerald-300'>{data?.taskCounts?.completed || 0}</p>
                  </div>
                </div>
              </div>
              <div className='rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-400'>Quick insight</p>
                <p className='mt-4 text-slate-300'>Keep your active work visible and know exactly how many tasks are waiting for action each day.</p>
              </div>
            </div>
          </section>

          <section className='mt-8 space-y-6'>
            <div className='rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
              <TaskListNumbers data={data} />
            </div>
            <div className='rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
              <TaskList data={data} onTaskAction={updateTaskStatus} />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

EmployeeDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  setLoggedInUserData: PropTypes.func.isRequired,
}

export default EmployeeDashboard