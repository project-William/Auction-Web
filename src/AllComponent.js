import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {
    WorldCard, BarChart,
    PieChart, LineChart, Chart
} from './Component/Components'

import cx from 'classnames'
import { Grid, Card } from '@material-ui/core'
import style from './App.module.css'
import {  fetchCountrySummary, fetchGlobalSummary } from './API/Json'

import echartsTheme from './API/EChartTheme'
import echarts from 'echarts';


const countriesNames = [
    "Global",
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
    "Barbados", "Belarus", "Belgium", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Brazil",
    "Bulgaria", "Burkina Faso", "cabo verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Congo (Brazzaville)",
    "Congo (Kinshasa)", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czechia", "Denmark",
    "Djibouti", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Guatemala",
    "Guinea", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
    "Kenya", "Korea, South", "Kuwait", "Kyrgyzstan", "Latvia",
    "Lebanon", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malaysia", "Maldives", "Malta", "Mauritania",
    "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Namibia", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Macedonia",
    "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Lucia",
    "Saint Vincent and the Grenadines", "San Marino", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia",
    "Slovenia", "Somalia", "South Africa", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Taiwan*",
    "Tanzania", "Thailand", "Togo", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "Uruguay", "US", "Uzbekistan", "Venezuela",
    "Vietnam", "Zambia", "Zimbabwe", "Dominica", "Grenada", "Mozambique",
    "Syria", "Timor-Leste", "Belize", "Laos", "Libya", "West Bank and Gaza",
    "Guinea-Bissau", "Mali", "Saint Kitts and Nevis", "Kosovo", "Burma",
    "MS Zaandam", "Botswana", "Burundi", "Sierra Leone", "Malawi",
    "South Sudan", "Western Sahara", "Sao Tome and Principe", "Yemen"
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));







function AllComponent({ handleClick,data,date,countryName }) {


    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    console.log(countryName)

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {countriesNames.map((text, index) => (
                    <ListItem button key={text} selected={text===countryName} onClick={() => handleClick(text)}>
                        <ListItemIcon><Brightness1Icon /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
    );


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        COVID-19 DATA VISUALIZATION
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        //container={container}
                        //variant="temporary"
                        // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <Charts data={data} date={date}></Charts>
        </div >
    )
}


function Charts({ data,date }) {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            
            <WorldCard data={data} date={date}/>

            <Grid container spacing={1} justify='center'>
                <Grid item xs={12} md={2}
                    component={Card}
                    className={cx(style.card)}
                >
                    <BarChart data={data} />

                </Grid>
                <Grid item xs={12} md={2}
                    component={Card}
                    className={cx(style.card)}
                >
                    <PieChart data={data} />


                </Grid>
            </Grid>

            <Grid container spacing={1} justify='center'>
                <Grid item xs={12} md={2}
                    component={Card}
                    className={cx(style.card,style.lineCard)}
                >
                    <LineChart data={data} />

                </Grid>

            </Grid>
        </main>
    )
}

class MainPage extends React.Component {

    state = {
        dailyData: {},
        updateTime: {},
        dailySeries:[],
        countryName:{}
    }

    async componentDidMount() {
        const data = await fetchGlobalSummary();
        this.setState({ dailyData: data.Global });
    }

    componentWillMount(){
        echarts.registerTheme('theme', echartsTheme);
    }

    handleClick = async (name) => {
        this.state.countryName=name;
        if (name === "Global") {
            const summarydata = await fetchGlobalSummary();

            this.setState({ dailyData: summarydata.Global });
            this.setState({ updateTime: summarydata.Date });

        } else {
            const summarydata = await fetchCountrySummary(name);
            
            this.setState({ dailyData: summarydata })
        }
    }

    render() {
        return (
            <div>
                <AllComponent handleClick={this.handleClick}
                    data={this.state.dailyData}
                    date={this.state.updateTime}
                    countryName={this.state.countryName}
                ></AllComponent>
               
               
            </div>
        )
    }
}


MainPage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};

export default MainPage;