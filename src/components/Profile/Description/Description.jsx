import React from "react";
import s from "./Description.module.css";

const Description = props => {
  return (
    <div className={s.fullDesc}>
      {props.text}
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque iure sint
      error iste? Mollitia eum dicta earum, dolorum quae est enim explicabo
      dolore quam sapiente corrupti pariatur ipsam veniam sint odio commodi iste
      quia ipsa minima tempora similique reiciendis dolores eaque? Quos at sunt
      dolores ut consectetur praesentium magnam modi ad voluptate doloremque
      quod repudiandae harum, repellendus, beatae laboriosam explicabo
      voluptates ducimus. Non facere eligendi deleniti labore.
    </div>
  );
};

export default Description;
