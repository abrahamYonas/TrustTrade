// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductPurchase {
    // State variables
    address public buyer; 
    uint256 public price; 
    bool public available; 
    address public currentOwner; 
    
    // Event emitted upon successful purchase
    event ProductPurchased(address buyer, uint256 amount);
    
    // Constructor to initialize the contract
    constructor(uint256 _price) {
        buyer = msg.sender; 
        price = _price; 
        available = true; 
    }
    
    // Modifier to restrict access to only the current buyer
    modifier onlyBuyer() {
        require(msg.sender == buyer, "Only buyer can perform this action");
        _;
    }
    
    // Modifier to check if the product is available
    modifier productAvailable() {
        require(available, "Product is not available");
        _;
    }
    
    // Function for purchasing the product
    function purchaseProduct() external payable productAvailable {
        require(msg.value == price, "Incorrect amount sent"); 
        
        address payable seller = payable(buyer); 
        seller.transfer(msg.value); 
        
        currentOwner = msg.sender; 
        available = false; 
        
        emit ProductPurchased(msg.sender, msg.value); 
    }
    
    // Function for the buyer to set the price of the product
    function setPrice(uint256 _price) external onlyBuyer {
        price = _price; 
    }
    
    // Function for the buyer to withdraw funds from the contract
    function withdrawFunds() external onlyBuyer {
        require(address(this).balance > 0, "No funds available for withdrawal"); 
        
        address payable seller = payable(buyer); 
        seller.transfer(address(this).balance); 
    }
}
