"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const flyto = [
    { img: "/p1 (1).jpg", name: "Caramel Tobacco", desc: "Rich caramel fused with smooth, premium tobacco.", inStock: true },
    { img: "/p1 (2).jpg", name: "Grape Ice", desc: "Frosty grape burst with a sweet chill.", inStock: true },
    { img: "/p1 (3).jpg", name: "Sour Strawberry", desc: "Tangy strawberry twist with an icy bite.", inStock: true },
    { img: "/p1 (4).jpg", name: "Kiwi Ice", desc: "Crisp kiwi layered with cool frost.", inStock: true },
    { img: "/p1 (5).jpg", name: "Mango Berry", desc: "Sweet mango swirled with wild berries.", inStock: true },
    { img: "/p1 (6).jpg", name: "Triple Mango", desc: "Threefold tropical mango explosion.", inStock: true },
    { img: "/p1 (7).jpg", name: "Watermelon Ice", desc: "Classic juicy watermelon, frozen to perfection.", inStock: true },
    { img: "/p1 (8).jpg", name: "Cola Ice", desc: "Cool cola splash with fizzy undertones.", inStock: true },
    { img: "/p1 (9).jpg", name: "Blue Razz Ice", desc: "Electric blue raspberry with an arctic kick.", inStock: true },
    { img: "/p1 (10).jpg", name: "Peach Mango Watermelon", desc: "A juicy trio of peach, mango & watermelon bliss.", inStock: true },
  ];

  const vlotbar = [
    { img: "/r1 (1).jpg", name: "Raspberry Lemonade Ice", desc: "Sweet raspberry fizz with icy citrus zing.", inStock: true },
    { img: "/r1 (2).jpg", name: "Mint Ice", desc: "Pure cool mint refreshment with smooth inhale.", inStock: true },
    { img: "/r1 (3).jpg", name: "Pineapple Ice", desc: "Juicy pineapple splash with arctic twist.", inStock: true },
    { img: "/r1 (4).jpg", name: "Blueberry Raspberry", desc: "Ripe blueberry meets tangy raspberry punch.", inStock: true },
    { img: "/r1 (5).jpg", name: "Mango Ice", desc: "Tropical mango with an icy kick.", inStock: true },
    { img: "/r1 (6).jpg", name: "Strawberry Ice", desc: "Fresh strawberry sweetness with cool exhale.", inStock: true },
    { img: "/r1 (7).jpg", name: "Honeydew Ice", desc: "Smooth honeydew with clean cold finish.", inStock: true },
    { img: "/r1 (8).jpg", name: "Blackcurrant Honeydew", desc: "Bold blackcurrant balanced with mellow melon.", inStock: true },
    { img: "/r1 (9).jpg", name: "Lychee Peach Ice", desc: "Exotic lychee blended with sweet peach frost.", inStock: true },
    { img: "/r1 (10).jpg", name: "Blue Razz Ice", desc: "Iconic blue raspberry freeze effect.", inStock: true },
  ];

  const thatVapes = [
    { img: "/that (1).jpg", name: "Watermelon", desc: "Sweet & juicy watermelon with refreshing chill.", inStock: true },
    { img: "/that (2).jpg", name: "Mango", desc: "Creamy tropical mango with rich aroma.", inStock: true },
    { img: "/that (3).jpg", name: "Grape", desc: "Bold grape flavor with smooth satisfaction.", inStock: true },
    { img: "/that (4).jpg", name: "Cola Ice", desc: "Chilled cola fizz with a spark of freshness.", inStock: true },
    { img: "/that (5).jpg", name: "Apple", desc: "Crisp red & green apple fusion — juicy and bright.", inStock: true },
    { img: "/that (6).jpg", name: "Caramel Popcorn", desc: "Sweet caramel drizzled over warm popcorn delight.", inStock: true },
  ];

  const allProducts = [...flyto, ...vlotbar, ...thatVapes];

  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
        <header className="navbar">
         <div className="logo">
  <img src="/Logos.png" alt="Puff Zone Logo" />
</div>


          <div className="search-area">
            <input
          type="text"
          placeholder="Search vapes, brands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">Search</button>
          </div>

          <nav className="nav-links">
            <a href="#">Home</a>
            <a onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>Products</a>
            <a onClick={() => {
            const hero = document.querySelector(".hero-single");
            hero?.classList.add("glow");
            setTimeout(() => hero?.classList.remove("glow"), 500);
          }}>Offers</a>
          <a onClick={() => document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" })}>Support</a>
        </nav>
      </header>

      {/* ✅ SINGLE LANDING IMAGE */}
     <section id="offers" className="hero">
  <picture>
    {/* mobile image */}
    <source srcSet="/offer.png" media="(max-width: 700px)" />
    {/* desktop image */}
    <img src="/Landing.jpg" alt="Landing" className="hero-single" />
  </picture>
</section>


      {/* SEARCH RESULTS */}
      {searchTerm && (
        <section className="products">
          <h2>Search Results</h2>
          <div className="product-grid">
            {filteredProducts.map((item, index) => (
              <Link href={`/product/${encodeURIComponent(item.name)}`} key={index}>
                <div className="product-card">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p className="desc">{item.desc}</p>
                  <p className="price">৳650</p>
                  <p className={`stock ${item.inStock ? "in" : "out"}`}>{item.inStock ? "In Stock" : "Out of Stock"}</p>
                  <button disabled={!item.inStock}>View Product</button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* PRODUCT SECTIONS */}
      {!searchTerm && (
        <>
          <section id="products" className="products">
            <h2>Flyto Switch</h2>
            <div className="product-grid">
              {flyto.map((item, i) => (
                <Link href={`/product/${encodeURIComponent(item.name)}`} key={i}>
                  <div className="product-card">
                    <img src={item.img} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">৳650</p>
                    <p className={`stock ${item.inStock ? "in" : "out"}`}>{item.inStock ? "In Stock" : "Out of Stock"}</p>
                    <button disabled={!item.inStock}>View Product</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="products">
            <h2>Vlotbar</h2>
            <div className="product-grid">
              {vlotbar.map((item, i) => (
                <Link href={`/product/${encodeURIComponent(item.name)}`} key={i}>
                  <div className="product-card">
                    <img src={item.img} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">৳650</p>
                    <p className={`stock ${item.inStock ? "in" : "out"}`}>{item.inStock ? "In Stock" : "Out of Stock"}</p>
                    <button disabled={!item.inStock}>View Product</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ✅ THAT.THAT SECTION */}
          <section className="products">
            <h2>That·That</h2>
            <div className="product-grid">
              {thatVapes.map((item, i) => (
                <Link href={`/product/${encodeURIComponent(item.name)}`} key={i}>
                  <div className="product-card">
                    <img src={item.img} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">৳650</p>
                    <p className={`stock ${item.inStock ? "in" : "out"}`}>{item.inStock ? "In Stock" : "Out of Stock"}</p>
                    <button disabled={!item.inStock}>View Product</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
{/* FAQ */} <section id="support" className="faq"> <h2>❓ Frequently Asked Questions</h2> <div className="faq-container"> <div className="faq-item"><h3>Is Puff Zone’s product authentic?</h3><p>Yes — we only sell original Flyto and Vlotbar vapes from verified distributors.</p></div> <div className="faq-item"><h3>Do you deliver outside Dhaka?</h3><p>Yes, nationwide by courier. Dhaka usually within 24 hours.</p></div> <div className="faq-item"><h3>Payment methods?</h3><p>Cash on Delivery (COD), bKash, Nagad.</p></div> <div className="faq-item"><h3>Return policy?</h3><p>Unused & sealed devices can be exchanged within 48 hours.</p></div> </div> </section> {/* REVIEWS */} <section className="reviews"> <h2>⭐ Customer Reviews</h2> <div className="review-grid"> <div className="review-card"><p>"Top quality and fast delivery! My new go-to vape shop."</p><div className="reviewer">– Arafat, Dhaka</div></div> <div className="review-card"><p>"The flavors are 🔥 especially Peach Mango Watermelon!"</p><div className="reviewer">– Imran, Mirpur</div></div> <div className="review-card"><p>"Customer service actually replies. That’s rare here."</p><div className="reviewer">– Zihan, Banani</div></div> <div className="review-card"><p>"Got my order within a day. Fully satisfied."</p><div className="reviewer">– Mahir, Uttara</div></div> </div> </section>
      {/* FOOTER */}
   <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h2 className="footer-logo">PUFF <span>ZONE</span></h2>
      <p className="footer-tagline">
        Experience the next level of vaping — authentic, smooth, and bold.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact</h3>
      <p>📍 Dhaka, Bangladesh</p>
      <div className="socials">
        <a href="https://www.facebook.com/profile.php?id=61568116922387" target="_blank">Facebook</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Puff Zone — Designed by <span className="credit"><a href="https://www.instagram.com/onlyone_asif/">onlyone_asif</a></span></p>
  </div>
</footer>

    </main>
  );
}
