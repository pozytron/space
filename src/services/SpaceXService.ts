import http from "../http-common";


const getShips = ()=>{
    return http.get("/ships");
};



const SpaceXService = {
getShips
};

export default SpaceXService;