export const requiredField = value => {
  if (!value) return "Field is required";
  return undefined;
};

export const maxLengthCreator = maxLength => value => {
  let textLength;
  if (!value) {
    textLength = 0;
  } else {
    textLength = value.length;
  }
  if (textLength > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
