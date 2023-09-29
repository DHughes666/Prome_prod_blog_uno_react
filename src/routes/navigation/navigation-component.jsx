/* eslint-disable jsx-a11y/anchor-is-valid */
import './navigation-styles.css';

const Navigation = () => {
    return (
        <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Single Post</a></li>
          <li className="dropdown"><a href="category.html"><span>Categories</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Search Result</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </nav>
    )
}

export default Navigation;