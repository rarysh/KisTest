import logo from "../logo.svg";
import "../App.css";

import { useState } from "react";

const Funcionality = () => {
  const [stringInsert, setStringInsert] = useState("");
  const [stringArr, setStringArr] = useState([]);
  const [flagUppercase, setFlagUppercase] = useState(false);

  const program = () => {
    const string = stringInsert.split(" ");
    let finalString = "";
    string.forEach((s) => {
      const str = singleWord(s);
      finalString += str + " ";
    });

    finalString.substring(0, finalString.length - 1);

    if (flagUppercase) {
      finalString =
        finalString.charAt(0).toUpperCase() +
        finalString.substring(1, finalString.length);
    }

    console.log(finalString);
  };

  const singleWord = (stringInsert) => {
    const string = stringInsert.split("");

    if (string) {
      const regExp = /^[^bcdfghjklmnpqrstzvwx]+$/i;

      const vowel = ["a", "e", "i", "o", "u", "y"];

      let firstVowel;
      let flagNoConsoants = false;
      if (regExp.test(stringInsert)) {
        flagNoConsoants = true;
      }
      if (string[0] !== string[0].toLowerCase) {
        setFlagUppercase(true);
      }
      string.forEach((s, index) => {
          if (!firstVowel) {
            if (vowel.includes(s)) {
              firstVowel = index;
            }
          }
      });
      //flag it
      let finalString;
      if (firstVowel) {
        const prefix = stringInsert.substring(0, firstVowel).toLowerCase();
        const stem = stringInsert
          .substring(firstVowel, stringInsert.length)
          .toLowerCase();
        // const stemArr = stem.split("");
        // stemArr.reverse();
        // const finalStem = stemArr.join("");
        console.log(prefix);
        console.log(stem);
        // console.log(finalStem);
        finalString = stem + prefix + "ay";
      }
      if (flagNoConsoants) {
        finalString = stringInsert + "yay";
      }

      return finalString;
      // console.log("final string "+ finalString);
      // setStringArr(stringArr.concat(finalString));
      // console.log(stringArr.concat(finalString));
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
        <button onClick={(e) => program()}>Button</button>
        <ul>
          {stringArr.map((string) => {
            <li>string</li>;
          })}
        </ul>
      </header>
    </div>
  );
};
export default Funcionality;
