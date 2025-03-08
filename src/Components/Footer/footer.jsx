import React from 'react'
import { Box, Link, List, ListItem, Typography } from '@mui/material'
import styles from './style.module.css'
import footerlogo from '../../assets/Icons/footer-logo.svg';

const Footer = () => {
    return (
        <>
            <Box className={styles.powered_by_section}>
                <Box className={styles.version_detail}>
                    <Typography>Powered by</Typography>
                    <img src={footerlogo} alt="footer-logo" />
                    <Typography>Version: 038J-2419</Typography>
                </Box>
                <List className={styles.footer_menu}>
                    <ListItem>
                        <Link href='#'>Support</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#'>Help Center</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#'>Privacy</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#'>Terms of Service</Link>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default Footer
