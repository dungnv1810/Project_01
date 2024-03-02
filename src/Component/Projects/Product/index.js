import React from "react";
import london from "../../Assets/London.jpg";
import newyork from "../../Assets/New York.jpg"
import paris from "../../Assets/Paris.jpg"
import kualalumpur from "../../Assets/Kuala Lumpur.jpg"
import agra from "../../Assets/Agra.jpg"
import dubai from "../../Assets/dubai.jpg"
import riodejaneiro from "../../Assets/Rio De Janeiro.jpg"
import giza from "../../Assets/Giza.jpg"
import sydney from "../../Assets/sydney.jpg"
import { ProductWrapper } from "./style";
const Product = () =>{
    return(
        <React.Fragment>
            <ProductWrapper>
            <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-mg-6 mx-auto">
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>   
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={london} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>London</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={newyork} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>New York</h4>
                          <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>
                    </div>				
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={paris} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Paris</h4>
                          <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>					
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={kualalumpur} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Kuala Lumpur</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={agra} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Agra</h4>
                          <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={dubai} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Dubai</h4>
                          <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>					
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={riodejaneiro} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Rio De Janeiro</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={giza} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Giza</h4>
                          <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={sydney} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Sydney</h4>
                          <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                          <a href="#" className="btn btn-primary">More <i className="fa fa-angle-right" /></a>
                        </div>						
                      </div>					
                    </div>
                  </div>
                </div>
              </div>
              {/* Carousel controls */}
              <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
            </ProductWrapper>
        </React.Fragment>
    )
}
export default Product;