"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import products from "../../data/products";
import "./product.css";

export default function ProductPage() {
  const { slug } = useParams();
  const router = useRouter();

  const product = products.find((item) => item.slug === slug);

  if (!product)
    return (
      <p style={{ textAlign: "center", marginTop: "100px" }}>
        Product not found.
      </p>
    );

  return (
    <main className="product-page">
      <div className="product-container">
        <div className="product-left">
          <Image
            src={product.img}
            alt={product.name}
            width={450}
            height={450}
            className="product-main-image"
          />
        </div>

        <div className="product-right">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-short">{product.desc}</p>
          <p className="product-price">৳{product.price}</p>
          <p className={`product-stock ${product.inStock ? "in" : "out"}`}>
            {product.inStock ? "In Stock ✅" : "Out of Stock ❌"}
          </p>

          <div className="quantity-section">
            <span>Quantity:</span>
            <input type="number" defaultValue="1" min="1" />
          </div>

          <div className="button-row">
            <button
              className="buy-btn"
              onClick={() =>
                router.push(
                  `/checkout?product=${encodeURIComponent(product.name)}&desc=${encodeURIComponent(
                    product.desc
                  )}&price=${product.price}`
                )
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <section className="product-details">
        <h2>Product Description</h2>
        <p>
          The <strong>{product.name}</strong> delivers a rich and consistent
          flavor experience designed for vape enthusiasts who crave both
          smoothness and intensity. Each puff delivers the perfect balance of
          freshness and flavor — {product.desc.toLowerCase()} Ideal for users
          looking for premium performance with long-lasting satisfaction.
        </p>

        <ul className="details-list">
          <li>✔ 12000 Puffs Capacity</li>
          <li>✔ Transparent Oil Tank</li>
          <li>✔ Type-C Fast Charging</li>
          <li>✔ Leak-proof Design</li>
          <li>✔ Authentic Flavor Consistency</li>
        </ul>
      </section>
    </main>
  );
}
