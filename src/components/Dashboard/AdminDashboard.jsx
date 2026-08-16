import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = ({ changeUser }) => {
  const [userData] = useContext(AuthContext)

  const totals = useMemo(() => {
    if (!Array.isArray(userData)) {
      return { employees: 0, tasks: 0, newTask: 0, active: 0, completed: 0, failed: 0 }
    }

    return userData.reduce(
      (acc, employee) => {
        acc.employees += 1
        acc.tasks += Array.isArray(employee.tasks) ? employee.tasks.length : 0
        acc.newTask += employee.taskCounts?.newTask || 0
        acc.active += employee.taskCounts?.active || 0
        acc.completed += employee.taskCounts?.completed || 0
        acc.failed += employee.taskCounts?.failed || 0
        return acc
      },
      { employees: 0, tasks: 0, newTask: 0, active: 0, completed: 0, failed: 0 }
    )
  }, [userData])

  return (
    <main className='min-h-screen bg-slate-950 text-slate-100'>
      <div className='relative overflow-hidden'>
        <div className='pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl' />
        <div className='pointer-events-none absolute right-0 top-32 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl' />
        <div className='pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-slate-950/90 to-transparent' />

        <div className='relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <Header changeUser={changeUser} role='admin' />

          <section className='grid gap-6 xl:grid-cols-[1.4fr_0.9fr]'>
            <div className='space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl'>
              <div className='space-y-6'>
                <div className='space-y-3'>
                  <span className='inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300'>Admin Landing</span>
                  <h1 className='text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl'>Manage tasks with style and speed.</h1>
                  <p className='max-w-2xl text-base leading-7 text-slate-400'>A premium dashboard designed to scale with your workforce. Assign tasks, review employee performance, and keep operations running smoothly from a clean central view.</p>
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-[1.75rem] bg-slate-950/80 p-5 shadow-lg shadow-slate-950/10'>
                    <p className='text-sm uppercase tracking-[0.35em] text-slate-500'>Employees</p>
                    <p className='mt-4 text-4xl font-semibold text-cyan-300'>{totals.employees}</p>
                  </div>
                  <div className='rounded-[1.75rem] bg-slate-950/80 p-5 shadow-lg shadow-slate-950/10'>
                    <p className='text-sm uppercase tracking-[0.35em] text-slate-500'>Total tasks</p>
                    <p className='mt-4 text-4xl font-semibold text-slate-100'>{totals.tasks}</p>
                  </div>
                </div>
              </div>

              <div className='grid gap-4 md:grid-cols-3'>
                {[
                  { title: 'New tasks', value: totals.newTask, accent: 'text-cyan-300' },
                  { title: 'Active projects', value: totals.active, accent: 'text-amber-300' },
                  { title: 'Completed wins', value: totals.completed, accent: 'text-emerald-300' },
                ].map((item) => (
                  <article key={item.title} className='rounded-[1.75rem] bg-slate-950/80 p-5 shadow-lg shadow-slate-950/10'>
                    <p className='text-sm uppercase tracking-[0.35em] text-slate-500'>{item.title}</p>
                    <p className={`mt-4 text-3xl font-semibold ${item.accent}`}>{item.value}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className='space-y-6'>
              <div className='rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-400'>Focus areas</p>
                <h2 className='mt-4 text-2xl font-semibold text-slate-100'>Priority actions</h2>
                <div className='mt-6 space-y-4 text-sm text-slate-300'>
                  <div className='rounded-3xl bg-slate-950/80 p-4'>
                    <p className='font-semibold text-slate-100'>Assign high-impact tasks</p>
                    <p className='mt-2 text-slate-400'>Keep your team aligned by assigning tasks with clear deadlines.</p>
                  </div>
                  <div className='rounded-3xl bg-slate-950/80 p-4'>
                    <p className='font-semibold text-slate-100'>Track progress daily</p>
                    <p className='mt-2 text-slate-400'>Review employee performance and rebalance work across the team.</p>
                  </div>
                  <div className='rounded-3xl bg-slate-950/80 p-4'>
                    <p className='font-semibold text-slate-100'>Keep the UI clean</p>
                    <p className='mt-2 text-slate-400'>A simple layout helps reduce churn and keeps focus on what matters.</p>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section className='mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]'>
            <CreateTask />
            <AllTask />
          </section>
        </div>
      </div>
    </main>
  )
}

AdminDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
}

export default AdminDashboard