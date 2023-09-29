/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer-styles.css';
import FooterHeader from './footer-header/footer-header-component';
import FooterRecentPosts from './footer-recent-posts/footer-recent-posts-component';
const Footer = () => {
    return (
        // <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">

  <div class="footer-content">
    <div class="container">

      <div class="row g-5">
        <FooterHeader />
        <div class="col-6 col-lg-2">
          <h3 class="footer-heading">Navigation</h3>
          <ul class="footer-links list-unstyled">
            <li><a href="index.html"><i class="bi bi-chevron-right"></i> Home</a></li>
            <li><a href="index.html"><i class="bi bi-chevron-right"></i> Blog</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Categories</a></li>
            <li><a href="single-post.html"><i class="bi bi-chevron-right"></i> Single Post</a></li>
            <li><a href="about.html"><i class="bi bi-chevron-right"></i> About us</a></li>
            <li><a href="contact.html"><i class="bi bi-chevron-right"></i> Contact</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h3 class="footer-heading">Categories</h3>
          <ul class="footer-links list-unstyled">
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Business</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Culture</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Sport</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Food</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Politics</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Celebrity</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Startups</a></li>
            <li><a href="category.html"><i class="bi bi-chevron-right"></i> Travel</a></li>

          </ul>
        </div>
        <FooterRecentPosts />
      </div>
    </div>
  </div>

  <div class="footer-legal">
    <div class="container">

      <div class="row justify-content-between">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <div class="copyright">
            © Copyright <strong><span>ZenBlog</span></strong>. All Rights Reserved
          </div>

          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ --> */}
            Designed by <a href="#">Prome</a>
          </div>

        </div>

        <div class="col-md-6">
          <div class="social-links mb-3 mb-lg-0 text-center text-md-end">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>

        </div>

      </div>

    </div>
  </div>

</footer>
    )
}

export default Footer;