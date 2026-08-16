import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <section className='rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
      <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-400'>Team summary</p>
          <h2 className='mt-2 text-2xl font-semibold text-slate-100'>Employee task load</h2>
        </div>
        <span className='inline-flex items-center rounded-full bg-slate-950/80 px-4 py-2 text-sm text-slate-300'>Employees: {Array.isArray(userData) ? userData.length : 0}</span>
      </div>

      <div className='overflow-x-auto rounded-[1.75rem] border border-slate-800'>
        <div className='min-w-[680px]'>
          <div className='grid gap-4 bg-slate-950/90 px-4 py-4 text-xs uppercase tracking-[0.32em] text-slate-500 sm:grid-cols-[1.5fr_repeat(4,1fr)]'>
            <span>Employee</span>
            <span className='text-right'>New</span>
            <span className='text-right'>Active</span>
            <span className='text-right'>Completed</span>
            <span className='text-right'>Failed</span>
          </div>
          <div className='divide-y divide-slate-800'>
            {Array.isArray(userData) && userData.length > 0 ? (
              userData.map((employee) => (
                <div key={employee.id} className='grid gap-4 px-4 py-4 text-sm text-slate-100 sm:grid-cols-[1.5fr_repeat(4,1fr)]'>
                  <span className='font-medium'>{employee.firstName}</span>
                  <span className='text-right text-cyan-300'>{employee.taskCounts?.newTask || 0}</span>
                  <span className='text-right text-amber-300'>{employee.taskCounts?.active || 0}</span>
                  <span className='text-right text-emerald-300'>{employee.taskCounts?.completed || 0}</span>
                  <span className='text-right text-rose-300'>{employee.taskCounts?.failed || 0}</span>
                </div>
              ))
            ) : (
              <div className='px-4 py-8 text-center text-sm text-slate-400'>No employee data available yet.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllTask