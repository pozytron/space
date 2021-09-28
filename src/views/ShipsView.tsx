import React, {FC, useEffect} from "react";
import SpaceXService from "../services/SpaceXService";
import IShipData from "../types/IShipData";


const ShipsView: FC = () => {
    const [ships, setShips] = React.useState<Array<IShipData>>([]);
    const [error, setError] = React.useState<string>("");

    useEffect(() => {
        SpaceXService.getShips()
            .then(response => setShips(response.data))
            .catch(() => setError("Problem occurred while loading ship data, please try again"))
    }, [])


    return (
        <>
            <h1>Ships</h1>
            {error!==""&&<p>{error}</p>}
            <ul>
                {ships.map(ship=><li key={ship.id}>{ship.name}</li>)}
            </ul>
        </>
    )
}


export default ShipsView;