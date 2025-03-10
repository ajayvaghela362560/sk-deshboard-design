import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import styles from './style.module.css'
import quickcalendar from '../../assets/Icons/quick-calendar.svg'
import quicknotification from '../../assets/Icons/quick-notification.svg'
import logouticon from '../../assets/Icons/logout-icon.svg'
import editcalendar from '../../assets/Icons/calendar-edit.svg'
import Drawer from '@mui/material/Drawer';

const Quicklinks = ({ open, onClose }) => {

  const DrawerList = (
    <Box className={styles.quick_sidemenu}>
      <Link href='#' className={styles.create_access_card} onClick={onClose}>
        <img src={quickcalendar} alt="calender" />
        <Typography>Create Access</Typography>
      </Link>
      <Link href='#' className={styles.create_access_card} onClick={onClose}>
        <img src={editcalendar} alt="calender" />
        <Typography>Edit Access</Typography>
      </Link>
      <Link href='#' className={styles.create_access_card} onClick={onClose}>
        <img src={quicknotification} alt="calender" />
        <Typography>Alerts</Typography>
      </Link>
      <Link href='#' className={styles.create_access_card} onClick={onClose}>
        <img src={logouticon} alt="calender" />
        <Typography>Logout</Typography>
      </Link>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={onClose} sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'transparent',
          maxWidth: '260px',
        }
      }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Quicklinks;