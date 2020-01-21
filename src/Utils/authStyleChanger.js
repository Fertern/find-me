import backgroundImg from "./../assets/blueLake.jpg";

export const authStyleChanger = value => {
  if (value) {
    window.document.body.style.backgroundImage = null;
    window.document.body.style.backgroundColor = "#96d8f6";
  } else {
    window.document.body.style.background = `cover url(${backgroundImg})`;
  }
  return value ? "app-wrapper" : "app-wrapper_login";
};
