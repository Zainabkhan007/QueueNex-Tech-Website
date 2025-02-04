import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";
import GoogleMapComponent from "../../../components/GoogleMapComponent";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-12">
      <div className="w-full lg:w-[70%] container mx-auto flex flex-col justify-between gap-16 px-4 lg:px-12 lg:flex-row">
        <div className="flex justify-between  lg:w-1/2">
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Ai and Machine learning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Web development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Digital marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Mobile app
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  User testing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between w-full gap-6 lg:w-1/2">
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#reviews"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-3">
                <li>
                  <a
                    href="https://github.com/muhammadhar0on"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FaGithub size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/qr/Y6VMXUYQGMYGM1"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FaWhatsapp size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/queuenex-tech/posts/?feedView=all"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </li>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <MdEmail size={20} className="mt-1" />{" "}
                <span>queuenextech@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <FaPhone size={20} /> <span> +92-3124943062</span>
              </li>
              <li className="pr-4">
                <GoogleMapComponent />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-white text-center bg-black py-3">
        &copy; 2025 QueueNex Tech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
