import React, { useState } from 'react'
import userImg from "../assets/user.png"
import DashboardCard from './user-dashboard/DashboardCard'

function UserDashboard() {
  const dashboardCards = {
    overview: [
      { title: "Total Appointments", value: 12 },
      { title: "Upcoming Test", value: "Blood Test (Apr 20)" },
      { title: "Last Report", value: "CBC Report (Apr 14)" },
    ],
    appointments: [
      { title: "Upcoming Appointments", value: "Blood Test (Apr 20)" },
      { title: "Past Appointments", value: "Blood Test (Apr 14)" },
      { title: "Appointment status", value: "Completed" },
    ],
    reports: [
      { title: "CBC Report", value: "Apr 14, 2024" },
      { title: "LFT Report", value: "Mar 30, 2024" },
    ],
    payments: [
      { title: "Total Paid", value: "₹1500" },
      { title: "Pending Amount", value: "₹500" },
    ],
    settings: [],
  };

    

  const [activeState, setActiveState] = useState("overview");

  const cardItems = dashboardCards[activeState] || [];

  return (
    <div className="min-h-screen w-full px-10 flex bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-1/4 bg-blue-300/10 p-6">
        <div className="mb-10 flex flex-col items-start">
          {/* Profile picture + name */}
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-4">
            <img src={userImg} alt="user" className='w-full rounded-full' />
          </div>
          <h2 className="text-center font-semibold">Gourav Patel</h2>
          <p className="text-center text-sm text-gray-500">gourav@email.com</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          <button
            onClick={() => setActiveState("overview")}
          className="text-left cursor-pointer w-full font-medium text-orange-600">Overview</button>
          <button 
          onClick={() => setActiveState("appointments")}
          className="text-left cursor-pointer w-full text-gray-700">Appointments</button>
          <button 
            onClick={() => setActiveState("reports")}
          className="text-left cursor-pointer w-full text-gray-700 hover:underline transition-all duration-300 ">Reports</button>
          <button
            onClick={() => setActiveState("payments")}
          className="text-left cursor-pointer w-full text-gray-700">Payments</button>
          <button 
          onClick={() => setActiveState("settings")}
          className="text-left cursor-pointer w-full text-gray-700">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6 bg-rose-50/30 ">
        
        {/* Top wide card (Welcome / overview) */}
        <section className="bg-white rounded-xl shadow p-6">
          <h1 className="text-xl font-semibold">Welcome back, Gourav 👋</h1>
          <p className="text-gray-500 mt-1">Here's your health dashboard overview</p>
        </section>

        {/* Grid Section - 2x2 cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            cardItems.map((item) => (
              <DashboardCard title={item.title} value={item.value} />
            ))
          }
          {/* <DashboardCard title="Total Appointments" value="12" />
          <DashboardCard title="Upcoming Test" value="Blood Test (Apr 20)" />
          <DashboardCard title="Last Report" value="CBC Report - Apr 14" /> */}
          {/* <DashboardCard title="Wallet Balance" value="₹ 500" /> */}
        </section>
      </main>
    </div>
  )
}

export default UserDashboard