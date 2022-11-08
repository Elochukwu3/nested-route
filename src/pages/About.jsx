import React from "react";
import { Video } from "../Video";
import videoSrc from "../plays/video2.mp4";
import aboutImg from "../plays/about.jpg";
import "../styles/About.css";

const aboutStyle ={
  position:' relative',
  overflow:' hidden',
  background: 'url(./stars.png),-webkit-gradient(linear, left top, right bottom, from(#00020b), to(#02093c))',
  // background: 'url(./stars.png),linear-gradient(to bottom right, #00020b, #02093c)',
}
export default function About() {
  return (
    <>
      <div className="about-container" style={aboutStyle}>
        <Video videoUrl={videoSrc} />
        <div>
          <section className="about-section">
            <div className="about-inner-text">
              <h1> The Heart of the Designer Community </h1>
              <p>
                We’re on a mission to build the world’s best community for
                creatives to share, grow, and get hired.
              </p>
            </div>
            <div className="about-inner">
              <img src={aboutImg} alt="about-img" />
            </div>
          </section>
          <div className="about-global">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="702"
                height="686"
                viewBox="0 0 702 686"
                fill="none"
                role="img"
                aria-labelledby="a8omu5mj78vvqhv2sh7sekapt6pffq9v"
              >
                <title id="a8omu5mj78vvqhv2sh7sekapt6pffq9v">
                  Company/global basketball
                </title>
                <circle
                  cx="240"
                  cy="240"
                  r="240"
                  transform="translate(111 103)"
                  fill="url(#paint0_radial)"
                  stroke="url(#paint1_radial)"
                  stroke-width="6"
                ></circle>
                <path
                  class="path-1"
                  d="M197.991 437.059C173.794 271.784 103.259 121.559 0 0"
                  transform="translate(259.761 120.951)"
                  stroke="url(#paint2_radial)"
                  stroke-width="6"
                ></path>
                <path
                  class="path-2"
                  d="M0 149.436C19.1211 150.604 38.7527 151.037 58.7612 150.677C237.762 147.451 384.327 81.7917 404.4 0"
                  transform="translate(112.212 169.296)"
                  stroke="url(#paint3_radial)"
                  stroke-width="6"
                ></path>
                <path
                  class="path-3"
                  d="M0 176.58C50.2817 72.1057 157.142 0 280.844 0C322.68 0 362.59 8.24744 399.037 23.2052"
                  transform="translate(190.656 345)"
                  stroke="url(#paint4_radial)"
                  stroke-width="6"
                ></path>
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(257 116)"
                  fill="white"
                ></circle>
                <circle
                  class="point-1"
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="11"
                  transform="translate(249 108)"
                  stroke="white"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(108 313)"
                  fill="white"
                ></circle>
                <circle
                  class="point-2"
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="11"
                  transform="translate(100 305)"
                  stroke="white"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(187 518)"
                  fill="white"
                ></circle>
                <circle
                  class="point-3"
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="11"
                  transform="translate(179 510)"
                  stroke="white"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(454 554)"
                  fill="white"
                ></circle>
                <circle
                  class="point-4"
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="11"
                  transform="translate(446 546)"
                  stroke="white"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(586 364)"
                  fill="white"
                ></circle>
                <circle
                  class="point-5"
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="11"
                  transform="translate(578 356)"
                  stroke="white"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(513 165)"
                  fill="white"
                ></circle>
                <circle
                  class="point-6"
                  opacity="0.2"
                  cx="12"
                  cy="12"
                  r="11"
                  transform="translate(505 157)"
                  stroke="white"
                  stroke-width="2"
                ></circle>
                <defs>
                  <radialGradient
                    id="paint0_radial"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(272.299 -493.888) scale(846.979) rotate(55.5015)"
                  >
                    <stop
                      offset="0.436464"
                      stop-color="#667AFF"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="0.774416"
                      stop-color="#667AFF"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="1" stop-color="#667AFF"></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(328 1100) scale(989.645) rotate(-130.369)"
                  >
                    <stop stop-color="#667AFF"></stop>
                    <stop offset="0.585635" stop-color="#667AFF"></stop>
                    <stop
                      offset="1"
                      stop-color="#667AFF"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-424 -869 319.686 -422.315 255.396 1090.21)"
                  >
                    <stop stop-color="#667AFF" stop-opacity="0"></stop>
                    <stop offset="0.302002" stop-color="#667AFF"></stop>
                    <stop offset="0.734807" stop-color="#667AFF"></stop>
                    <stop
                      offset="1"
                      stop-color="#667AFF"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-811 319 378.996 -1750.3 627.291 712.854)"
                  >
                    <stop stop-color="#667AFF" stop-opacity="0"></stop>
                    <stop offset="0.237569" stop-color="#667AFF"></stop>
                    <stop offset="0.680482" stop-color="#667AFF"></stop>
                    <stop
                      offset="1"
                      stop-color="#667AFF"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint4_radial"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-804 308 186.901 -1584.68 707.894 657.341)"
                  >
                    <stop stop-color="#667AFF"></stop>
                    <stop offset="0.585635" stop-color="#667AFF"></stop>
                    <stop
                      offset="1"
                      stop-color="#667AFF"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div>
              Dribbble is the go-to resource for discovering and connecting with
              designers and creative talent around the globe. Dribbble helps
              some of the world’s best design-forward companies including Apple,
              Airbnb, IDEO, Facebook, Google, Dropbox, Slack, Shopify, Lyft get
              exposure for their design teams and to help them hire expert
              creatives.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
