import React from 'react'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'
import style from './WorldCard.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const WorldCard = ({ data: { Global, Date } }) => {


    if (!Global) {
        return "Loading...";
    }

    const date=Date;


    return (
        <div className={style.container}>
            <Grid container spacing={1} justify='center'>
                <Grid item xs={12} md={3}
                    component={Card}
                    className={cx(style.card, style.infected)}
                >
                    <CardContent>
                        <Typography variant='body2'>
                            Infected:
                                <CountUp
                                start={0}
                                end={Global.TotalConfirmed}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='error' variant='body2' >
                            New:
                                <CountUp
                                start={0}
                                end={Global.NewConfirmed}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography variant="body2" color='textSecondary'>
                        Last update time : {new window.Date(date).toDateString()}
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item xs={12} md={3}
                    component={Card}
                    className={cx(style.card, style.recovered)}
                >
                    <CardContent>
                        <Typography variant='body2'>
                            Recovered:
                                <CountUp
                                start={0}
                                end={Global.TotalRecovered}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='error' variant='body2'>
                            New:
                                <CountUp
                                start={0}
                                end={Global.NewRecovered}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography variant="body2" color='textSecondary'>
                        Last update time : {new window.Date(date).toDateString()}
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item xs={12} md={3}
                    component={Card}
                    className={cx(style.card, style.deaths)}
                >
                    <CardContent>
                        <Typography variant='body2'>
                            Deaths:
                                <CountUp
                                start={0}
                                end={Global.TotalDeaths}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='error' variant='body2'>
                            New:
                                <CountUp
                                start={0}
                                end={Global.NewDeaths}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography variant="body2" color='textSecondary'>
                            Last update time : {new window.Date(date).toDateString()}
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default WorldCard;