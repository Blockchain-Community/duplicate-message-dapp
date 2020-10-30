pragma solidity ^0.5.0;

contract HelloWorld {
    string public message = "Hello, World";

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}
