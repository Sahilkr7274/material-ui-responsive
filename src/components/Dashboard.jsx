import { useState } from 'react'
import { AppBar, Toolbar, Typography, Drawer, IconButton, Box, Grid, Card, CardContent, useMediaQuery, useTheme } from '@mui/material'
import { Menu as MenuIcon, Dashboard, Settings, Analytics } from '@mui/icons-material'
import styled from 'styled-components'

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
  }
`

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    content: `Dashboard card content ${i + 1}`
  }))

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <StyledDrawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        <Toolbar />
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Dashboard sx={{ mr: 1 }} />
            <Typography>Overview</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Analytics sx={{ mr: 1 }} />
            <Typography>Analytics</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Settings sx={{ mr: 1 }} />
            <Typography>Settings</Typography>
          </Box>
        </Box>
      </StyledDrawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: isMobile || !sidebarOpen ? 0 : '240px',
          transition: 'margin 0.3s'
        }}
      >
        <Toolbar />
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="body2">{card.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard