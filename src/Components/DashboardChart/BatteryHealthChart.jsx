import React from 'react'
import { PieChart, Pie, Cell } from "recharts"
import { Box, Typography, Link, } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import styles from './style.module.css'

const data = [
    { name: "Good", value: 147, color: "#4CAF50" },
    { name: "Moderate", value: 75, color: "#FFA500" },
    { name: "Critical", value: 14, color: "#D32F2F" },
]

const total = data.reduce((sum, entry) => sum + entry.value, 0)
const healthStatus = Math.round((data[0].value / total) * 100)


const BatteryHealthChart = () => {
    return (
        <Box className={styles.room_chart_card}>
            <Box className={styles.room_chart_header}>
                <Box>
                    <Typography variant="h3">Locks Battery Health</Typography>
                    <Typography>As of Today,  {"September 22, 2024"}</Typography>
                </Box>
                <Link
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <MoreVertIcon />
                </Link>

            </Box>
            <Box className={styles.room_chart_wrap}>
                <Box className={styles.chart_container}>
                    <PieChart width={250} height={250}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            label={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                    <Box className={styles.health_status_title}>
                        <Typography variant="h6" className={styles.health_Status_percentage}>
                            {healthStatus}%
                        </Typography>
                        <Typography variant="body2" className={styles.health_status}>
                            Health <br />Status
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles.health_chart_status}>
                    {data.map((item) => (
                        <Box key={item.name} className={styles.chart_status}>
                            <Box className={styles.status_indicator} style={{ background: item.color }} />
                            <Typography sx={{ color: '#6b7280 !important' }}>
                                {item.value} / {item.name}{" "}
                                {item.name === "Good" ? "above 80%" : item.name === "Moderate" ? "above 65%" : "below 20%"}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box className={styles.battery_chart_footer}>
                <Typography>
                    <Typography variant='span' className={styles.critical_percentage}>23</Typography> / {total} battery
                    <Typography variant='span' className={styles.critical_percentage}>level 20%</Typography> or less require immediate attention
                </Typography>
            </Box>
        </Box>
    )
}

export default BatteryHealthChart