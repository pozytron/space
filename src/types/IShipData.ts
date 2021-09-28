export default interface IShipData {
    last_ais_update: null,
    legacy_id: string,
    model: null,
    type: string,
    roles: Array<string>,
    imo: number,
    mmsi: number,
    abs: number,
    class: number,
    mass_kg: number,
    mass_lbs: number,
    year_built: number,
    home_port: string,
    status: string,
    speed_kn: null,
    course_deg: null,
    latitude: null,
    longitude: null,
    link: string,
    image: string,
    name: string,
    active: boolean,
    launches: Array<string>,
    id: string
}