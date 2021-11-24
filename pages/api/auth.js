import { User, users} from "../../utils/users";

export default function handler(req, res){
    let userInfo = users.filter(user => user.address === req.query.address)
    if(userInfo.length === 0){
        const newUser = new User(req.query.address)
        users.push(newUser)
        userInfo = users.filter(user => user.address === req.query.address)
    } else {
        const nonce = Math.floor(Math.random() * 10000000)
        userInfo[0].nonce = nonce
      }
    console.log(userInfo[0])
    res.status(200).json(userInfo[0])
}

