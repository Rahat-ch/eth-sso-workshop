import { User, users} from "../../utils/users";

export default function handler(req, res){
    let userInfo = users.filter(user => user.address === req.query.address)
    if(userInfo.length === 0){
        const newUser = new User(req.query.address)
        users.push(newUser)
        userInfo = users.filter(user => user.address === req.query.address)
    }
    res.status(200).json(userInfo[0])
}