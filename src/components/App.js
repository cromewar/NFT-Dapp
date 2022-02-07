import React, { Componen, setState } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';
import CromeNFT from '../abis/CromeNFT.json';

class App extends Component {

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = Web3(window.ethereum)
      await window.ethereum.enable()
    }

    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }

    else {
      window.alert('You must use a wallet service such as metamask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Charge the account
    const accounts = await web3.eth.getAccounts()
    this.setState({ accounts: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = CromeNFT.networks[networkId]
    if (networkData) {
      const abi = CromeNFT.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })
      // Color charge
    }

  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://blockstellart.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crome Token
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="https://blockstellart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1>DApp</h1>
                <p>
                  Edita <code>src/components/App.js</code> y guarda para recargar.
                </p>

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
