export function User(address) {
    this.address = address;
    this.nonce = Math.floor(Math.random() * 10000000)
}

export const users = [];