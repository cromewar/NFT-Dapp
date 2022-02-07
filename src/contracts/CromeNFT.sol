//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CromeNFT is ERC721{

    string [] public nfts;
    mapping(string => bool) _nftExists;
    uint internal nft_id = 0;

    //Constructor required by ERC721 Standard
    constructor()ERC721("CromeToken", "CW"){}


    //Function for minting the nfts
    function mint(string memory _color) public {
        require(!_nftExists[_color]);
        nfts.push(_color);
        uint _id = nft_id;
        _mint(msg.sender, _id);
        _nftExists[_color] = true;
        nft_id = nft_id + 1;
    }

   
}

