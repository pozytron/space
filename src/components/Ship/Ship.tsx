import React from "react";
import { RouteComponentProps } from 'react-router';


type Props = { id: string };


const Ship = ({match}: RouteComponentProps<Props>)=>{
    const shipID = match.params.id
    // fetch ship data for this layout or receive data from context or a props
    return <h1>Ship with id: {shipID}</h1>
}

export default Ship;