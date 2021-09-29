import http from "../http-common";

const getShips = () => {
    return http.get("/ships");
};

const getShip = (id: string) => {
    return http.get(`/ships/${id}`);
};

const getRockets = () => {
    return http.get("/rockets");
}

const SpaceXService = {
    getShips,
    getShip,
    getRockets
};

export default SpaceXService;