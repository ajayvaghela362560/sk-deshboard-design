import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Box, Typography, Link } from "@mui/material"
import styles from './style.module.css'
import MoreVertIcon from "@mui/icons-material/MoreVert"

const data = [
  { name: "Zone 1", locked: 15, unlocked: 3 },
  { name: "Floor 2", locked: 10, unlocked: 6 },
  { name: "Floor 3", locked: 8, unlocked: 6 },
  { name: "Common Area", locked: 9, unlocked: 6 },
  { name: "Floor 4", locked: 12, unlocked: 6 },
  { name: "Zone 7", locked: 7, unlocked: 7 },
  { name: "Lobby", locked: 2, unlocked: 1 },
];

const LocksStatusChart = () => {
  return (
    <Box className={styles.room_chart_card}>
      <Box className={styles.room_chart_header}>
        <Box>
          <Typography variant="h3">Locks status by Zones</Typography>
          <Typography>As of today, 29 Apr, 2024</Typography>
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
  
      <Box className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }} bor>
            <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 12, fill: "#666" }} />
            <YAxis
              axisLine={{ stroke: "#ccc" }}
              tickLine={false}
              tickFormatter={(value) => `${value}`}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <Tooltip cursor={false} />
            <Bar dataKey="locked" fill="#4CAF50" barSize={16} className={styles.barNoHover} radius={[2, 2, 0, 0]}  />
            <Bar dataKey="unlocked" fill="#D32F2F" barSize={16} className={styles.barNoHover} radius={[2, 2, 0, 0]}  />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default LocksStatusChart

