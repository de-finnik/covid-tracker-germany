import React from 'react';
import { Grid} from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = () => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent 
                    className={styles.infected}
                    cardTitle={"Infected"} 
                    value={55455} 
                    cardSubtitle={"Number of active cases"} 
                    lastUpdate={"2021-04-30T23:00:00.000Z"}
                />
                <CardComponent 
                    className={styles.recovered}
                    cardTitle={"Recovered"} 
                    value={5545454} 
                    cardSubtitle={"warum nue"} 
                    lastUpdate={"2021-04-30T23:00:00.000Z"}
                />
                <CardComponent 
                    className={styles.deaths}
                    cardTitle={"Deaths"} 
                    value={554533454} 
                    cardSubtitle={"warum nue"} 
                    lastUpdate={"2021-04-30T23:00:00.000Z"}
                />
            </Grid>
        </div>
    )
}

export default Info;