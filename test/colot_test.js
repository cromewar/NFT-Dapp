const { assert } = require('chai')


const CromeNFT = artifacts.require("CromeNFT");

require('chai').use(require('chai-as-promised')).should()

contract('CromeNFT', (accounts) => {
    let contract

    before(async () => {
        contract = await CromeNFT.deployed()
    })

    describe('development', async () => {
        it('Contract Deployment Succeed', async () => {
            const address = contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('Has a name', async () => {
            const name = await contract.name()
            assert.equal(name, 'CromeToken')
        })

        it('has a symbol', async () => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'CW')
        })
    })



})