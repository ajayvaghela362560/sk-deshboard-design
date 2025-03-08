import React from 'react'
import styles from './style.module.css'
import { Avatar, Box, Button, Link, List, ListItem, Menu, MenuItem, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import profileicon from '../../assets/Icons/profile-icon.svg';
import navnotification from '../../assets/Icons/header-notification-icon.svg';
import inboxicon from '../../assets/Icons/inbox-icon.svg';
import searchicon from '../../assets/Icons/search-icon.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import flagiocn from '../../assets/Icons/flag-icon.svg';
import handgif from '../../assets/Icons/hand.gif';

const Header = ({ STATE }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const notificationOpen = Boolean(anchorE2);

  const handleNotificationClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorE2(null);
  }

  const [anchorE3, setAnchorE3] = React.useState(null);
  const messageOpen = Boolean(anchorE3);

  const handleMessageClick = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleMessageClose = () => {
    setAnchorE3(null);
  };

  const [anchorE4, setAnchorE4] = React.useState(null);
  const countryOpen = Boolean(anchorE4);

  const handleCountryClick = (event) => {
    setAnchorE4(event.currentTarget);
  };

  const handleCountryClose = () => {
    setAnchorE4(null);
  };

  const handleMenuClick = () => {
    if (!STATE) return;
    STATE.setisMenuOpen(prev => !prev);
  }

  const isMenuOpen = STATE?.isMenuOpen;

  return (
    <>
      <Box className={`${styles.header_topbar} ${isMenuOpen ? styles.header_expanded : styles.headerCollapsed}`}>
        <Box className={styles.header_title}>
          <Link href='#' onClick={handleMenuClick}>
            <MenuRoundedIcon />
          </Link>
          <Box>
            <Typography variant='h3'>Welcome back, Lucy <img src={handgif} alt="handgif" /></Typography>
            <Typography>Front_Desk Exe.</Typography>
          </Box>
        </Box>
        <Box>
          <List className={styles.navbar_nav}>
            <ListItem className={styles.search_bar}>
              <Link>
                <img src={searchicon} alt="searchicon" />
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleCountryClick}>
                <img src={flagiocn} alt="flagiocn" />
              </Link>
              <Menu
                id="countryDropdown"
                anchorEl={anchorE4}
                open={countryOpen}
                onClose={handleCountryClose}
                MenuListProps={{
                  "aria-labelledby": "countryDropdown",
                }}
                sx={{
                  '& .MuiPaper-elevation': {
                    boxShadow: '0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16)',
                    maxWidth: '110px',
                    right: '40px',
                    width: '100%',
                    borderRadius: '10px',
                  },
                  '& li': {
                    padding: '0px',
                    backgroundColor: 'transparent !important',
                  },
                  '& a':{
                    color:'#000',
                    textDecoration:'unset',
                    display:'flex',
                    alignItems:'center',
                    fontSize:'14px',
                    paddingLeft:'10px',
                    '& img':{
                      width:'35px',
                      height:'35px',
                    }
                  }
                }}
              >
                <MenuItem onClick={handleCountryClose}>
                  <ListItem>
                    <Link>
                      <img src={flagiocn} alt="flagiocn" />
                      English
                    </Link>
                  </ListItem>
                </MenuItem>
                <MenuItem>
                  <Link>
                    <img src={flagiocn} alt="flagiocn" />
                    English
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link>
                    <img src={flagiocn} alt="flagiocn" />
                    English
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link>
                    <img src={flagiocn} alt="flagiocn" />
                    English
                  </Link>
                </MenuItem>
              </Menu>
            </ListItem>
            <ListItem >
              <Link
                id="basic-button"
                aria-controls={messageOpen ? "messagemenu" : undefined}
                aria-haspopup="true"
                aria-expanded={messageOpen ? "true" : undefined}
                onClick={handleMessageClick}
                className={styles.notification_dropdown}
              >
                <img src={navnotification} alt="navnotification" />
                <Box className={`${styles.notification_badge} ${styles.notification_number}`}>120</Box>
              </Link>
              <Menu
                id="messagemenu"
                anchorEl={anchorE3}
                open={messageOpen}
                onClose={handleMessageClose}
                MenuListProps={{
                  "aria-labelledby": "messagemenu",
                }}
                sx={{
                  '& .MuiPaper-elevation': {
                    boxShadow: '0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16)',
                    maxWidth: { sm: '350px', xs: '320px' },
                    right: '40px',
                    width: '100%',
                    left: 'auto !important',
                    borderRadius: '10px',
                  },
                  '& li': {
                    padding: '0px',
                    backgroundColor: 'transparent !important',
                  }
                }}
              >
                <MenuItem onClick={handleMessageClose}>
                  <Box className={styles.notification_panel}>
                    <Box className={styles.notification_header}>
                      <Typography variant='h3'>Notification</Typography>
                      <Box className={styles.header_actions}>
                        <Typography variant='span' className={styles.new_notification}>8 New</Typography>
                      </Box>
                    </Box>

                    <Box className={styles.notification_list}>
                      <Box className={styles.notification_item}>
                        <Box>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                        <Box className={styles.notification_content}>
                          <Typography className={styles.notification_title}>Congratulation Lettie 🎉</Typography>
                          <Typography className={styles.notification_message}>Won the monthly best seller gold badge</Typography>
                          <Typography className={styles.notification_time}>1h ago</Typography>
                        </Box>
                      </Box>
                      <Box className={styles.notification_item}>
                        <Box>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                        <Box className={styles.notification_content}>
                          <Typography className={styles.notification_title}>Congratulation Lettie 🎉</Typography>
                          <Typography className={styles.notification_message}>Won the monthly best seller gold badge</Typography>
                          <Typography className={styles.notification_time}>1h ago</Typography>
                        </Box>
                      </Box>
                      <Box className={styles.notification_item}>
                        <Box>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                        <Box className={styles.notification_content}>
                          <Typography className={styles.notification_title}>Congratulation Lettie 🎉</Typography>
                          <Typography className={styles.notification_message}>Won the monthly best seller gold badge</Typography>
                          <Typography className={styles.notification_time}>1h ago</Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box className={styles.notification_footer}>
                      <Button className={styles.view_all_button}>View all notifications</Button>
                    </Box>
                  </Box>
                </MenuItem>
              </Menu>
            </ListItem>
            <ListItem >
              <Link
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleNotificationClick}
                className={styles.notification_dropdown}
              >
                <img src={inboxicon} alt="inboxicon" />
                <Box className={styles.notification_badge}>44</Box>
              </Link>
              <Menu
                id="notification-menu"
                anchorEl={anchorE2}
                open={notificationOpen}
                onClose={handleNotificationClose}
                MenuListProps={{
                  'aria-labelledby': 'notification-button',
                }}
                sx={{
                  '& .MuiPaper-elevation': {
                    boxShadow: '0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16)',
                    maxWidth: { sm: '350px', xs: '320px' },
                    right: '40px',
                    width: '100%',
                    left: 'auto !important',
                    borderRadius: '10px',
                  },
                  '& li': {
                    padding: '0px',
                    backgroundColor: 'transparent !important',
                  }
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Box className={styles.notification_panel}>
                    <Box className={styles.notification_header}>
                      <Typography variant='h3'>Message</Typography>
                      <Box className={styles.header_actions}>
                        <Typography variant='span' className={styles.new_notification}>8 New</Typography>
                      </Box>
                    </Box>

                    <Box className={styles.notification_list}>
                      <Box className={styles.notification_item}>
                        <Box>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                        <Box className={styles.notification_content}>
                          <Typography className={styles.notification_title}>Congratulation Lettie 🎉</Typography>
                          <Typography className={styles.notification_message}>Won the monthly best seller gold badge</Typography>
                          <Typography className={styles.notification_time}>1h ago</Typography>
                        </Box>
                      </Box>
                      <Box className={styles.notification_item}>
                        <Box>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                        <Box className={styles.notification_content}>
                          <Typography className={styles.notification_title}>Congratulation Lettie 🎉</Typography>
                          <Typography className={styles.notification_message}>Won the monthly best seller gold badge</Typography>
                          <Typography className={styles.notification_time}>1h ago</Typography>
                        </Box>
                      </Box>
                      <Box className={styles.notification_item}>
                        <Box>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                        <Box className={styles.notification_content}>
                          <Typography className={styles.notification_title}>Congratulation Lettie 🎉</Typography>
                          <Typography className={styles.notification_message}>Won the monthly best seller gold badge</Typography>
                          <Typography className={styles.notification_time}>1h ago</Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box className={styles.notification_footer}>
                      <Button className={styles.view_all_button}>View all Message</Button>
                    </Box>
                  </Box>
                </MenuItem>
              </Menu>
            </ListItem>
            <ListItem>
              <Box className={styles.user_profile}>
                <img src={profileicon} alt="Header Avatar" />
                <Box className={styles.user_detail}>
                  <Typography>Lucy Lavender</Typography>
                  <Typography variant='span'>Front_Desk Exe.</Typography>
                </Box>
              </Box>
            </ListItem>
            <ListItem className={styles.user_profile_menu}>
              <Link
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Link>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                sx={{
                  '& .MuiPaper-elevation': {
                    boxShadow: '0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16)',
                    maxWidth: '250px',
                    right: '40px',
                    width: '100%',
                    left: 'auto !important',
                    borderRadius: '10px',
                  },
                  '& li': {
                    fontSize: '14px',
                    display: 'flex',
                    gap: '10px',
                    padding: '8px 16px',
                    '& svg': {
                      fontSize: '20px',
                      color: '#000000DE',
                    }
                  }
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Box className={styles.user_profile}>
                    <img src={profileicon} alt="Header Avatar" />
                    <Box>
                      <Typography>Lucy Lavender</Typography>
                      <Typography variant='span'>Front_Desk Exe.</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem onClick={handleClose}><AccountCircleOutlinedIcon /> Profile</MenuItem>
                <MenuItem onClick={handleClose}><SettingsOutlinedIcon /> My account</MenuItem>
                <MenuItem onClick={handleClose}><HelpOutlineOutlinedIcon /> Help</MenuItem>
                <MenuItem onClick={handleClose}><LoginOutlinedIcon /> Logout</MenuItem>
              </Menu>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default Header
