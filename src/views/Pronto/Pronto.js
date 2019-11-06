import React from 'react';
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Warning from '@material-ui/icons/Warning';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
// core components
import GridItem from 'components/Grid/GridItem.js';
import Button from '@material-ui/core/Button';
import GridContainer from 'components/Grid/GridContainer.js';
import Danger from 'components/Typography/Danger.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardIcon from 'components/Card/CardIcon.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
// Apollo-react
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';

const useStyles = makeStyles(styles);

var name = 'Muy pronto nueva funcionalidad';

export default function Pronto() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon>alarm</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Horario</p>
                            <h3 className={classes.cardTitle}>Proximamente</h3>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Cajasiete
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Start
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Go
                                </Button>
                            </div>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <AccessAlarmsIcon>
                                    <Warning />
                                </AccessAlarmsIcon>
                                <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    {name}
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
