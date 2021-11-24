import { ethers } from "ethers";


export default function handler(req, res){
    let authenticated = false;
    const {address, signature, nonce} = req.query;
    const decodedAddress = ethers.utils.verifyMessage(nonce, signature)
    console.log({decodedAddress})
    if(address === decodedAddress.toLowerCase()) authenticated = true
    console.log({address, signature, nonce})
    res.status(200).json({authenticated})
}