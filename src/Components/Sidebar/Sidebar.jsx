import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Backdrop,
  Box,
  Divider,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import dashboardIcon from "../../assets/Icons/dashboard-icon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./style.module.css";
import smartaccess from "../../assets/Icons/smartaccess-icon.svg";
import calendaricon from "../../assets/Icons/calendar-icon.svg";
import teamicon from "../../assets/Icons/team-icon.svg";
import warningicon from "../../assets/Icons/warning-icon.svg";
import timelineicon from "../../assets/Icons/timeline-icon.svg";
import notificationicon from "../../assets/Icons/notification-icon.svg";
import messageicon from "../../assets/Icons/message-icon.svg";
import pdficon from "../../assets/Icons/pdf-icon.svg";
import quickicon from "../../assets/Icons/quick-logo.svg";
import Quicklinks from "../Quicklinks/Quicklinks";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const Sidebar = ({ STATE }) => {
  const [expanded, setExpanded] = useState(false);
  const isMenuOpen = STATE?.isMenuOpen;
  const width = useWindowWidth();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const handleQuickLinksOpen = () => {
    setIsQuickLinksOpen(true);
  };

  const handleQuickLinksClose = () => {
    setIsQuickLinksOpen(false);
  };

  return (<>
    <Box className={`${styles.sidebar_wrap} ${isMenuOpen ? styles.openSidebar : styles.closeSidebar} ${open ? styles.sidebar_expand : ""}`}>
      <List className={styles.sidebar_menu}>
        <Link href="#" className={styles.navbar_logo}>
          <img
            src="https://www.devicethread.com/images/logo_light.png"
            alt="header-logo"
          />
        </Link>
        <ListItem className={styles.sidebar_menu_active}>
          <Link href="#">
            <img src={dashboardIcon} alt="dashboard" />
            Dashboard
          </Link>
        </ListItem>
        <ListItem className={styles.sidebar_smartmenu}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Link>
                <img src={smartaccess} alt="smartaccess" />
                SmartAccess
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <List className={styles.sidebar_submenu}>
                <ListItem>
                  <Link>
                    <img src={calendaricon} alt="calendaricon" />
                    Access Management
                  </Link>
                </ListItem>
                <ListItem>
                  <Link>
                    <img src={teamicon} alt="teamicon" />
                    Access Groups
                  </Link>
                </ListItem>
                <ListItem>
                  <Link>
                    <img src={warningicon} alt="warningicon" />
                    Access Codes
                  </Link>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem className={styles.sidebar_smartmenu}>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Link>
                <img src={timelineicon} alt="timelineicon" />
                <Box sx={{ display: "flex", gap: 1 }}>
                  {`SmartOperations`}
                  {expanded !== "panel2" && (
                    <Box className={styles.notification_number}>3</Box>
                  )}
                </Box>
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <List className={styles.sidebar_submenu}>
                <ListItem>
                  <Link>
                    <img src={notificationicon} alt="calendaricon" />
                    Alerts / Issues
                    {expanded === "panel2" && (
                      <Box className={styles.notification_number}>3</Box>
                    )}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link>
                    <img src={messageicon} alt="messageicon" />
                    Notifications
                  </Link>
                </ListItem>
                <ListItem>
                  <Link>
                    <img src={pdficon} alt="pdficon" />
                    Reports
                  </Link>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
      <Box className={styles.quick_links_menu} onClick={handleQuickLinksOpen}>
        <Box className={styles.quick_links_logo}>
          <img src={quickicon} alt="quickicon" />
        </Box>
        Quick Links
      </Box>

      <Quicklinks open={isQuickLinksOpen} onClose={handleQuickLinksClose} />
    </Box>
    {width <= 991 && (
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={!isMenuOpen}
        onClick={() => STATE?.setisMenuOpen((prev) => !prev)}
      />
    )}
  </>);
};

export default Sidebar;
