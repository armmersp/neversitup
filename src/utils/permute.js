function permute(str) {
  if (str.length === 1) {
    return [str];
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let temp = [...str];
    temp.splice(i, 1);
    let tempPermute = permute(temp.join("")).map((e) => str[i] + e);
    result = [...result, ...tempPermute];
  }
  return [...new Set(result)];
}

export default permute;