import "./Breadcrumb.module.css";

export default function Breadcrumb(props) {
  return (
    <section class="breadcrumb">
      <div class="breadcrumb-content col-11 col-lg-10 mx-auto">
        {/* <h1 class="breadcrumb-heading">{props.name}</h1> */}
        <p class="breadcrumb-links">
          <a href="/">Home</a> <span class="link-divider"> &gt; </span>{" "}
          <a>{props.name}</a>
        </p>
      </div>
    </section>
  );
}
