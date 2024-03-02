import React from "react";
import avata1 from "../../Assets/avata1.jpg"
import avata2 from "../../Assets/avata2.jpg"
import avata3 from "../../Assets/avata3.jpg"
import avata4 from "../../Assets/avata4.jpg"
import { ClientWrapper } from "./style";
const Client = () => {
    return(
        <React.Fragment>
            <ClientWrapper>
            <div className="container-xl">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
                <li data-target="#myCarousel" data-slide-to={3} />
              </ol>   
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
              <div className="carousel-item active">
                        <div className="img-box"><img src={avata1} alt="ảnh lỗi" /></div>
                        <h4 className="name">Brandon Campbell</h4>
                        <h6 className="position">Product Manager, Airbnb</h6>
                        <p className="testimonial"><i class="fa-solid fa-quote-left"></i>Steve is a great developer! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                      </div>
                      <div className="carousel-item">
                        <div className="img-box"><img src={avata2} alt="ảnh lỗi" /></div>
                        <h4 className="name">Adam Wells</h4>
                        <h6 className="position">Product Manager, Google</h6>
                        <p className="testimonial"><i class="fa-solid fa-quote-left"></i>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                      </div>
                      <div className="carousel-item">
                        <div className="img-box"><img src={avata3} alt="ảnh lỗi" /></div>
                        <h4 className="name">Cheryl Bell</h4>
                        <h6 className="position">Product Manager, Dropbox</h6>
                        <p className="testimonial"><i class="fa-solid fa-quote-left"></i>Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                      </div>
                      <div className="carousel-item">
                        <div className="img-box"><img src={avata4} alt="ảnh lỗi" /></div>
                        <h4 className="name">David Lucas</h4>
                        <h6 className="position">Product Manager, Dropbox</h6>
                        <p className="testimonial"><i class="fa-solid fa-quote-left"></i>Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
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
            </ClientWrapper>
        </React.Fragment>
    )
}
export default Client


                      