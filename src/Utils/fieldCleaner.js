export const fieldCleaner = func => e => {
  func();
  e.preventDefault();
  console.log(e);
  console.log("cleaner work");
  return fieldCleaner;
};
