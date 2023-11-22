import React from "react";
import permute from "../../utils/permute";
import QuestionTemplate from "../../components/QuestionTemplate";

function Permutation() {
  const resolve = (input) => {
    const permuteResult = permute(input);
    return "['" + permuteResult.join("','") + "']";
  };

  return (
    <div>
      <QuestionTemplate
        title="Find Permutation"
        placeholder="dsa"
        resolve={resolve}
        defaultValue="dsa"
      />
    </div>
  );
}

export default Permutation;
