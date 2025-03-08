import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts";
import { Typography, Box, Menu, MenuItem, Link } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./style.module.css";

function CurrentRoomStatus() {
  const data = [
    { name: "In-house Guests", value: 123, color: "#4CAF50" },
    { name: "Arrivals", value: 8, color: "#FFA000" },
    { name: "Departures", value: 9, color: "#226FC8" },
    { name: "Available", value: 66, color: "#3D3D3D" },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip_container}>
          <Typography className={styles.tooltip_text}>
            <span className={styles.tooltip_label}>{payload[0].name}</span>:{" "}
            {payload[0].value}
          </Typography>
        </div>
      );
    }
    return null;
  };

  const [activeIndex, setActiveIndex] = React.useState(null);

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
    } = props;

    // Calculate slight offset for the active slice
    const RADIAN = Math.PI / 180;
    const offsetX = Math.cos(-midAngle * RADIAN) * 10; // Move outward
    const offsetY = Math.sin(-midAngle * RADIAN) * 10;

    return (
      <g>
        <Sector
          cx={cx + offsetX} // Shift the active slice
          cy={cy + offsetY}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10} // Increase outer radius for effect
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <Box className={styles.room_chart_card}>
      <Box className={styles.room_chart_header}>
        <Box>
          <Typography variant="h3">Current Room Status</Typography>
          <Typography>As of Today, September 22, 2024</Typography>
        </Box>
        <Link
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
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
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Update</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Box className={styles.room_chart_wrap}>
          <Box className={styles.room_chart}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </Box>
          <Box>
            {data.map((item, index) => (
              <Box key={index} className={styles.chart_status}>
                <Typography
                  variant="span"
                  className={styles.status_indicator}
                  style={{ backgroundColor: item.color }}
                />
                <Typography>
                  {item.name} - {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.chart_footer}>
          <Typography>
            <Typography variant="span">{66}</Typography>
            <Typography variant="span">/ {200}</Typography>
            <Typography variant="h6">
              {" "}
              rooms are available as of today.
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CurrentRoomStatus;
