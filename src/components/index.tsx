import { Card, CardContent } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './index.css'
import { dataList } from './../actions/index';

interface Store {
    dataState: {
        data: { "updated": string,
        "country": string,
        "countryInfo": {
            "_id": number,
            "iso2": string,
            "iso3": string,
            "lat": number,
            "long": number,
            "flag": string
        },
        "cases": number,
        "todayCases": number,
        "deaths": number,
        "todayDeaths": number,
        "recovered": number,
        "todayRecovered": number,
        "active": number,
        "critical": number,
        "casesPerOneMillion": number,
        "deathsPerOneMillion": number,
        "tests": number,
        "testsPerOneMillion": number,
        "population": number,
        "continent": string,
        "oneCasePerPeople": number,
        "oneDeathPerPeople": number,
        "oneTestPerPeople": number,
        "undefined": number,
        "activePerOneMillion": number,
        "recoveredPerOneMillion": number,
        "criticalPerOneMillion": number}
    }
}

const Index = ({data= {country: '', tests: 0, recovered: 0, deaths: 0, cases: 0, active: 0}}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const data = dispatch(dataList())
    }, [])

    return (
        <div className='index'>

            <div className='a'>
                <Card>
                    <CardContent>
                        <h1>Casos de Covid-19 no {data.country}</h1>
                    </CardContent>
                </Card>
            </div>

            <div className='b'>
                <Card>
                    <h3>Testes realizados</h3>
                    <h2>{data.tests}</h2>
                </Card>
            </div>
            
            <div className='c'>
                <Card>
                    <h3>Pessoas recuperadas</h3>    
                    <h2>{data.recovered}</h2>
                </Card>
            </div>

            <div className='d'>
                <Card>
                    <h3>Casos ativos</h3>    
                    <h2>{data.active}</h2>
                </Card>
            </div>
            
            <div className='e'>
                <Card>
                    <h3>Total de Casos</h3>    
                    <h2>{data.cases}</h2>
                </Card>
            </div>

            <div className='f'>
                <Card>
                    <h3>Total de Mortes</h3>    
                    <h2>{data.deaths}</h2>
                </Card>
            </div> 
            <div className='g'>
                <Card>
                    <h3>Total de Mortes</h3>    
                    <h2>{data.deaths}</h2>
                </Card>
            </div>
        </div>
    )
}

const mapStateToProps = (state: Store) => ({
    data: state.dataState.data
})

export default connect(mapStateToProps) (Index)