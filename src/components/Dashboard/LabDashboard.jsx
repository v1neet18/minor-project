import React, { useState } from 'react'
import labPic from "../../assets/glab.png"
import DashboardCard from '../user-dashboard/DashboardCard';

function LabDashboard() {
  const labDashboardCards = {
    overview: [
      { title: "Total Appointments", value: 28 },
      { title: "Pending Sample Collections", value: 5 },
      { title: "Reports to Upload", value: 3 },
      { title: "Today's Bookings", value: 6 },
    ],
    requestManagement: [
      { title: "New Test Requests", value: "View & Manage" },
      { title: "Appointment Actions", value: "Accept / Reject" },
      { title: "Patient Details", value: "View Info" },
    ],
    reports: [
      { title: "Upload Reports", value: "PDF, Images, etc." },
      { title: "View Uploaded Reports", value: "All Records" },
      { title: "Filter Reports", value: "By Date / Patient / Test" },
    ],
    profileSettings: [
      { title: "Lab Name", value: "XYZ Diagnostics" },
      { title: "Location & Timings", value: "9 AM - 6 PM, Mon-Sat" },
      { title: "Tests & Pricing", value: "Manage Available Tests" },
      { title: "Payment Settings", value: "COD / UPI" },
    ],
    payments: [
      { title: "Total Received", value: "₹12,500" },
      { title: "Pending Dues", value: "₹2,000" },
      { title: "Export Records", value: "Download CSV" },
    ],
  };
  

    

  const [activeState, setActiveState] = useState("overview");

  const cardItems = labDashboardCards[activeState] || [];

  return (
    <div className="min-h-screen w-full px-10 flex bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-1/4 bg-blue-300/10 p-6">
        <div className="mb-10 flex flex-col items-start">
          {/* Profile picture + name */}
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-4">
            <img src={labPic} alt="user" className='w-full rounded-full' />
          </div>
          <h2 className="text-center font-semibold">Gourav Pathology</h2>
          <p className="text-center text-sm text-gray-500">patho@email.com</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          <button
            onClick={() => setActiveState("overview")}
          className="text-left cursor-pointer w-full font-medium text-orange-600">Overview</button>
          <button 
          onClick={() => setActiveState("requestManagement")}
          className="text-left cursor-pointer w-full text-gray-700">Request Management</button>
          <button 
            onClick={() => setActiveState("reports")}
          className="text-left cursor-pointer w-full text-gray-700 hover:underline transition-all duration-300 ">Reports</button>
          <button
            onClick={() => setActiveState("profileSettings")}
          className="text-left cursor-pointer w-full text-gray-700">Profile Settings</button>
          <button 
          onClick={() => setActiveState("payments")}
          className="text-left cursor-pointer w-full text-gray-700">Payments</button>
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

export default LabDashboard