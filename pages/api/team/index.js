import {team} from '../../../data.js';

const getTeam = async (req, res) => {
    res.status(200).json(team)
}

export default getTeam;