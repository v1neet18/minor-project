import React from 'react'

function DashboardCard({title, value}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-xl font-bold text-gray-800 mt-2">{value}</h2>
  </div>
  )
}

export default DashboardCard