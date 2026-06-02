'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlus, FaEdit, FaTrash, FaImage, FaSignOutAlt } from 'react-icons/fa';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'gallery'>('overview');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-navy text-white shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-saffron">
            🕉️ Admin Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      <div className="container py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === 'overview'
                ? 'border-b-2 border-saffron text-saffron'
                : 'text-gray-600 hover:text-navy'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === 'events'
                ? 'border-b-2 border-saffron text-saffron'
                : 'text-gray-600 hover:text-navy'
            }`}
          >
            Event Management
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === 'gallery'
                ? 'border-b-2 border-saffron text-saffron'
                : 'text-gray-600 hover:text-navy'
            }`}
          >
            Gallery
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">Dashboard Overview</h2>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="card p-6">
                <h3 className="text-gray-600 font-semibold mb-2">Upcoming Trips</h3>
                <p className="text-4xl font-bold text-saffron">3</p>
              </div>
              <div className="card p-6">
                <h3 className="text-gray-600 font-semibold mb-2">Completed Trips</h3>
                <p className="text-4xl font-bold text-saffron">12</p>
              </div>
              <div className="card p-6">
                <h3 className="text-gray-600 font-semibold mb-2">Total Inquiries</h3>
                <p className="text-4xl font-bold text-saffron">45</p>
              </div>
              <div className="card p-6">
                <h3 className="text-gray-600 font-semibold mb-2">Gallery Photos</h3>
                <p className="text-4xl font-bold text-saffron">128</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-navy mb-6">Recent Activities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-saffron pl-4 py-2">
                  <p className="font-semibold text-navy">New inquiry from Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
                <div className="border-l-4 border-saffron pl-4 py-2">
                  <p className="font-semibold text-navy">Kashi Yatra event created</p>
                  <p className="text-sm text-gray-600">1 day ago</p>
                </div>
                <div className="border-l-4 border-saffron pl-4 py-2">
                  <p className="font-semibold text-navy">Gallery photos uploaded</p>
                  <p className="text-sm text-gray-600">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-navy">Event Management</h2>
              <button className="flex items-center gap-2 btn-primary">
                <FaPlus /> Create New Event
              </button>
            </div>

            {/* Events Table */}
            <div className="card overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Event Title</th>
                    <th className="px-6 py-4 text-left font-semibold">Date</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Seats</th>
                    <th className="px-6 py-4 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">Kashi–Prayagraj–Ayodhya Yatra</td>
                    <td className="px-6 py-4">15-Oct-2026</td>
                    <td className="px-6 py-4">₹14,999</td>
                    <td className="px-6 py-4">25</td>
                    <td className="px-6 py-4 flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800 transition"><FaEdit /></button>
                      <button className="text-red-600 hover:text-red-800 transition"><FaTrash /></button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">Char Dham Yatra</td>
                    <td className="px-6 py-4">01-Nov-2026</td>
                    <td className="px-6 py-4">₹24,999</td>
                    <td className="px-6 py-4">20</td>
                    <td className="px-6 py-4 flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800 transition"><FaEdit /></button>
                      <button className="text-red-600 hover:text-red-800 transition"><FaTrash /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-navy">Gallery Management</h2>
              <button className="flex items-center gap-2 btn-primary">
                <FaImage /> Upload Photos
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card overflow-hidden">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <FaImage className="text-gray-400 text-4xl" />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-semibold text-gray-700">Photo {i + 1}</p>
                    <button className="text-red-600 hover:text-red-800 transition">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
