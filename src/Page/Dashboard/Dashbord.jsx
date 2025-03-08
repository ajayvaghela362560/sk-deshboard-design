import React from 'react'
import { Box, Button, Grid2, Tooltip, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.css'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import CurrentRoomStatus from '../../Components/DashboardChart/CurrentRoomStatus';
import LocksStatusChart from '../../Components/DashboardChart/LocksStatusChart';
import BatteryHealthChart from '../../Components/DashboardChart/BatteryHealthChart';
import Footer from '../../Components/Footer/footer';
const Dashboard = ({ STATE }) => {

  const isMenuOpen = STATE?.isMenuOpen;

  return (
    <>
      <Box className={`${styles.dashboard_wrap} ${isMenuOpen ? styles.dashboardOpen : styles.dashboardClose}`}>
        <Box className={styles.dashboard_main_content}>
          <Grid2 container spacing={3}>
            <Grid2 size={{ lg: 8, xs: 12 }}>
              <Box className={styles.dashboard_title}>
                <Box className={styles.welcome_user}>
                  <Typography variant='h1'>Welcome, Lucy Lavender</Typography>
                  <Typography variant='span'>/ Front_Desk Exe.</Typography>
                </Box>
                <Box className={styles.welcome_user}>
                  <Typography>Logged in at /</Typography>
                  <Typography variant='span'>12:45 PM</Typography>
                </Box>
              </Box>
              <Box>
                <Accordion defaultExpanded className={styles.user_status} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography variant='h3'>Occupancy Status, September 22, 2024  <Typography variant='span'>Access Schedules</Typography></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid2 container spacing={2}>
                      <Grid2 size={{ md: 4, sm: 4, xs: 12 }}>
                        <Box className={styles.user_arrivals_card}>
                          <Box className={styles.today_arrivals}>
                            <Button>Today</Button>
                            <Tooltip title="Arrivals" placement="top-start">
                              <Box>
                                <ReportGmailerrorredOutlinedIcon />
                              </Box>
                            </Tooltip>
                          </Box>
                          <Box className={styles.total_arrivals_user}>8
                          </Box>
                          <Typography variant='h3'>Arrivals</Typography>
                        </Box>
                      </Grid2>
                      <Grid2 size={{ md: 4, sm: 4, xs: 12 }}>
                        <Box className={styles.user_arrivals_card}>
                          <Box className={styles.today_arrivals}>
                            <Button>Today</Button>
                          </Box>
                          <Box className={`${styles.total_arrivals_user} ${styles.house_guests}`}>123
                          </Box>
                          <Typography variant='h3'>In-house Guests</Typography>
                        </Box>
                      </Grid2>
                      <Grid2 size={{ md: 4, sm: 4, xs: 12 }}>
                        <Box className={styles.user_arrivals_card}>
                          <Box className={styles.today_arrivals}>
                            <Button>Today</Button>
                          </Box>
                          <Box className={`${styles.total_arrivals_user} ${styles.departures_guests}`}>8
                          </Box>
                          <Typography variant='h3'>Departures</Typography>
                        </Box>
                      </Grid2>
                    </Grid2>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.user_status} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography variant='h3'>Property Status <SyncOutlinedIcon /></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <LocksStatusChart />
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid2>
            <Grid2 size={{ lg: 4 }}>
              <Box>
                <CurrentRoomStatus />
              </Box>
              <Box className={styles.chart_issues}>
                <ReportGmailerrorredOutlinedIcon />
                <Box>
                  <Typography>
                    Issues
                  </Typography>
                  <Typography variant='span'>As of today, September 22, 2024</Typography>
                </Box>
                <Box className={styles.total_issues}>03
                </Box>
              </Box>
              <Box>
                <BatteryHealthChart />
              </Box>
            </Grid2>
          </Grid2>
        </Box>        
        <Footer />
      </Box>
    </>
  )
}

export default Dashboard