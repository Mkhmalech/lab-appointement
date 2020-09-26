import React, { useState } from 'react'
import './style.css'
import styled from 'styled-components'
import { AppointmentsFetchAll } from '../dispatcher'
import { useSelector } from 'react-redux'

export const ListAll = () => {
    const [dateSearch, setdataSearch] = useState({
        date: ''
    })

    const {
        date
    } = dateSearch


    const onSearch = (e: any) => {
        setdataSearch({
            ...dateSearch,
            [e.target.name]: e.target.value
        }
        )
    }

    const appointments = [
        {
            name: 'hicham',
            phone: '0676765544',
            date: '2018-09-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        },
        {
            name: 'hicham',
            phone: '0676765544',
            date: '2019-12-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        },
        {
            name: 'hicham',
            phone: '0676765544',
            date: '2020-11-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        }, {
            name: 'hicham',
            phone: '0676765544',
            date: '2020-10-22',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        }
        , {
            name: 'hicham',
            phone: '0676765544',
            date: '2016-09-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        }
    ]
    // data 
    const {list} = useSelector(({appointment}:any) => appointment);

    // Search Into Table Filter
    let Test: any[] = [];

    if (appointments === null) {
        console.log("Spinner")
    } else {
        Test = appointments.filter(
            (appoin) => {
                const query = date.toLowerCase();
                return appoin.date.toLowerCase().indexOf(query) >= 0
            }
        );
    }

    React.useEffect(()=>{
        AppointmentsFetchAll();
    },[])

    return (
        <ContainerAppointment>
            <SearchInput placeholder="Recherche par date.." type="date" name="date" value={date} onChange={e => onSearch(e)} />
            <table>
                <thead>
                    <Tr>
                        <Th>Client</Th>
                        <Th>Telephone de client</Th>
                        <Th>Date de rendez-vous</Th>
                        <Th>Heure de rendez-vous</Th>
                        <Th>P-a-domicile</Th>
                        <Th>Text de rendez-vous</Th>
                    </Tr>
                </thead>
                {list && list.length > 0 && list.map((appo:any )=> (
                    <tbody>
                        <Tr>
                            <Td data-column="First Name">{appo.fullname}</Td>
                            <Td data-column="Last Name">{appo.tele}</Td>
                            <Td data-column="Job Title">{new Date(appo.appointement).toLocaleDateString()}</Td>
                            <Td data-column="Twitter">{new Date(appo.appointement).toLocaleTimeString()}</Td>
                            <Td data-column="Twitter">{appo.needphlebotomist? 'Oui' : 'Non'}</Td>
                            <Td data-column="Twitter">{appo.details}</Td>
                        </Tr>
                    </tbody>
                ))}
                {!list && <Tr>Loading...</Tr>}
            </table>
        </ContainerAppointment>
    )
}


const ContainerAppointment = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
    margin: 20px 100px;
`

const SearchInput = styled.input`
    height: 30px;
    width: 25%;
    height: 35px;
    padding-left: 5px;
    margin-left: 2px;
`
const Tr = styled.tr`
    :nth-of-type(odd) { 
	    background: #eee; 
    }
`

const Th = styled.th`
	background: #3f51b5; 
	color: white; 
    font-weight: bold; 
    padding: 10px; 
	border: 1px solid #ccc; 
	text-align: left; 
	font-size: 18px;
`

const Td = styled.td` 
	padding: 10px; 
	border: 1px solid #ccc; 
	text-align: left; 
	font-size: 18px;
`