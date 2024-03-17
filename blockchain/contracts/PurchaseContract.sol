// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

interface IProductRegistry {
    function getProductById(uint256 _id) external view returns (
        string memory name,
        uint256 id,
        string memory image,
        uint256 price,
        string memory brand,
        uint256 stockCount,
        string memory description,
        address owner
    );
    function transferOwnership(uint256 _id, address newOwner) external;
    function updateProduct(
        uint256 _id,
        string calldata _name,
        uint256 _price,
        string calldata _image,
        string calldata _brand,
        uint256 _stockCount,
        string calldata _description
    ) external;
}

contract PurchaseContract {
    address public productRegistryAddress;

    event ProductPurchased(uint256 indexed productId, address indexed buyer, uint256 price);

    constructor(address _productRegistryAddress) payable{
        productRegistryAddress = _productRegistryAddress;
    }

    function purchaseProduct(uint256 productId) external payable {
        IProductRegistry productRegistry = IProductRegistry(productRegistryAddress);
        
        (string memory name, , string memory image, uint256 price, string memory brand, uint256 stockCount, string memory description, address owner) = productRegistry.getProductById(productId);
        require(stockCount > 0, "Product is out of stock.");
  
    console.log("msg.value: ", msg.value);
    console.log("product price in wei: ", price);
        require(msg.value >= price, "Insufficient funds sent.");

        // Transfer Ether to the seller
        (bool sent, ) = payable(owner).call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        console.log("Sent Value: ", sent);

        // Update product information assuming stock count is decremented by 1 and ownership is transferred
        productRegistry.transferOwnership(productId, msg.sender);
        if(stockCount > 1) {
            productRegistry.updateProduct(
                productId,
                name,
                price,
                image,
                brand,
                stockCount - 1,
                description
            );
        } else {
            // If stock count will be 0 after purchase, consider handling this case separately
            // For example, you might want to remove the product from the listing or set its status as sold out.
        }

        emit ProductPurchased(productId, msg.sender, price);
    }

    // Function to allow the contract to receive Ether.
    receive() external payable {}

}
