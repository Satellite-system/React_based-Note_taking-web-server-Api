import '../assets/css/about.css';
import React from "react";
import mission from '../assets/img/about-mission.jpg';
import plan from '../assets/img/about-plan.jpg';
import vision from '../assets/img/about-vision.jpg';

function About() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide h-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/3000x1600/?notes,app"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/3000x1600/?noting,app"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/3000x1600/?todo-list"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section id="about">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </header>

          <div class="row about-cols">
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div class="about-col">
                <div class="img">
                  <img
                    src={mission}
                    alt=""
                    class="img-fluid"
                  />
                  <div class="icon">
                    <i class="bi bi-bar-chart"></i>
                  </div>
                </div>
                <h2 class="title">
                  <a href="#">Our Mission</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div class="about-col">
                <div class="img">
                  <img
                    src={plan}
                    alt=""
                    class="img-fluid"
                  />
                  <div class="icon">
                    <i class="bi bi-brightness-high"></i>
                  </div>
                </div>
                <h2 class="title">
                  <a href="#">Our Plan</a>
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>
              </div>
            </div>

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div class="about-col">
                <div class="img">
                  <img
                    src={vision}
                    alt=""
                    class="img-fluid"
                  />
                  <div class="icon">
                    <i class="bi bi-calendar4-week"></i>
                  </div>
                </div>
                <h2 class="title">
                  <a href="#">Our Vision</a>
                </h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                  fugit, sed quia magni dolores eos qui ratione voluptatem sequi
                  nesciunt Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
