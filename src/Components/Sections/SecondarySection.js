import React, { useState, useEffect } from "react";

export default function SecondarySection(props) {
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
