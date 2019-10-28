import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

const styles = {
    cardCategoryWhite: {
        '&,& a,& a:hover,& a:focus': {
            color: 'rgba(255,255,255,.62)',
            margin: '0',
            fontSize: '14px',
            marginTop: '0',
            marginBottom: '0'
        },
        '& a,& a:hover,& a:focus': {
            color: '#FFFFFF'
        }
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: '3px',
        textDecoration: 'none',
        '& small': {
            color: '#777',
            fontSize: '65%',
            fontWeight: '400',
            lineHeight: '1'
        }
    }
};

const useStyles = makeStyles(styles);

export default function TableList() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>
                            RUPERTO GONZALEZ E HIJOS
                        </h4>
                        <p className={classes.cardCategoryWhite}>
                            Gasolinera Cepsa
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={['Nombre', 'Contrato', 'Activo']}
                            tableData={[
                                [
                                    'Manuel Alvarez Prado',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                [
                                    'Rafael Mesa Hernandez',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                ['Luis Llarena Rojas', 'Tiempo Completo', 'Si'],
                                ['Judith Yumar Lopez', 'Tiempo Completo', 'Si'],
                                [
                                    'Edward Yumar Carrillo',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                [
                                    'Victor Redondo Garcia',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                [
                                    'Jaime trujillo Angulo',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                ['Richar Pupo Reyes', 'Tiempo Completo', 'Si']
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>
                            CAFETERIA KM 16 DON RUPERTO
                        </h4>
                        <p className={classes.cardCategoryWhite}>
                            Cafeteria de Estacion Cepsa
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={['Nombre', 'Contrato', 'Activo']}
                            tableData={[
                                [
                                    'Lisbet Reyes Tamayo',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                [
                                    'Ofelia Velazco Perez',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                [
                                    'Nisamar Garcia Fernandez',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                [
                                    'Yerimar Yumar Rojas',
                                    'Tiempo Completo',
                                    'Si'
                                ],
                                [
                                    'Lisber Anaís Castro Catala',
                                    'Tiempo Completo',
                                    'No'
                                ]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
