import React, { useState } from 'react'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'
import style from './WorldCard.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const WorldCard = ({ data,date }) => {


    if (!data) {
        return "Loading...";
    }

  

    return (
        <div className={style.container}>
            <Grid container spacing={1} justify='center'>
                <Grid item xs={12} md={3}
                    component={Card}
                    className={cx(style.card, style.infected)}
                >
                    <CardContent>
                        <Typography variant='body1'>
                            Confirmed : {data.TotalConfirmed}
                    
                        </Typography>
                        <Typography color='error' variant='body1' >
                            New : {data.NewConfirmed}
                          
                        </Typography>
                        <Typography variant="body1" color='textSecondary'>
                        Last update time : {new window.Date(date).toDateString()}
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item xs={12} md={3}
                    component={Card}
                    className={cx(style.card, style.recovered)}
                >
                    <CardContent>
                        <Typography variant='body1'>
                            Recovered : {data.TotalRecovered}
                        </Typography>
                        <Typography color='error' variant='body1'>
                            New : {data.NewRecovered}
                        </Typography>
                        <Typography variant="body1" color='textSecondary'>
                        Last update time : {new window.Date(date).toDateString()}
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item xs={12} md={3}
                    component={Card}
                    className={cx(style.card, style.deaths)}
                >
                    <CardContent>
                        <Typography variant='body1'>
                            Deaths : {data.TotalDeaths}
                        
                        </Typography>
                        <Typography color='error' variant='body1'>
                            New : {data.NewDeaths}
                      
                        </Typography>
                        <Typography variant="body1" color='textSecondary'>
                            Last update time : {new window.Date(date).toDateString()}
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default WorldCard;