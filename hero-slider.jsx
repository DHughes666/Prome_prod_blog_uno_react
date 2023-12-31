import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from "aos";
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSlider = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: true,
        });

        var swiper = new Swiper(".sliderFeaturedPosts", {
            spaceBetween: 0,
            speed: 500,
            centeredSlides: true,
            loop: true,
            slideToClickedSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
            }
        })
    })
    return (
            // <!-- ======= Hero Slider Section ======= --> 
            <section id="hero-slider" className="hero-slider">
                <div className="container-md" data-aos="fade-in">
                    <div className="row">
                    <div className="col-12">
                        <div className="swiper sliderFeaturedPosts">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                            <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('assets/img/post-slide-1.jpg')"}}>
                                <div className="img-bg-inner">
                                <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                </div>
                            </a>
                            </div>
                
                            <div className="swiper-slide">
                            <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('assets/img/post-slide-2.jpg')"}}>
                                <div className="img-bg-inner">
                                <h2>17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                </div>
                            </a>
                            </div>

                            <div className="swiper-slide">
                            <a href="single-post.html" className="img-bg d-flex align-items-end" style= {{backgroundImage: "url('assets/img/post-slide-3.jpg')"}}>
                                <div className="img-bg-inner">
                                <h2>13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                </div>
                            </a>
                            </div>

                            <div className="swiper-slide">
                            <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('assets/img/post-slide-4.jpg')"}}>
                                <div className="img-bg-inner">
                                <h2>9 Half-up/half-down Hairstyles for Long and Medium Hair</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="custom-swiper-button-next">
                            <span className="bi-chevron-right"></span>
                        </div>
                        <div className="custom-swiper-button-prev">
                            <span className="bi-chevron-left"></span>
                        </div>

                        <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
        
    )
}

export default HeroSlider;