import React from "react";

function Bio() {
  return (
    <>
      {/* <section className="grid-bio">
        <div className="container-bio">
          <h2>Despre</h2>
          <p>
            lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="container-bio">
          <img
            className="bio-image"
            alt=""
            src="https://images.pexels.com/photos/1433271/pexels-photo-1433271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </section>
      <section className="grid-bio">
        <div className="container-bio-2">
          <img
            className="bio-image"
            alt=""
            src="https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="container-bio-2">
          <h2>Despre</h2>
          <p>
            lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </section> */}
      <section class="testimonary-section">
        <div class="container first-step">
          <div class="img-container-first-step">
            <img
              class="first-step-image"
              src="https://images.pexels.com/photos/1433271/pexels-photo-1433271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="first"
            />
          </div>

          <div class="first-step-txtbox">
            <p class="tag">Experienta</p>
            <h2 class="header-secondary first-step-header">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </h2>
            <p class="first-step-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis rerum corrupti ad officiis. Iste dolorem, dolores
              similique a molestiae autem? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Cumque, quae! Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
      <section class="testimonary-section">
        <div class="container second-step">
          <div class="first-step-txtbox">
            <p class="tag">Curatenie</p>
            <h2 class="header-secondary first-step-header">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </h2>
            <p class="first-step-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis rerum corrupti ad officiis. Iste dolorem, dolores
              similique a molestiae autem? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Cumque, quae! Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="img-container-first-step">
            <img
              class="second-step-image"
              src="https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="first"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Bio;
