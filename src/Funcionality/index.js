import logo from "../logo.svg";
import "../App.css";

import { useState } from "react";

const Funcionality = () => {
  const [stringInsert, setStringInsert] = useState("");

  const regexOnlyCharacter = /[^a-zA-Z]+/;

  const kisTest = () => {
    let finalString = "";
    const string = stringInsert.split(" ");
    string.forEach((s) => {
      finalString += requirement1(s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) + " ";
    });

    if (finalString.length > 0)
      finalString.substring(0, finalString.length - 1);
    console.log("String final: " + finalString);
  };

  const requirement1 = (str) => {
    let stringArr = str.split("");
    let flagSymbol = false;

    stringArr.forEach((s) => {
      if (s.search(regexOnlyCharacter)) {
        flagSymbol = true;
      }
    });
    if (!flagSymbol) {
      console.log("requirement1: " + stringArr.join(""));
      return stringArr.join("");
    }
    console.log("requirement1: " + stringArr.join(""));
    return requirement2(stringArr);
  };
  const requirement2 = (string) => {
    let symbol = "";
    string.forEach((s, i, obj) => {
      if (!s.search(regexOnlyCharacter)) {
        symbol += s;
      }
    });
    const result = string.filter((x) => x.search(regexOnlyCharacter));
    console.log(
      "requirement2: " +
        result.join("") +
        symbol
    );
    return requirement3(result) + symbol;
  };

  const requirement3 = (string) => {
    let flagUppercase = false;
    if (string[0] !== string[0].toLowerCase()) {
      flagUppercase = true;
    }
    let response = requirement6(string);
    if (flagUppercase)
      response = response.charAt(0).toUpperCase() + response.slice(1);
    console.log("requirement3: " + response);
    return response;
  };
  const requirement4 = (str) => {
    const string = str.split("");
    const vowel = ["a", "e", "i", "o", "u", "y"];
    let firstVowel = "";
    string.forEach((s, index) => {
      if (firstVowel === "") {
        if (vowel.includes(s)) {
          firstVowel = index;
        }
      }
    });

    const prefix = str.substring(0, firstVowel).toLowerCase();
    const stem = str.substring(firstVowel, stringInsert.length).toLowerCase();
    console.log("requirement4: " + JSON.stringify({ prefix, stem }));
    return requirement5({ prefix, stem });
  };
  const requirement5 = ({ prefix, stem } = {}) => {
    const result = stem + prefix + "ay";
    console.log("requirement5: " + result);
    return result;
  };
  const requirement6 = (string) => {
    const regexConsonants = /(?![aeiouy])[a-z]/gi;
    let flagConsonant = false;

    string.forEach((s) => {
      if (regexConsonants.test(s)) {
        flagConsonant = true;
      }
    });
    let response = string.join("");
    if (!flagConsonant) {
      console.log("requirement6: " + response + "yay");
      return response + "yay";
    } else {
      console.log("requirement6: " + response);
      return requirement4(response);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          onChange={(e) => {
            setStringInsert(e.target.value);
          }}
        />
        <button onClick={(e) => kisTest()}>Button</button>
      </header>
    </div>
  );
};
export default Funcionality;
