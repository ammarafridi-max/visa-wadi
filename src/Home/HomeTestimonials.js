// import TestimonialCard from "./HomeComponents/TestimonialCard";

export default function HomeTestimonials() {
  let testimonials = [
    {
      key: 1,
      profile: "images/stewie.jpg",
      name: "Stewie Griffin",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      key: 2,
      profile: "images/peter.jpg",
      name: "Peter Griffin",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      key: 3,
      profile: "images/ben.jpg",
      name: "Ben Affleck",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  return (
    <section class="testimonials">
      {/* <div class="col-lg-10 mx-auto">
        <div class="section-title text-center">
          <p>What our customers say about us?</p>
          <h2>Testimonials</h2>
          <div class="section-border mx-auto"></div>
        </div>

        <div class="row d-flex justify-content-evenly">
          {testimonials.map(createCard)}
        </div>
      </div> */}
    </section>
  );
}
