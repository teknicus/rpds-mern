pragma solidity >=0.5.1;

contract rpds_kiosk {
    Person[] public people;

    uint256 public peopleCount;
    uint _index;

    struct Person {
        uint _aadhar;
        string _name;
        uint _rice;
        uint _sugar;
        uint _wheat;
        uint _kerosene;
    }

    function addPerson(uint _aadhar, string memory _name, uint _rice, uint _sugar, uint _wheat, uint _kerosene) public {
        people.push(Person(_aadhar, _name, _rice, _sugar, _wheat, _kerosene));
        peopleCount += 1;
    }

    function findPerson(uint _aadhar) public view returns (uint, string memory, uint, uint, uint, uint) {
        for (uint temp=0; temp<peopleCount; temp++) {
            if (people[temp]._aadhar == _aadhar){
            return (people[temp]._aadhar,
                    people[temp]._name,
                    people[temp]._rice,
                    people[temp]._sugar,
                    people[temp]._wheat,
                    people[temp]._kerosene);
            }
        }
    }

    function transactRice(uint _aadhar, uint _rice) public {
        for (uint temp=0; temp<peopleCount; temp++) {
            if (people[temp]._aadhar == _aadhar){
                people[temp]._rice -= _rice;
            }
        }
    }

    function transactSugar(uint _aadhar, uint _sugar) public {
        for (uint temp=0; temp<peopleCount; temp++) {
            if (people[temp]._aadhar == _aadhar){
                people[temp]._sugar -= _sugar;
            }
        }
    }

    function transactWheat(uint _aadhar, uint _wheat) public {
        for (uint temp=0; temp<peopleCount; temp++) {
            if (people[temp]._aadhar == _aadhar){
                people[temp]._wheat -= _wheat;
            }
        }
    }

    function transactKerosene(uint _aadhar, uint _kerosene) public {
        for (uint temp=0; temp<peopleCount; temp++) {
            if (people[temp]._aadhar == _aadhar){
                people[temp]._kerosene -= _kerosene;
            }
        }
    }

}
