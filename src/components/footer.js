import React from "react"  
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaTelegram} from 'react-icons/fa'
export default () => ( 
    <footer className="footer">
         <div class="container">
            <div class="row gap-y align-items-center">
                <div class="col-12 col-lg-4">
                    <p class="text-center text-lg-left">
                    <a target="_blank" href="https://canya.io"><img style={{height: `25px`}} src="https://canya.io/images/CanYa_logo.png"></img></a></p>
                </div>
                <div class="col-12 col-lg-4 text-center">
                    <ul class="nav nav-primary nav-hero" style={{textTransform: `uppercase`, color: `#535353`, height: `50px` }}>
                    <li class="nav-item"><a class="nav-link" target="_blank" href="https://canya.io/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" target="_blank" href="https://medium.com/canyacoin">Blog</a></li>
                    <li class="nav-item">
                        <a class="nav-link">
                        <img class="mb-5" src="https://canwork.io/assets/img/CanApps.svg" width="auto" height="18px"></img>
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="social social-lg text-center text-lg-right">
                        <a class="social-facebook" target="_blank" href="https://www.facebook.com/CanYaCoin/">
                            <FaFacebook/>
                        </a>
                        <a class="social-twitter" target="_blank" href="https://twitter.com/canyacoin">
                            <FaTwitter/>
                        </a>
                        <a class="social-instagram" target="_blank" href="https://www.instagram.com/canyacoin/">
                            <FaInstagram/>
                        </a>
                        <a class="social-youtube" target="_blank" href="https://www.youtube.com/channel/UCbbpsDWjpdC-4LjDnF4Ec6w/">
                            <FaYoutube/>
                        </a>
                        <a class="social-github" target="_blank" href="https://github.com/canyaio/">
                            <FaGithub/>
                        </a>
                        <a class="social-telegram" target="_blank" href="https://t.me/joinchat/GI97FhDD1lf6dh-r9XRdvA">
                            <FaTelegram/>
                        </a>
                    </div>
                </div>
            </div>
        </div>  
    </footer>
)