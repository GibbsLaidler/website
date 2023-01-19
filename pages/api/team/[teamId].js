import {team} from '../../../data.js';

const getTeamMember = async (req, res) => {
    const teamMemberid = req.query.teamId;
    const result = team.filter(member => member.id === parseInt(teamMemberid));

    if(result.length > 0) {
        res.status(200).json(result[0])
    } else {
        res.status(404).json({message: `result not here`})
    }
}

export default getTeamMember;