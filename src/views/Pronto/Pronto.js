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
import Table from 'components/Table/Table.js';
import Danger from 'components/Typography/Danger.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardIcon from 'components/Card/CardIcon.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
//edit icon
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
//dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Apollo-react
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';

const useStyles = makeStyles(styles);

var name = 'Muy pronto nueva funcionalidad';

export default function Pronto() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                                    onClick={handleClickOpen}
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
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Cajasiete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Introduzca los importes uno por uno para que aparezcan
                        en la tabla
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nada"
                        label="Importe"
                        type="email"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
            <GridItem xs={12} sm={3} md={3}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Cajasiete</h4>
                        <p className={classes.cardCategoryWhite}>
                            Cobros con tarjetas por Datafono
                        </p>
                        <div>
                            <GridContainer>
                                <GridItem xs={6} sm={6} md={6}>
                                    <TextField
                                        id="filled-adornment-dense"
                                        className={clsx(
                                            classes.margin,
                                            classes.textField
                                        )}
                                        variant="filled"
                                        margin="dense"
                                        label="Importe"
                                    />
                                </GridItem>
                                <GridItem xs={6} sm={6} md={6}>
                                    <TextField
                                        id="filled-adornment-dense"
                                        className={clsx(
                                            classes.margin,
                                            classes.textField
                                        )}
                                        variant="filled"
                                        margin="dense"
                                        label="Importe"
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={['Total', 'Tienda', 'Acción']}
                            tableData={[
                                [56.2, 4.8, 'edit'],
                                [
                                    26.4,
                                    4.8,
                                    <div>
                                        <IconButton
                                            aria-label="delete"
                                            className={classes.margin}
                                            size="small"
                                        >
                                            <EditIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            className={classes.margin}
                                            size="small"
                                        >
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                    </div>
                                ],
                                [20, 0, 'edit'],
                                [20, 0, 'edit'],
                                [52.8, 0, 'edit'],
                                [12.78, 12.78, 'edit']
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </div>
    );
}
