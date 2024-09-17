export default function Container(props) {
  return (
    <div className="col-11 col-lg-9 mx-auto p-0">
      <div
        className={props.className}
        style={{
          marginTop: props.mt || props.my,
          marginBottom: props.mb || props.my,
          paddingTop: props.pt || props.py,
          paddingBottom: props.pb || props.py,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
