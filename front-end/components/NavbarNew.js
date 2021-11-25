import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import Public from '@mui/icons-material/Public';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

import { Link } from '@mui/material';
const data = [
  { icon: <HomeOutlinedIcon />, label: 'Home',href:"/home"},
  { icon: <CardTravelOutlinedIcon />, label: 'Trips',href:"/tripmain" },
  { icon: <BookmarkBorderOutlinedIcon />, label: 'Expenses',href:"/expensemain" },
  { icon: <CreditCardIcon />, label: 'Reports',href:"user_reports" },
  { icon: < AccountBalanceWalletIcon />, label: 'Cards',href:"/cardsmain/cardsmain" },
  { icon: < CheckCircleIcon />, label: 'Approvals' ,href:"user_approvals" },
  { icon: <PieChartIcon />, label: 'Analytics',href:"user_analytics" },
  { icon: < SettingsIcon />, label: 'My Settings',href:"my_settings"},
];
const clone = [
  { icon: < TimerOutlinedIcon/>, label: 'Dashboards',href:"#" },
  { icon: <CardTravelOutlinedIcon />, label: 'Trips',href:"#"  },
  { icon: <BookmarkBorderOutlinedIcon/>, label: 'Reports',href:"#"  },
  { icon: <PieChartIcon />, label: 'Advances',href:"#"  },
  { icon: <AccountBalanceWalletIcon/>, label: 'Corporate Cards',href:"#"  },
  { icon: <AssignmentIcon />, label: 'Budgets',href:"#"  },
  { icon: <PieChartIcon />, label: 'Analytics',href:"#"  },
  { icon: <SettingsIcon />, label: 'Settings',href:"#"  }
  
];





export default function CustomizedList() {
  const [myViewOpen, setMyViewOpen] = React.useState(true);
  const[adminViewClose,setAdminViewClose]=React.useState(false);
  const[color,setColor] = React.useState(false)

  const boxClick = (e) => {
    setColor(true)
  }
  return (
    <Box sx={{ display: 'flex', }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'light',
            primary: { main: '#ffb700' },
            background: { paper: '#f3f3fa;' },
          },
        })}
      >
        <Paper elevation={1} sx={{ width: 240 }} style={{backgroundColor:"#f3f3fa;", color:"#f3f3fa;"}}>
          
            <ListItem component="div" disablePadding>
              
             
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: myViewOpen ? '#f3f3f3' : null,
                pb: myViewOpen ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => {
                  setMyViewOpen(!myViewOpen);
                  setAdminViewClose(false);
                  }

                }
                sx={{
                  // px: 3,
                  // pt: 2.5,
                  pb: myViewOpen ? 0 : 2.5,
                  // backgroundColor:myViewOpen? "#f3f3f3":"black",

                }}
              >
                <ListItemText
                  primary="My View"
                  primaryTypographyProps={{
                    fontSize: 15,
                    color:myViewOpen? "green":"black",
                    fontWeight: '800',
                    lineHeight: '25px',
                  }}
                  sx={{ my: 0 }}
                />
                
                <KeyboardArrowDown
                  sx={{
                    // mr: -1,
                    opacity: 10,
                    color:"black",
                    transform: myViewOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                    color:myViewOpen? "green":"black",
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {myViewOpen &&
                data.map((item) => (
                    <Link href={item.href} style={{textDecoration:"none"}}>
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 47, color: 'black' }}
                  >
                    <ListItemIcon sx={{ color: 'black' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                   </Link>
                ))}
                  <ListItemButton
                alignItems="flex-start"
                onClick={() => {
                  setAdminViewClose(!adminViewClose);
                  setMyViewOpen(false);

                }}
                sx={{
                  // px: 3,
                  // pt: 2.5,
                  pb: adminViewClose ? 0 : 2.5,
                }}
              >
                <ListItemText
                  primary="Admin View"
                  primaryTypographyProps={{
                    fontSize: 15,
                    color:adminViewClose? "green":"black",
                    fontWeight: '800',
                    lineHeight: '25px',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 10,
                    transform: adminViewClose ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: '0.2s',
                    color:adminViewClose? "green":"black",

                  }}
                />
              </ListItemButton>

              {adminViewClose &&
                clone.map((item) => (
                    <Link href={item.href}
                      onClick={boxClick}
                      className="focuss"
                      style={{backgroundColor:"red !important",textDecoration:"none",padding:"0px"}}
                     >

                  <ListItemButton
                    key={item.label}
                    sx={{ py: 1, minHeight: 17, color: 'black',}}
                  >
                    <ListItemIcon sx={{ color: 'black' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', }}
                    />
                  </ListItemButton>
                   </Link>
                ))}
            </Box>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}