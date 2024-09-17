import React, { useState, useEffect } from "react";

export default function PrimarySection(props) {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    if (props.bgColor === "lightgrey") {
      setBackgroundColor("rgba(230, 230, 230, 0.5)");
    } else if (props.bgColor === "primary") {
      setBackgroundColor("#3f72af");
    } else {
      setBackgroundColor("transparent");
    }
  }, [props.bgColor]);

  return (
    <section
      style={{
        marginTop: props.mt || props.my,
        marginBottom: props.mb || props.my,
        paddingTop: props.pt || props.py,
        paddingBottom: props.pb || props.py,
        backgroundColor: backgroundColor,
      }}
      className={props.className}
    >
      {props.children}
    </section>
  );
}
