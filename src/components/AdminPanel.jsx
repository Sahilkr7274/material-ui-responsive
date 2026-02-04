import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent, Switch, FormControlLabel, useMediaQuery } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { lightTheme, darkTheme } from '../theme'

const AdminPanel = () => {
  const [darkMode, setDarkMode] = useState(false)
  const theme = darkMode ? darkTheme : lightTheme
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const panels = [
    { title: 'Users', count: '1,234', color: 'primary' },
    { title: 'Orders', count: '567', color: 'secondary' },
    { title: 'Revenue', count: '$12,345', color: 'success' },
    { title: 'Analytics', count: '89%', color: 'info' }
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                icon={<Brightness7 />}
                checkedIcon={<Brightness4 />}
              />
            }
            label="Dark Mode"
          />
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard Overview
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {panels.map((panel, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" color={`${panel.color}.main`}>
                    {panel.title}
                  </Typography>
                  <Typography variant="h4">{panel.count}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Main Content Panel
                </Typography>
                <Typography variant="body1">
                  This panel takes full width on mobile and 2/3 width on desktop.
                  The layout automatically adjusts based on screen size.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" sx={{ mr: 2 }}>
                    Primary Action
                  </Button>
                  <Button variant="outlined">
                    Secondary Action
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Sidebar Panel
                </Typography>
                <Typography variant="body2">
                  This sidebar collapses below the main content on mobile devices.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" color="secondary" fullWidth>
                    Sidebar Action
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default AdminPanel