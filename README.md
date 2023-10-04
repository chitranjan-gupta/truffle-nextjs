# Truffle Next.js

## Setup

> Install nodejs with node-gyp

> Install ganache ui

```bash
npm install -g truffle
git clone https://github.com/chitranjan-gupta/truffle-nextjs
cd truffle-nextjs
npm install
```

## Run on Ganache Network

### Build

> Run the ganache ui

1. Copy the network url and paste in .env and truffle-config.js
2. Now build contract and ui
   ```bash
   truffle compile
   npm run build-client
   ```

### Test

```bash
truffle migrate
truffle test
```

### Execute

```bash
npm start
```

## Run on Truffle develop

### Build

1. Run the truffle develop
   ```bash
   truffle develop
   ```
2. Copy the network url and paste in .env and truffle-config.js
3. Now build contract and ui
   ```bash
   truffle compile
   npm run build-client
   ```

### Test

```bash
truffle migrate
truffle test
```

### Execute

```bash
npm start
```

## Run on Ganache CLI

### Build
> Install the ganache cli

```bash
npm install -g ganache-cli
```

1. Run the truffle develop
   ```bash
   ganache-cli
   ```
2. Copy the network url and paste in .env and truffle-config.js
3. Now build contract and ui
   ```bash
   truffle compile
   npm run build-client
   ```

### Test

```bash
truffle migrate
truffle test
```

### Execute

```bash
npm start
```

## Run on Ganache Cloud

### Setup
> Deploy the [Ganache Server](https://github.com/chitranjan-gupta/Ganache-Server) on the Cloud

1. Copy the public network url and paste in .env and truffle-config.js
2. Now build contract and ui
   ```bash
   truffle compile
   npm run build-client
   ```

### Test

```bash
truffle migrate
truffle test
```

### Execute

```bash
npm start
```

## Truffle CLI Execution

1. Run truffle develop
   ```bash
   truffle develop
   ```
2. A CLI interface will come with account with address and private key
3. In there type `migrate` to compile and push contract on the truffle develop network
4. You can test the contract by typing `test`

> CLI interface is just like Nodejs CLI it comes with web3 module loaded to access the contract you
> create an instance of the contract and store inside a variable and then access its methods and variables

For Example:
```javascript
let simpleStorage = await SimpleStorage.deployed();
await simpleStorage.set(89);
await simpleStorage.get();
```

Sources:
1. https://github.com/trufflesuite
2. https://blog.logrocket.com/ethereum-blockchain-development-using-web3-js/
3. https://github.com/web3/web3.js
