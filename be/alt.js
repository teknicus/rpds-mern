const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8085;

const contractAddress = "0xAEBF1431a70BDDc9DA8D37A80F4b2880Df76e959";
const accountAddress = "0xC1945D3120A088246b61ac2b517f54e29106Ea20";

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
  contractAddress
);
var version = web3.version; // "1.0.0"
console.log(version);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/rem", function (req, res) {
  console.log(req.body.id);

  rpds.methods
    .findPerson(req.body.id)
    .call({ from: accountAddress }, function (error, result) {
      if (!error) {
        console.log(result);
        let id = result[0];
        console.log("User ID: " + id);
        res.send(result);
      } else console.error(error);
    });
});

app.get("/auth", function (req, res) {
  console.log(req.body.id);

  rpds.methods
    .findPerson(req.body.id)
    .call({ from: accountAddress }, function (error, result) {
      if (!error) {
        let id = result[0];
        console.log("User ID: " + id);
        if (id == 0) {
          res.end("fail");
          console.log("User not found");
        } else {
          let uData = {
            name: result[1],
            uid: result[0],
          };
          console.log(result);
        }
      } else console.error(error);
    });
});

app.post("/enroll", function (req, res) {
  let init = req.body;

  rpds.methods
    .addPerson(
      init.uid,
      init.name,
      init.rice,
      init.sugar,
      init.wheat,
      init.kerosene
    )
    .send({ from: accountAddress })
    .then(function (receipt) {
      console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
      res.send(receipt);
    });

  res.send("success");
});

app.post("/buy", function (req, res) {
  let transaction = req.body;
  console.log(transaction.item);

  switch (transaction.item) {
    case "rice":
      {
        rpds.methods
          .transactRice(transaction.uid, transaction.qty)
          .send({ from: accountAddress })
          .then(function (receipt) {
            console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
            res.send("done");
          });
      }
      break;
    case "wheat":
      {
        rpds.methods
          .transactWheat(transaction.uid, transaction.qty)
          .send({ from: accountAddress })
          .then(function (receipt) {
            console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
            res.send("ok");
          });
      }
      break;
    case "sugar":
      {
        rpds.methods
          .transactSugar(transaction.uid, transaction.qty)
          .send({ from: accountAddress })
          .then(function (receipt) {
            console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
            res.send("done");
          });
      }
      break;
    case "kerosene":
      {
        rpds.methods
          .transactKerosene(transaction.uid, transaction.qty)
          .send({ from: accountAddress })
          .then(function (receipt) {
            console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
            res.send("done");
          });
      }
      break;

    default:
      console.log("invalid item");
      res.send("Invalid Item");
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
