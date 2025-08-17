import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./App.css";

export default function Dreamdecorsite() {
  // Simple reveal-on-scroll for a premium feel
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="site">
      {/* ====== Sticky Header with Logo + Elegant Name ====== */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <img
              className="brand-logo"
              src="/images/Dream Decors Events Logo_page-0001.jpg"
              alt="Dream Decors logo"
            />
            <span className="brand-name">Dream Decors</span>
          </a>

          <nav className="nav">
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="btn btn-outline">
              Enquire
            </a>
          </nav>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage:
            "url('/images/513928101_18128884513444378_7438463624269673816_n.jpg')",
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-badge reveal">Trusted by couples & brands</div>

          <h1 className="hero-title reveal">Crafting Your Perfect Moments</h1>
          <p className="hero-sub reveal">
            Bespoke event décor for weddings, soirées, and brand experiences —
            warm, refined, timeless.
          </p>

          <div className="hero-ctas reveal">
            <a href="#portfolio" className="btn">
              View Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Request Quote
            </a>
          </div>

          <div className="hero-stats reveal">
            <div>
              <span>120+</span>
              <small>Events Styled</small>
            </div>
            <div>
              <span>8 yrs</span>
              <small>Experience</small>
            </div>
            <div>
              <span>100%</span>
              <small>Client Love</small>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Portfolio ====== */}
      <section id="portfolio" className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>Portfolio</h2>
            <p>Curated highlights from recent celebrations.</p>
          </div>

          <div className="featured-grid">
            {/* Row 1 */}
            <article className="featured-card reveal">
              <div className="featured-media">
                <img
                  src="/images/513797609_720046490765541_5674548720430387209_n.jpg"
                  alt="Intimate wedding palette"
                />
              </div>
              <div className="featured-text">
                <h3>Whispered Blush</h3>
                <p>
                  Soft florals, candlelit ambience, and subtle gold accents for
                  a private soirée.
                </p>
              </div>
            </article>

            {/* Row 2 (reversed) */}
            <article className="featured-card reverse reveal">
              <div className="featured-media">
                <img
                  src="/images/483214749_1362534561749446_1251849253510767112_n.jpg"
                  alt="Outdoor Wedding"
                />
              </div>
              <div className="featured-text">
                <h3>Whispers of Elegance</h3>
                <p>
                  Step into a dreamy celebration under the open sky — where
                  elegance meets nature. From flowing floral arrangements to
                  ambient lighting, every detail is curated to make your outdoor
                  wedding a timeless memory.
                </p>
              </div>
            </article>

            {/* Row 3 */}
            <article className="featured-card reveal">
              <div className="featured-media">
                <img
                  src="/images/491433554_18122392489444378_7097424086896697170_n.jpg"
                  alt="Garden celebration"
                />
              </div>
              <div className="featured-text">
                <h3>Garden Soirée</h3>
                <p>
                  Airy textures and layered greens for a relaxed, elegant
                  outdoor celebration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ====== Mosaic for extra scroll depth ====== */}
      <section id="mosaic" className="mosaic-section reveal">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mosaic-swiper"
        >
          <SwiperSlide>
            <img
              src="/images/482144189_2217595118638176_324840492972745833_n.jpg"
              alt="Detail 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/483214749_1362534561749446_1251849253510767112_n.jpg"
              alt="Detail 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/491433554_18122392489444378_7097424086896697170_n.jpg"
              alt="Detail 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/504598637_1503293024382939_8505140994921066569_n.jpg"
              alt="Detail 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/528316404_1411610776739217_4068103587940238655_n.jpg"
              alt="Detail 5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/521293297_18130697710444378_2951060685034046885_n.jpg"
              alt="Detail 6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/513928101_18128884513444378_7438463624269673816_n.jpg"
              alt="Detail 7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/508794641_1046252324240596_2362747253516824541_n.jpg"
              alt="Detail 8"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ====== Services ====== */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-head reveal">
            <h2>Services</h2>
            <p>Your Vision, Our Creation.</p>
          </div>

          <div className="cards-grid">{/* ... your services cards here ... */}</div>

          <div className="badges reveal">
            <span>Stage & Mandap</span>
            <span>Florals</span>
            <span>Lighting</span>
            <span>Tablescapes</span>
            <span>Signage</span>
            <span>Installations</span>
          </div>
        </div>
      </section>

      {/* ====== About ====== */}
      <section id="about" className="section section-alt">
        <div className="container about-grid">
          <div className="about-text reveal">
            <h2>About Us</h2>
            <p>
              We are artisans of atmosphere. From intimate gatherings to grand
              celebrations, we design spaces that feel personal, polished, and
              unforgettable.
            </p>
            <ul className="about-list">
              <li>Original line illustrations & textures</li>
              <li>Warm, inviting palettes</li>
              <li>Tasteful animations & refined typography</li>
            </ul>
          </div>
          <div className="about-media reveal">
            <img
              src="/images/Dream Decors Events Logo_page-0001.jpg"
              alt="Dream Decors team at work"
            />
          </div>
        </div>
      </section>

      {/* ====== Process ====== */}
      <section id="process" className="section">
        <div className="container">
          <div className="section-head reveal">
            <h2>How We Work</h2>
            <p>Simple, thoughtful, thorough.</p>
          </div>

          <ol className="steps">
            <li className="reveal">
              <span className="step-num">1</span>
              <div>
                <h4>Discover</h4>
                <p>We listen to your story, venue, and vision.</p>
              </div>
            </li>
            <li className="reveal">
              <span className="step-num">2</span>
              <div>
                <h4>Design</h4>
                <p>Moodboards, palettes, and layouts tailored to you.</p>
              </div>
            </li>
            <li className="reveal">
              <span className="step-num">3</span>
              <div>
                <h4>Deliver</h4>
                <p>On-site execution with meticulous detailing.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ====== Testimonials ====== */}
      <section id="testimonials" className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>Kind Words</h2>
            <p>Notes from unforgettable days.</p>
          </div>

          <div className="testi-grid">
            <blockquote className="testi reveal">
              “Every corner felt intentional. Dream Decors brought our story to
              life.”
              <cite>— Aisha & Karan</cite>
            </blockquote>
            <blockquote className="testi reveal">
              “Professional, calm, and exceptionally creative. Our launch looked
              world-class.”
              <cite>— Riva Brands</cite>
            </blockquote>
            <blockquote className="testi reveal">
              “Elegant without being overdone. Guests still talk about it.”
              <cite>— Meera S.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-head reveal">
            <h2>FAQ</h2>
            <p>Quick essentials.</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item reveal">
              <h4>Do you travel for events?</h4>
              <p>Yes — across UAE, based on scope and availability.</p>
            </div>
            <div className="faq-item reveal">
              <h4>How early should we book?</h4>
              <p>
                For weddings, 2–4 months in advance is ideal; for brand events,
                3–6 weeks.
              </p>
            </div>
            <div className="faq-item reveal">
              <h4>What’s the typical budget?</h4>
              <p>
                Packages are tailored. We’ll shape a design that fits your
                priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Contact ====== */}
      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <div className="contact-text reveal">
            <h2>Let’s Plan Your Event</h2>
            <p>Minimal steps. Quick reply. We’ll get back within 24 hours.</p>
            <ul className="contact-list">
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Email:</strong> hello@dreamdecors.in
              </li>
              <li>
                <strong>Location:</strong> Dubai,United Arab Emirates
              </li>
            </ul>
          </div>

          <form
            className="contact-form reveal"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              Name
              <input type="text" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" required placeholder="you@mail.com" />
            </label>
            <label>
              Event Details
              <textarea rows="5" placeholder="Date, venue, guest count" />
            </label>
            <button className="btn" type="submit">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Dream Decors. All rights reserved.</p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
