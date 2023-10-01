import React from "react";
import getWeb3 from "./getWeb3";
import getContract from "./getContract";
import TodoContract from "../build/contracts/Todo.json"
import SimpleStorageContract from "../build/contracts/SimpleStorage.json"

export default class Web3Container extends React.Component {
    state = { web3: null, accounts: null, contract: null };
    async componentDidMount(){
        try{
            const web3 = await getWeb3()
            const accounts = await web3.eth.getAccounts()
            let contractDefinition;
            switch(this.props.name){
                case "simple":{
                    contractDefinition = SimpleStorageContract;
                    break;
                }
                case "todo":{
                    contractDefinition = TodoContract;
                    break;
                }
            }
            const contract = await getContract(web3, contractDefinition)
            this.setState({ web3, accounts, contract })
        }catch(err){
            console.log(err)
        }
    }
    render(){
        const { web3, accounts, contract } = this.state
        return web3 && accounts ? this.props.render({ web3, accounts, contract })
        : this.props.renderLoading()
    }
}