import React from "react";
import isJsonString from "../../utils/isJsonString";
import QuestionTemplate from "../../components/QuestionTemplate";

function CountSmile() {
  const countSmileys = (array) => {
    let countSmile = 0;
    array.forEach((str) => {
      const eyes = [":", ";"];
      const smiles = [")", "D"];
      const noses = ["-", "~"];
      if (str.length !== 2 && str.length !== 3) return;
      if (eyes.includes(str.charAt(0))) {
        const isNoseValid =
          str.length === 3 ? noses.includes(str.charAt(1)) : true;
        if (!isNoseValid) return;
        if (smiles.includes(str.charAt(str.length - 1))) countSmile++;
      }
    });
    return countSmile;
  };

  const resolve = (input) => {
    if (!isJsonString(input.replaceAll("'", '"'))) {
      return "Invalid String";
    }
    const array = JSON.parse(input.replaceAll("'", '"'));
    return countSmileys(array);
  };

  return (
    <div>
      <QuestionTemplate
        title="Find Smiley Faces"
        placeholder="[':)', ';(', ';}', ':-D']"
        resolve={resolve}
        defaultValue="[':)', ';(', ';}', ':-D']"
      />
    </div>
  );
}

export default CountSmile;
