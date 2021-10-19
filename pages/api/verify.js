import { User, users} from "../../utils/users";
import { ethers } from "ethers";


export default function handler(req, res){
    console.log(req.query)
    let authenticated = false;
    const {address, signature, nonce} = req.query;
    const decodedAddress = ethers.utils.verifyMessage(nonce, signature)
    if(address === decodedAddress.toLowerCase()) authenticated = true
    res.status(200).json({authenticated})
}