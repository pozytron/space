import React, {FC, useEffect, useState} from "react";
import SpaceXService from "../services/SpaceXService";
import IShipData from "../types/IShipData";


const ShipsView: FC = () => {
    const [ships, setShips] = useState<Array<IShipData>>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true);
        SpaceXService.getShips()
            .then(response => {
                setShips(response.data);
                setLoading(false)
            })
            .catch(() => setError("Problem occurred while loading ship data, please try again"))
    }, [])

    if(loading){
        return (
            <>
                <h1>Ships</h1>
                <p>Loading...</p>
            </>
        )
    }
    if(error){
        return (
            <>
                <h1>Ships</h1>
                <p>{error}</p>
            </>
        )
    }

    return (
        <>
            <h1>Ships</h1>
            <ul>
                {ships.map(ship=><li key={ship.id}>{ship.name}</li>)}
            </ul>
        </>
    )
}


export default ShipsView;