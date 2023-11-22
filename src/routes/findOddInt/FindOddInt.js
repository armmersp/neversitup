import React from "react";
import isJsonString from "../../utils/isJsonString";
import QuestionTemplate from "../../components/QuestionTemplate";

function FindOddInt() {
  const resolve = (input) => {
    if (!isJsonString(input)) {
      return "Invalid String";
    }
    const array = JSON.parse(input);
    for (let i = 0; array.length > 0; i++) {
      let countDuplicate = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          countDuplicate++;
        }
      }
      if (countDuplicate % 2 === 1) {
        return array[i];
      }
    }
  };

  return (
    <div>
      <QuestionTemplate
        title="Find Odd Integer"
        placeholder="[1,2,2,3,3]"
        resolve={resolve}
        defaultValue="[1,2,2,3,3]"
      />
    </div>
  );
}

export default FindOddInt;
