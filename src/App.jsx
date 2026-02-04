import { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Landing Page" />
          <Tab label="Dashboard" />
          <Tab label="Admin Panel" />
        </Tabs>
      </Box>

      {activeTab === 0 && <LandingPage />}
      {activeTab === 1 && <Dashboard />}
      {activeTab === 2 && <AdminPanel />}
    </Box>
  )
}

export default App