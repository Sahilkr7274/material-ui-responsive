import { Container, Grid, Typography, Box } from '@mui/material'

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Our Platform
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Feature One
            </Typography>
            <Typography variant="body1">
              This section stacks on mobile and appears side-by-side on larger screens.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Feature Two
            </Typography>
            <Typography variant="body1">
              Responsive design automatically adjusts layout based on screen size.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
        
        <Grid container spacing={3} sx={{ mt: 6 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
              <Typography variant="h6">Service 1</Typography>
              <Typography variant="body2">Mobile: full width, Tablet: half width, Desktop: third width</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3, bgcolor: 'secondary.light', borderRadius: 2 }}>
              <Typography variant="h6">Service 2</Typography>
              <Typography variant="body2">Responsive grid system with breakpoints</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3, bgcolor: 'success.light', borderRadius: 2 }}>
              <Typography variant="h6">Service 3</Typography>
              <Typography variant="body2">Material UI Grid component</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default LandingPage