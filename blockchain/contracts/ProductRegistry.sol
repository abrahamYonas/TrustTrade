// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductRegistry {
    struct Product {
        string name;
        uint256 id;
        string image;
        uint256 price; // Price in Wei
        string brand;
        uint256 stockCount;
        string description;
        address payable owner;
    }

    mapping(uint256 => Product) public products;
    uint256 public nextProductId = 1;
    mapping(address => bool) public authorizedContracts; // New mapping for authorized contracts

    event ProductRegistered(uint256 indexed id, address indexed owner);
    event ProductUpdated(uint256 indexed id, string name, uint256 price);
    event ProductDeleted(uint256 indexed id);
    event ProductOwnershipTransferred(uint256 indexed id, address indexed newOwner);

    modifier onlyOwner(uint256 _id) {
        // require(msg.sender == products[_id].owner, "Caller is not the product owner.");
        _;
    }

    modifier onlyAuthorized(uint256 _id) {
        require(authorizedContracts[msg.sender] || msg.sender == products[_id].owner, "Not authorized.");
        _;
    }

    // Constructor or an initialization function to set initial authorized contract
    // This can also be done via a separate function as shown below
    constructor() {}

    // Function to authorize a contract or address
    function authorizeContract(address _contract) external {
        authorizedContracts[_contract] = true; // Consider restricting this function to the contract owner or similar
    }

    function registerProduct(
        string memory _name,
        string memory _image,
        uint256 _priceInWei,
        string memory _brand,
        uint256 _stockCount,
        string memory _description
    ) external {
        products[nextProductId] = Product(
            _name,
            nextProductId,
            _image,
            _priceInWei,
            _brand,
            _stockCount,
            _description,
            payable(msg.sender)
        );
        emit ProductRegistered(nextProductId, msg.sender);
        nextProductId++;
    }

    function updateProduct(
        uint256 _id,
        string memory _name,
        uint256 _priceInWei,
        string memory _image,
        string memory _brand,
        uint256 _stockCount,
        string memory _description
    ) external onlyOwner(_id) {
        Product storage product = products[_id];
        product.name = _name;
        product.image = _image;
        product.price = _priceInWei;
        product.brand = _brand;
        product.stockCount = _stockCount;
        product.description = _description;
        emit ProductUpdated(_id, _name, _priceInWei);
    }

    function deleteProduct(uint256 _id) external onlyOwner(_id) {
        delete products[_id];
        emit ProductDeleted(_id);
    }

    function transferOwnership(uint256 _id, address newOwner) external onlyAuthorized(_id) {
        products[_id].owner = payable(newOwner);
        emit ProductOwnershipTransferred(_id, newOwner);
    }

    function getProductById(uint256 _id) public view returns (
        string memory,
        uint256,
        string memory,
        uint256,
        string memory,
        uint256,
        string memory,
        address
    ) {
        Product storage product = products[_id];
        require(product.id != 0, "Product does not exist.");
        return (
            product.name,
            product.id,
            product.image,
            product.price,
            product.brand,
            product.stockCount,
            product.description,
            product.owner
        );
    }
}
