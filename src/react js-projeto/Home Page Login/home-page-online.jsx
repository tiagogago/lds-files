import React from "react";
import "../../css/style.css";
import Dropdown from "../Dropdown/dropdown";
import settings_page from "../../react js-projeto/Settings-Page/settings_page";

const Portfolio = () => {
  return (
    <div>
      <Dropdown />
      <header
        id="masthead"
        className="site-header"
        data-anchor-target=".hero"
        data-top="background: rgba(255,25ef,255,0); padding: 30px 0; box-shadow: px 0px20px 6px rgba(0 0, 0, 0);"
        data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
      >
        <nav id="primary-navigation" className="site-navigation">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-target="#portfolio-perfect-collapse"
                aria-expanded="false"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a href="#hero" className="site-logo">
                <img
                  src="assets/img/logo-sud.png"
                  width="100"
                  height="100"
                  alt="logo"
                />
              </a>
            </div>
            <div className="main-menu" id="portfolio-perfect-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="page-scroll">
                  <a href="#hero">Home</a>
                </li>
                <li className="page-scroll">
                  <a href="#about">About</a>
                </li>
                <li className="page-scroll">
                  <a href="#recent_works">Recent Works</a>
                </li>
                <li className="page-scroll">
                  <a href="#upload_files">Upload Files</a>
                </li>
                <li className="page-scroll">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div id="hero" className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Bem-Vindo</h1>
              <div className="page-scroll">
                <p className="job-title">
                  <h1>(nome da pessoa online)</h1>
                </p>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <img
                src="assets/img/fotor-ai-20230729142241-transformed.png"
                width="350"
                height="400"
                alt="Tiago"
              />
            </div>
          </div>
        </div>
      </div>
      <main id="main" className="site-main">
        <section id="about" className="site-section section-about text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h2>About</h2>
                <img
                  src="assets/img/lines.svg"
                  className="img-lines"
                  alt="lines"
                />
                <p>
                  Hello! I'm Tiago Gago, a developer in training, a lover of
                  technology and constantly learning with the languages ​​and
                  ways of working that programming presents to me. I'm currently
                  doing some work including this one where you are, if you like
                  what you see, get in touch with me through my social networks
                  to be closer to my work and my developments over time in the
                  area I'm studying as Full Stack Web Development.
                </p>
                <a
                  href="/assets/img/CV-Tiago.png"
                  className="btn btn-fill"
                  target="_blank"
                  //onClick={window.download()}
                >
                  Download my cv
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section section-skills">
          <div className="container">
            <div className="text-center">
              <h3>Trabalhos Recentes</h3>
              <img
                src="assets/img/lines.svg"
                className="img-lines"
                alt="lines"
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="skill">
                  <h4>Html/css</h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      data-transitiongoal="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="skill">
                  <h4>Javascript</h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      data-transitiongoal="82"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="service"
          className="site-section section-services overlay text-center"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>What i do</h3>
                <img
                  src="assets/img/lines.svg"
                  className="img-lines"
                  alt="lines"
                />
              </div>
              <div className="col-sm-4">
                <div className="service">
                  <img
                    src="assets/img/front-end.svg"
                    alt="Front End Developer"
                  />
                  <h4>Front-end</h4>
                  <p>
                    As a Full Stack developer, I have experience in HTML5, CSS3,
                    Java Script and a few other ways of working within these
                    programming languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="site-section section-portfolio">
          <div className="container">
            <div className="text-center">
              <h3>My Recent Works</h3>
              <img
                src="assets/img/lines.svg"
                className="img-lines"
                alt="lines"
              />
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-6">
                <div className="portfolio-item">
                  <img src="assets/img/bomb.png" className="img-res" alt="" />
                  <div className="portfolio-item-info">
                    <h4>Explosive Bomb</h4>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#portfolioItem1"
                    >
                      <span className="glyphicon glyphicon-eye-open"></span>
                    </a>
                    <a href="#">
                      <span className="glyphicon glyphicon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="portfolio-item">
                  <img
                    src="assets/img/Futuristic Card.png"
                    className="img-res"
                    alt=""
                  />
                  <div className="portfolio-item-info">
                    <h4>Futuristic Card</h4>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#portfolioItem2"
                    >
                      <span className="glyphicon glyphicon-eye-open"></span>
                    </a>
                    <a href="#">
                      <span className="glyphicon glyphicon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="portfolio-item">
                  <img
                    src="assets/img/Digital Watch.png"
                    className="img-res"
                    alt=""
                  />
                  <div className="portfolio-item-info">
                    <h4>Digital Watch</h4>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#portfolioItem3"
                    >
                      <span className="glyphicon glyphicon-eye-open"></span>
                    </a>
                    <a href="#">
                      <span className="glyphicon glyphicon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="portfolio-item">
                  <img src="assets/img/candle.png" className="img-res" alt="" />
                  <div className="portfolio-item-info">
                    <h4>Candle</h4>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#portfolioItem4"
                    >
                      <span className="glyphicon glyphicon-eye-open"></span>
                    </a>
                    <a href="#">
                      <span className="glyphicon glyphicon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="portfolio-item">
                  <img
                    src="assets/img/Animation With Game Characters.png"
                    className="img-res"
                    alt=""
                  />
                  <div className="portfolio-item-info">
                    <h4>Animation With Game Characters</h4>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#portfolioItem5"
                    >
                      <span className="glyphicon glyphicon-eye-open"></span>
                    </a>
                    <a href="#">
                      <span className="glyphicon glyphicon-link"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <a href="#">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section section-counters text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <p className="counter start" data-to="1" data-speed="2000">
                  0
                </p>
                <h4>Years Experience</h4>
              </div>
              <div className="col-sm-4 col-xs-12">
                <p className="counter start" data-to="6" data-speed="2000">
                  0
                </p>
                <h4>Projects Done</h4>
              </div>
              <div className="col-sm-4 col-xs-12">
                <p
                  id="infinity"
                  className="counter"
                  data-from="0"
                  data-to="1"
                  data-speed="1000"
                >
                  0
                </p>
                <h4>
                  Seconds on this site!
                  <br />
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="site-section section-form text-center">
          <div className="container">
            <h3>Contact</h3>
            <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control mt-x-0"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-sm-12">
                  <textarea
                    name="message"
                    div
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <button href="#" className="btn btn-border" type="submit">
                Hire Me <span className="glyphicon glyphicon-send"></span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer id="colophon" className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <a className="icon facebook-bg" href="#">
                <i className="icon-facebook"></i>
              </a>
              <a className="icon twitter-bg" href="#">
                <i className="icon-twitter"></i>
              </a>
              <a className="icon gplus-bg" href="#">
                <i className="icon-linkedin"></i>
              </a>
              <a className="icon linkedin-bg" href="#">
                <i className="icon-gplus"></i>
              </a>
            </div>
            <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
              <p className="copyright">2024. All Rights Reserved</p>
            </div>
            <div className="col-sm-4 col-xs-3">
              <div className="text-right page-scroll">
                <a className="icon icon-up-bg" href="#hero">
                  <i className="icon-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="portfolioItem1" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <a className="close" data-dismiss="modal">
                <span className="glyphicon glyphicon-remove"></span>
              </a>
              <img className="img-res" src="assets/img/bomb.png" alt="" />
            </div>
            <div className="modal-body">
              <h4 className="modal-title">1º Project</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo finibus tristique. Maecenas dignissim condimentum sem eu
                tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                turpis facilisis consectetur quis vel ante. Integer in massa ut
                nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel
                ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper
                dolor non hendrerit.
              </p>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn btn-fill">
                Visit Page
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolioItem2" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <a className="close" data-dismiss="modal">
                <span className="glyphicon glyphicon-remove"></span>
              </a>
              <img
                className="img-res"
                src="assets/img/Futuristic Card.png"
                alt=""
              />
            </div>
            <div className="modal-body">
              <h4 className="modal-title">2º Project</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo finibus tristique. Maecenas dignissim condimentum sem eu
                tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                turpis facilisis consectetur quis vel ante. Integer in massa ut
                nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel
                ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper
                dolor non hendrerit.
              </p>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn btn-fill">
                Visit Page
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolioItem3" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <a className="close" data-dismiss="modal">
                <span className="glyphicon glyphicon-remove"></span>
              </a>
              <img
                className="img-res"
                src="assets/img/Digital Watch.png"
                alt=""
              />
            </div>
            <div className="modal-body">
              <h4 className="modal-title">3º Project</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo finibus tristique. Maecenas dignissim condimentum sem eu
                tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                turpis facilisis consectetur quis vel ante. Integer in massa ut
                nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel
                ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper
                dolor non hendrerit.
              </p>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn btn-fill">
                Visit Page
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolioItem4" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <a className="close" data-dismiss="modal">
                <span className="glyphicon glyphicon-remove"></span>
              </a>
              <img className="img-res" src="assets/img/candle.png" alt="" />
            </div>
            <div className="modal-body">
              <h4 className="modal-title">4º Project</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo finibus tristique. Maecenas dignissim condimentum sem eu
                tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                turpis facilisis consectetur quis vel ante. Integer in massa ut
                nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel
                ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper
                dolor non hendrerit.
              </p>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn btn-fill">
                Visit Page
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolioItem5" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <a className="close" data-dismiss="modal">
                <span className="glyphicon glyphicon-remove"></span>
              </a>
              <img
                className="img-res"
                src="assets/img/Animation With Game Characters1.png"
                alt=""
              />
            </div>
            <div className="modal-body">
              <h4 className="modal-title">5º Project</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo finibus tristique. Maecenas dignissim condimentum sem eu
                tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                turpis facilisis consectetur quis vel ante. Integer in massa ut
                nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel
                ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper
                dolor non hendrerit.
              </p>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn btn-fill">
                Visit Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
