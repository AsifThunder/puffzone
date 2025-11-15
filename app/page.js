"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  /* ------------------ PRODUCT ARRAYS ------------------ */

  const flyto = [
    { img: "/p1 (1).jpg", name: "Caramel Tobacco", slug: "caramel-tobacco-flyto", desc: "Rich caramel fused with smooth, premium tobacco.", price: 650, inStock: true },
    { img: "/p1 (2).jpg", name: "Grape Ice", slug: "grape-ice-flyto", desc: "Frosty grape burst with a sweet chill.", price: 650, inStock: true },
    { img: "/p1 (3).jpg", name: "Sour Strawberry", slug: "sour-strawberry-flyto", desc: "Tangy strawberry twist with an icy bite.", price: 650, inStock: true },
    { img: "/p1 (4).jpg", name: "Kiwi Ice", slug: "kiwi-ice-flyto", desc: "Crisp kiwi layered with cool frost.", price: 650, inStock: true },
    { img: "/p1 (5).jpg", name: "Mango Berry", slug: "mango-berry-flyto", desc: "Sweet mango swirled with wild berries.", price: 650, inStock: true },
    { img: "/p1 (6).jpg", name: "Triple Mango", slug: "triple-mango-flyto", desc: "Threefold tropical mango explosion.", price: 650, inStock: true },
    { img: "/p1 (7).jpg", name: "Watermelon Ice", slug: "watermelon-ice-flyto", desc: "Classic juicy watermelon, frozen to perfection.", price: 650, inStock: true },
    { img: "/p1 (8).jpg", name: "Cola Ice", slug: "cola-ice-flyto", desc: "Cool cola splash with fizzy undertones.", price: 650, inStock: true },
    { img: "/p1 (9).jpg", name: "Blue Razz Ice", slug: "blue-razz-ice-flyto", desc: "Electric blue raspberry with an arctic kick.", price: 650, inStock: true },
    { img: "/p1 (10).jpg", name: "Peach Mango Watermelon", slug: "peach-mango-watermelon-flyto", desc: "A juicy trio of peach, mango & watermelon bliss.", price: 650, inStock: true },
  ];

  const vlotbar = [
    { img: "/Watermelon mango voltbar.png", name: "Watermelon Mango Voltbar", slug: "watermelon-mango-voltbar", desc: "Sweet mango & watermelon blend with an icy finish.", price: 1300, inStock: true },
    { img: "/watermelon (1).png", name: "Watermelon Ice", slug: "watermelon-ice-voltbar", desc: "Sweet watermelon with cooling freshness.", price: 1300, inStock: true },
    { img: "/Mango bubblegum.png", name: "Mango Bubblegum", slug: "mango-bubblegum-voltbar", desc: "Juicy mango blended with bubblegum.", price: 1300, inStock: true },
   { img: "/48.png", name: "Watermelon Lychee", slug: "watermelon-lychee-voltbar", desc: "Juicy watermelon blended with sweet exotic lychee.", price: 1300, inStock: true },
    { img: "/hanwair mango vlotbar.png", name: "Hawaiian Mango", slug: "hawaiian-mango-voltbar", desc: "Tropical mango with an icy kick.", price: 1300, inStock: true },
    { img: "/6.png", name: "Strawberry Ice", slug: "strawberry-ice-voltbar", desc: "Fresh strawberry with cool exhale.", price: 1300, inStock: true },
    { img: "/7.png", name: "Honeydew Ice", slug: "honeydew-ice-voltbar", desc: "Smooth honeydew with a cold finish.", price: 1300, inStock: true },
    { img: "/honeydew.png", name: "Blackcurrant Honeydew", slug: "blackcurrant-honeydew-voltbar", desc: "Blackcurrant balanced with honeydew.", price: 1300, inStock: true },
    { img: "/9.png", name: "Lychee Peach Ice", slug: "lychee-peach-ice-voltbar", desc: "Lychee & peach blended with frost.", price: 1300, inStock: true },
    { img: "/vlotbar Strawberry Bubblegum.png", name: "Strawberry Bubblegum", slug: "strawberry-bubblegum-voltbar", desc: "Classic strawberry bubblegum.", price: 1300, inStock: true },
    { img: "/battery.png", name: "Voltbar Battery", slug: "voltbar-battery", desc: "Powerful 650mAh Voltbar replacement battery.", price: 750, inStock: true },
  ];

  const thatVapes = [
    { img: "/that (1).jpg", name: "Watermelon", slug: "watermelon-thatvape", desc: "Sweet & juicy watermelon chill.", price: 1500, inStock: true },
    { img: "/that that mango.jpg", name: "Mango", slug: "mango-thatvape", desc: "Creamy tropical mango.", price: 1500, inStock: true },
    { img: "/cola 2.jpg", name: "Grape", slug: "grape-thatvape", desc: "Bold grape with smooth hit.", price: 1500, inStock: true },
    { img: "/that that cola.jpg", name: "Cola Ice", slug: "cola-ice-thatvape", desc: "Chilled cola fizz.", price: 1500, inStock: true },
    { img: "/that (5).jpg", name: "Apple", slug: "apple-thatvape", desc: "Crisp red & green apple.", price: 1500, inStock: true },
    { img: "/that (6).jpg", name: "Caramel Popcorn", slug: "caramel-popcorn-thatvape", desc: "Caramel coated popcorn.", price: 1500, inStock: true },
  ];

  const allProducts = [...flyto, ...vlotbar, ...thatVapes];

  /* ----------- SEARCH LOGIC (Category + Name) ----------- */
  const filteredProducts = allProducts.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.slug.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term) ||

      // category search
      (term.includes("flyto") && item.slug.includes("flyto")) ||
      (term.includes("volt") && item.slug.includes("voltbar")) ||
      (term.includes("vlot") && item.slug.includes("voltbar")) ||
      (term.includes("that") && item.slug.includes("thatvape"))
    );
  });

  return (
    <main>
      <header className="navbar">
        <div className="logo">
          <img src="/Logos.png" alt="Puff Zone Logo" />
        </div>

        {/* SEARCH BAR */}
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
          <a onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>
            Products
          </a>
          <a onClick={() => document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" })}>
            Support
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="offers" className="hero">
        <picture>
          <source srcSet="/offer.png" media="(max-width: 700px)" />
          <img src="/Landing.jpg" alt="Landing" className="hero-single" />
        </picture>
      </section>

      {/* SEARCH RESULTS */}
      {searchTerm && (
        <section className="products">
          <h2>Search Results</h2>
          <div className="product-grid">
            {filteredProducts.map((item, i) => (
              <Link href={`/product/${encodeURIComponent(item.slug)}`} key={i}>
                <div className="product-card">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p className="desc">{item.desc}</p>
                  <p className="price">৳{item.price}</p>
                  <p className={`stock ${item.inStock ? "in" : "out"}`}>
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </p>
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
          {/* FLYTO */}
          <section id="products" className="products">
            <h2>Flyto Switch</h2>
            <div className="product-grid">
              {flyto.map((item, i) => (
                <Link href={`/product/${encodeURIComponent(item.slug)}`} key={i}>
                  <div className="product-card">
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">৳{item.price}</p>
                    <p className={`stock ${item.inStock ? "in" : "out"}`}>
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                    <button>View Product</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* VLOTBAR */}
          <section className="products">
            <h2>Voltbar</h2>
            <div className="product-grid">
              {vlotbar.map((item, i) => (
                <Link href={`/product/${encodeURIComponent(item.slug)}`} key={i}>
                  <div className="product-card">
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">৳{item.price}</p>
                    <p className={`stock ${item.inStock ? "in" : "out"}`}>
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                    <button>View Product</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* THAT·THAT */}
          <section className="products">
            <h2>That·That vapes</h2>
            <div className="product-grid">
              {thatVapes.map((item, i) => (
                <Link href={`/product/${encodeURIComponent(item.slug)}`} key={i}>
                  <div className="product-card">
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">৳{item.price}</p>
                    <p className={`stock ${item.inStock ? "in" : "out"}`}>
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                    <button>View Product</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      {/* MODERN REVIEWS SECTION */}
      <section className="reviews modern-reviews">
        <h2>⭐ Customer Reviews</h2>
        <div className="review-grid modern">
          <div className="review-card modern">
            <p>“Top quality and fast delivery! Best vape shop in Dhaka.”</p>
            <div className="reviewer">— Arafat, Dhaka</div>
          </div>

          <div className="review-card modern">
            <p>“Peach Mango Watermelon 🔥🔥 Full flavour, no burn.”</p>
            <div className="reviewer">— Imran, Mirpur</div>
          </div>

          <div className="review-card modern">
            <p>“Customer service replies instantly. Very rare in BD.”</p>
            <div className="reviewer">— Zihan, Banani</div>
          </div>

          <div className="review-card modern">
            <p>“Fast delivery. Packaging was premium. 10/10.”</p>
            <div className="reviewer">— Mahir, Uttara</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-logo">PUFF <span>ZONE</span></h2>
            <p className="footer-tagline">
              Experience the next level of vaping — authentic, smooth, bold.
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
          <p>© {new Date().getFullYear()} Puff Zone — Designed by 
            <span className="credit">
              <a href="https://www.instagram.com/onlyone_asif/">onlyone_asif</a>
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
