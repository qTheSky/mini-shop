import React from 'react';
import {Card, Grid, Skeleton} from "@mui/material";

export const CardSkeleton = () => {
    return (
        <Grid item xs>
            <Card sx={{width: 320, padding: '10px'}}>
                <Skeleton width='100%' height={225}/>
                <Skeleton width="60%"/>
                <Skeleton width="100%"/>
                <Skeleton width="100%"/>
                <Skeleton width="15%"/>
                <Skeleton width="50%" sx={{margin: "0 auto"}}/>
            </Card>
        </Grid>
    );
};
