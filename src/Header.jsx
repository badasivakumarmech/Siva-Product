import logo from '../src/All Images/pab bottom-logo (1).jpg'
import './Home1.css'



function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm">
                <div class="container">
                    <img src= {logo}alt="logo" width="200px" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                        style={{ backgroundcolor: "black" }}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav logostyle">
                            <li class="nav-item">
                                <a class="nav-link navstyle1" href="./">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle navstyle" href="./"  >Browse Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle navstyle" href="./ "  >Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle navstyle" href="#"  >services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle navstyle" href="./ "  >payments</a>
                            </li>
                            <li class="nav-item logosymbol">
                                <i class="fa-solid fa-bell bellicon"></i>
                            </li>
                            <li class="nav-item logosymbol">
                                <a href="profile.html"> <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
                                ></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;