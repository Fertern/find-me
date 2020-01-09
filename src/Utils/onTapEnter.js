export const onTapEnter = (func, lastKeyWasCtrl = false) => e => {
  if (e.keyCode === 13 && !lastKeyWasCtrl) {
    func();
    e.preventDefault();
  }
  if (e.keyCode === 17) {
    lastKeyWasCtrl = true;
  } else lastKeyWasCtrl = false;
  return onTapEnter;
};
