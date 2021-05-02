import React from 'react';
import { Grid} from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({data: {cases, recovered, deaths, delta, meta}}) => {
    if(!cases) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent 
                    className={styles.infected}
                    cardTitle={"Infected"} 
                    value={cases} 
                    increment={delta.cases}
                    cardSubtitle={"Number of active cases"} 
                    lastUpdate={meta.lastUpdate}
                />
                <CardComponent 
                    className={styles.recovered}
                    cardTitle={"Recovered"} 
                    value={recovered} 
                    increment={delta.recovered}
                    cardSubtitle={"warum nue"} 
                    lastUpdate={meta.lastUpdate}
                />
                <CardComponent 
                    className={styles.deaths}
                    cardTitle={"Deaths"} 
                    value={deaths} 
                    increment={delta.deaths}
                    cardSubtitle={"warum nue"} 
                    lastUpdate={meta.lastUpdate}
                />
            </Grid>
        </div>
    )
}

export default Info;