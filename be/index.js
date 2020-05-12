const Web3 = require("web3");

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://10.190.77.173:8080"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];

var rpds = new web3.eth.Contract(
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_aadhar",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_rice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_sugar",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_wheat",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_kerosene",
          type: "uint256",
        },
      ],
      name: "addPerson",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_aadhar",
          type: "uint256",
        },
      ],
      name: "findPerson",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "people",
      outputs: [
        {
          internalType: "uint256",
          name: "_aadhar",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_rice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_sugar",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_wheat",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_kerosene",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "peopleCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_aadhar",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_kerosene",
          type: "uint256",
        },
      ],
      name: "transactKerosene",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_aadhar",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_rice",
          type: "uint256",
        },
      ],
      name: "transactRice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_aadhar",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_sugar",
          type: "uint256",
        },
      ],
      name: "transactSugar",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_aadhar",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_wheat",
          type: "uint256",
        },
      ],
      name: "transactWheat",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  "0xAEBF1431a70BDDc9DA8D37A80F4b2880Df76e959"
);
var version = web3.version; // "1.0.0"
console.log(version);

//rpds.addPerson(111122223333,'Abu Bakar',3,4,4,6);
/*
        web3.eth.getBlock(48, function(error, result){
            if(!error)
                console.log(JSON.stringify(result));
            else
                console.error(error);
        })
*/

//console.log(rpds);
//console.log(Web3.version);

//console.log(rpds.methods.addPerson(111122223333, "Shashi", 2, 3, 4, 5));
//console.log(rpds.methods.getPerson(111122223333));

//rpds.methods['findPerson(uint)'](111122223333);

/* rpds.methods
  .findPerson(333344445555)
  .call({ from: "0xC1945D3120A088246b61ac2b517f54e29106Ea20" }, function (
    error,
    result
  ) {
    if (!error) {
      console.log(result); //console.log(JSON.stringify(result));
      //var person = JSON.parse(result);
      let id = result[0];
      console.log("User ID: " + id);
    } else console.error(error);
  }); */

/*
        rpds.methods
          .addPerson(333344445555, "Shashi", 2, 3, 4, 5)
          .send({ from: "0xC1945D3120A088246b61ac2b517f54e29106Ea20" })
          .then(function (receipt) {
            console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
          });
*/
rpds.methods
  .transactRice(12345, 2)
  .send({ from: "0xC1945D3120A088246b61ac2b517f54e29106Ea20" })
  .then(function (receipt) {
    console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
  });
