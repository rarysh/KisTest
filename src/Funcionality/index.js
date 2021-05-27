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
      finalString += requirement1(s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) + " "; //removed accentuation
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
        flagSymbol = true; // there is a symbol
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
        symbol += s; //saving symbols to put on the end
      }
    });
    const result = string.filter((x) => x.search(regexOnlyCharacter)); //removed symbol from this string
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
      flagUppercase = true; //first letter is uppercase
    }
    let response = requirement6(string);
    if (flagUppercase)
      response = response.charAt(0).toUpperCase() + response.slice(1); //uppercase aplied
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
        flagConsonant = true; // there is a consonant
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

    /*
      Improvements that should be made:
        This code should support accentuation, been treated as letters. 
          How would I do it?
            Change the regex
        All symbols should preserve it's positioning, instead of being put at the end of the string.
          How would I do it?
              Every string should sent to requirement1 should end at the first symbol

      I have to finish somethings from work that came up, so I can't make this improvements, but I believe you get the idea.

    */
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
