export const authRequest = async (address, signer, setLoggedIn) => {
    const response = await fetch(`/api/auth?address=${address}`)
    const data = await response.json();
    console.log(data)
    const signature = await signer.signMessage(`${data.nonce}`);
    console.log({address, signature, nonce: data.nonce })
    verifyRequest(address, signature, data.nonce, setLoggedIn)
}

const verifyRequest = async(address, signature, nonce, setLoggedIn) => {
    const response = await fetch(`/api/verify?address=${address}&signature=${signature}&nonce=${nonce}`)
    const data = await response.json();
    console.log(data);
    setLoggedIn(data.authenticated);
}