import React from "react";

export default function Home() {
  return (
    <>
      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <img
            src="assets/img/hero-carousel/hero-carousel-3.svg"
            className="img-fluid animated"
          />
          <h2>
            Welcome to <span>VAR Soft Solution</span>
          </h2>
          <p>
           "Turing Vision Into Value"
          </p>
          <div className="d-flex">
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Sed ut perspici
                    </a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Magni Dolores
                    </a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay="600"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Nemo Enim
                    </a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>
                Architecto nobis eos vel nam quidem vitae temporibus voluptates
                qui hic deserunt iusto omnis nam voluptas asperiores sequi
                tenetur dolores incidunt enim voluptatem magnam cumque fuga.
              </p>
            </div>

            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-5">
                <div className="about-img">
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">
                  Neque officiis dolore maiores et exercitationem quae est seda
                  lidera pat claero
                </h3>
                <ul className="nav nav-pills mb-3">
                  <li>
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#tab1"
                    >
                      Saepe fuga
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                      Voluptates
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab3">
                      Corrupti
                    </a>
                  </li>
                </ul>{" "}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p className="fst-italic">
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>
                      Eius alias aut cupiditate. Dolor voluptates animi ut
                      blanditiis quos nam. Magnam officia aut ut alias quo
                      explicabo ullam esse. Sunt magnam et dolorem eaque magnam
                      odit enim quaerat. Vero error error voluptatem eum.
                    </p>
                  </div>

                  <div className="tab-pane fade show" id="tab2">
                    <p className="fst-italic">
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>
                      Eius alias aut cupiditate. Dolor voluptates animi ut
                      blanditiis quos nam. Magnam officia aut ut alias quo
                      explicabo ullam esse. Sunt magnam et dolorem eaque magnam
                      odit enim quaerat. Vero error error voluptatem eum.
                    </p>
                  </div>

                  <div className="tab-pane fade show" id="tab3">
                    <p className="fst-italic">
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>
                      Eius alias aut cupiditate. Dolor voluptates animi ut
                      blanditiis quos nam. Magnam officia aut ut alias quo
                      explicabo ullam esse. Sunt magnam et dolorem eaque magnam
                      odit enim quaerat. Vero error error voluptatem eum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-out">
            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-out">
            <div className="row g-5">
              <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                <h3>
                  Alias sunt quas <em>Cupiditate</em> oluptas hic minima
                </h3>
                <p>
                  {" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a className="cta-btn align-self-start" href="#">
                  Call To Action
                </a>
              </div>

              <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                <div className="img">
                  <img src="assets/img/cta.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="onfocus" className="onfocus">
          <div className="container-fluid p-0" data-aos="fade-up">
            <div className="row g-0">
              <div className="col-lg-6 video-play position-relative">
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox play-btn"
                ></a>
              </div>
              <div className="col-lg-6">
                <div className="content d-flex flex-column justify-content-center h-100">
                  <h3>Voluptatem dignissimos provident quasi corporis</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <a href="#" className="read-more align-self-start">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row gy-4 d-flex">
              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <i className="bi bi-binoculars color-cyan"></i>
                  <h4>Modinest</h4>
                </a>
              </li>{" "}
              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <i className="bi bi-box-seam color-indigo"></i>
                  <h4>Undaesenti</h4>
                </a>
              </li>{" "}
              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                >
                  <i className="bi bi-brightness-high color-teal"></i>
                  <h4>Pariatur</h4>
                </a>
              </li>{" "}
              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-4"
                >
                  <i className="bi bi-command color-red"></i>
                  <h4>Nostrum</h4>
                </a>
              </li>{" "}
              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-5"
                >
                  <i className="bi bi-easel color-blue"></i>
                  <h4>Adipiscing</h4>
                </a>
              </li>{" "}
              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-6"
                >
                  <i className="bi bi-map color-orange"></i>
                  <h4>Reprehit</h4>
                </a>
              </li>{" "}
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div
                    className="col-lg-8 order-2 order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h3>Modinest</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div
                    className="col-lg-4 order-1 order-lg-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src="assets/img/features-1.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3>Undaesenti</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Provident
                        mollitia neque rerum asperiores dolores quos qui a.
                        Ipsum neque dolor voluptate nisi sed.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-2.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3>Pariatur</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Provident
                        mollitia neque rerum asperiores dolores quos qui a.
                        Ipsum neque dolor voluptate nisi sed.
                      </li>
                    </ul>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-3.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3>Nostrum</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-4.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3>Adipiscing</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-5.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-6">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3>Reprehit</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-6.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Services</h2>
              <p>
                Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam
                occaecati dssumenda quas ut ad dolores adipisci aliquam.
              </p>
            </div>

            <div className="row gy-5">
              <div
                className="col-xl-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="service-item">
                  <div className="img">
                    <img
                      src="assets/img/services-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-activity"></i>
                    </div>
                    <a href="#" className="stretched-link">
                      <h3>Nesciunt Mete</h3>
                    </a>
                    <p>
                      Provident nihil minus qui consequatur non omnis maiores.
                      Eos accusantium minus dolores iure perferendis.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="service-item">
                  <div className="img">
                    <img
                      src="assets/img/services-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-broadcast"></i>
                    </div>
                    <a href="#" className="stretched-link">
                      <h3>Eosle Commodi</h3>
                    </a>
                    <p>
                      Ut autem aut autem non a. Sint sint sit facilis nam iusto
                      sint. Libero corrupti neque eum hic non ut nesciunt
                      dolorem.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="service-item">
                  <div className="img">
                    <img
                      src="assets/img/services-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-easel"></i>
                    </div>
                    <a href="#" className="stretched-link">
                      <h3>Ledo Markt</h3>
                    </a>
                    <p>
                      Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                      Minus ea aut. Vel qui id voluptas adipisci eos earum
                      corrupti.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="service-item">
                  <div className="img">
                    <img
                      src="assets/img/services-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-bounding-box-circles"></i>
                    </div>
                    <a href="#" className="stretched-link">
                      <h3>Asperiores Commodit</h3>
                    </a>
                    <p>
                      Non et temporibus minus omnis sed dolor esse consequatur.
                      Cupiditate sed error ea fuga sit provident adipisci neque.
                    </p>
                    <a href="#" className="stretched-link"></a>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="service-item">
                  <div className="img">
                    <img
                      src="assets/img/services-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-calendar4-week"></i>
                    </div>
                    <a href="#" className="stretched-link">
                      <h3>Velit Doloremque</h3>
                    </a>
                    <p>
                      Cumque et suscipit saepe. Est maiores autem enim facilis
                      ut aut ipsam corporis aut. Sed animi at autem alias eius
                      labore.
                    </p>
                    <a href="#" className="stretched-link"></a>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <div className="service-item">
                  <div className="img">
                    <img
                      src="assets/img/services-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-chat-square-text"></i>
                    </div>
                    <a href="#" className="stretched-link">
                      <h3>Dolori Architecto</h3>
                    </a>
                    <p>
                      Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                      neque non et debitis iure. Corrupti recusandae ducimus
                      enim.
                    </p>
                    <a href="#" className="stretched-link"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <div className="testimonials-slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Pricing</h2>
              <p>
                Architecto nobis eos vel nam quidem vitae temporibus voluptates
                qui hic deserunt iusto omnis nam voluptas asperiores sequi
                tenetur dolores incidunt enim voluptatem magnam cumque fuga.
              </p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>Free Plan</h3>
                    <h4>
                      <sup>$</sup>0<span> / month</span>
                    </h4>
                  </div>

                  <ul>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Quam adipiscing vitae proin</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Nec feugiat nisl pretium</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li className="na">
                      <i className="bi bi-x"></i>{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li className="na">
                      <i className="bi bi-x"></i>{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>

                  <div className="text-center mt-auto">
                    <a href="#" className="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
                <div className="pricing-item featured">
                  <div className="pricing-header">
                    <h3>Business Plan</h3>
                    <h4>
                      <sup>$</sup>29<span> / month</span>
                    </h4>
                  </div>

                  <ul>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Quam adipiscing vitae proin</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Nec feugiat nisl pretium</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>

                  <div className="text-center mt-auto">
                    <a href="#" className="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>Developer Plan</h3>
                    <h4>
                      <sup>$</sup>49<span> / month</span>
                    </h4>
                  </div>

                  <ul>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Quam adipiscing vitae proin</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Nec feugiat nisl pretium</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>

                  <div className="text-center mt-auto">
                    <a href="#" className="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content px-xl-5">
                  <h3>
                    Frequently Asked <strong>Questions</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>

                <div className="accordion accordion-flush px-xl-5" id="faqlist">
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        Non consectetur a erat nam at lectus urna duis?
                      </button>
                    </h3>
                    <div
                      id="faq-content-1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-2"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        Feugiat scelerisque varius morbi enim nunc faucibus a
                        pellentesque?
                      </button>
                    </h3>
                    <div
                      id="faq-content-2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-3"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi?
                      </button>
                    </h3>
                    <div
                      id="faq-content-3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-4"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        Ac odio tempor orci dapibus. Aliquam eleifend mi in
                        nulla?
                      </button>
                    </h3>
                    <div
                      id="faq-content-4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        <i className="bi bi-question-circle question-icon"></i>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-5"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat?
                      </button>
                    </h3>
                    <div
                      id="faq-content-5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="fun" style={{backgroundImage:"url(assets/img/faq.jpg)"}}>
                <img
                      src="assets/img/faq.jpg"
                      className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                      alt=""
                    />
               
                &nbsp;
              </div> */
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio" data-aos="fade-up">
          <div className="container">
            <div className="section-header">
              <h2>Portfolio</h2>
              <p>
                Non hic nulla eum consequatur maxime ut vero memo vero totam
                officiis pariatur eos dolorum sed fug dolorem est possimus esse
                quae repudiandae. Dolorem id enim officiis sunt deserunt esse
                soluta consequatur quaerat
              </p>
            </div>
          </div>

          <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
            <div
              className="portfolio-isotope"
              data-portfolio-filter="*"
              data-portfolio-layout="masonry"
              data-portfolio-sort="original-order"
            >
              <ul className="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>

              <div className="row g-0 portfolio-container">
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                  <img
                    src="assets/img/portfolio/app-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <a
                      href="assets/img/portfolio/app-1.jpg"
                      title="App 1"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product">
                  <img
                    src="assets/img/portfolio/product-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <a
                      href="assets/img/portfolio/product-1.jpg"
                      title="Product 1"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-branding">
                  <img
                    src="assets/img/portfolio/branding-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <a
                      href="assets/img/portfolio/branding-1.jpg"
                      title="Branding 1"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-books">
                  <img
                    src="assets/img/portfolio/books-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 1</h4>
                    <a
                      href="assets/img/portfolio/books-1.jpg"
                      title="Branding 1"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                  <img
                    src="assets/img/portfolio/app-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <a
                      href="assets/img/portfolio/app-2.jpg"
                      title="App 2"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product">
                  <img
                    src="assets/img/portfolio/product-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <a
                      href="assets/img/portfolio/product-2.jpg"
                      title="Product 2"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-branding">
                  <img
                    src="assets/img/portfolio/branding-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <a
                      href="assets/img/portfolio/branding-2.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-books">
                  <img
                    src="assets/img/portfolio/books-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 2</h4>
                    <a
                      href="assets/img/portfolio/books-2.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                  <img
                    src="assets/img/portfolio/app-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <a
                      href="assets/img/portfolio/app-3.jpg"
                      title="App 3"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product">
                  <img
                    src="assets/img/portfolio/product-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <a
                      href="assets/img/portfolio/product-3.jpg"
                      title="Product 3"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-branding">
                  <img
                    src="assets/img/portfolio/branding-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <a
                      href="assets/img/portfolio/branding-3.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-books">
                  <img
                    src="assets/img/portfolio/books-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 3</h4>
                    <a
                      href="assets/img/portfolio/books-3.jpg"
                      title="Branding 3"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>
                Architecto nobis eos vel nam quidem vitae temporibus voluptates
                qui hic deserunt iusto omnis nam voluptas asperiores sequi
                tenetur dolores incidunt enim voluptatem magnam cumque fuga.
              </p>
            </div>

            <div className="row gy-5">
              <div
                className="col-xl-4 col-md-6 d-flex"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6 d-flex"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6 d-flex"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-blog-posts" className="recent-blog-posts">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Blog</h2>
              <p>Recent posts form our Blog</p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="post-box">
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="meta">
                    <span className="post-date">Tue, December 12</span>
                    <span className="post-author"> / Julia Parker</span>
                  </div>
                  <h3 className="post-title">
                    Eum ad dolor et. Autem aut fugiat debitis voluptatem
                    consequuntur sit
                  </h3>
                  <p>
                    Illum voluptas ab enim placeat. Adipisci enim velit nulla.
                    Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi
                    cupiditate exercitationem qui magni est...
                  </p>
                  <a href="blog-details.html" className="readmore stretched-link">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                <div className="post-box">
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="meta">
                    <span className="post-date">Fri, September 05</span>
                    <span className="post-author"> / Mario Douglas</span>
                  </div>
                  <h3 className="post-title">
                    Et repellendus molestiae qui est sed omnis voluptates magnam
                  </h3>
                  <p>
                    Voluptatem nesciunt omnis libero autem tempora enim ut ipsam
                    id. Odit quia ab eum assumenda. Quisquam omnis aliquid
                    necessitatibus tempora consectetur doloribus...
                  </p>
                  <a href="blog-details.html" className="readmore stretched-link">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
                <div className="post-box">
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="meta">
                    <span className="post-date">Tue, July 27</span>
                    <span className="post-author"> / Lisa Hunter</span>
                  </div>
                  <h3 className="post-title">
                    Quia assumenda est et veritatis aut quae
                  </h3>
                  <p>
                    Quia nam eaque omnis explicabo similique eum quaerat
                    similique laboriosam. Quis omnis repellat sed quae
                    consectetur magnam veritatis dicta nihil...
                  </p>
                  <a href="blog-details.html" className="readmore stretched-link">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2>Contact Us</h2>
              <p>
                Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam
                occaecati dssumenda quas ut ad dolores adipisci aliquam.
              </p>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"              
            //   allowfullscreen
            ></iframe>
          </div>
          <div className="container">
            <div className="row gy-5 gx-lg-5">
              <div className="col-lg-4">
                <div className="info">
                  <h3>Get in touch</h3>
                  <p>
                    Et id eius voluptates atque nihil voluptatem enim in tempore
                    minima sit ad mollitia commodi minus.
                  </p>

                  <div className="info-item d-flex">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                  </div>

                  <div className="info-item d-flex">
                    <i className="bi bi-phone flex-shrink-0"></i>
                    <div>
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
