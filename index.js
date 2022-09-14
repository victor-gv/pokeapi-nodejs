import fs from "fs";
import axios from "axios";

for (let i = 1; i <= 151; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  const { data } = await axios.get(url);
  //Get the types type.name[0] and assign it to a variable
  const { id, types } = data;

  const dataToStore = {
    id,
    types: types.map((type) => type.type.name),
  };
  //Store the dataToStore in the dataTypes.json file
  fs.appendFile(
    "dataTypes.json",
    JSON.stringify(dataToStore) + ",",
    (err) => err && console.log(err)
  );
}
