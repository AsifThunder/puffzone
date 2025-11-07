"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import "./page.css";

export default function CheckoutPage() {
  const params = useSearchParams();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = params.get("product");
    const priceParam = params.get("price");

    if (product) setProductName(decodeURIComponent(product));
    if (priceParam) setPrice(Number(priceParam));
    else setPrice(650); // fallback default
  }, [params]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "8801857624441"; // your real number
    const totalPrice = price * quantity;

    const message = `
📦 *New Order from Puff Zone*
🧃 *Product:* ${productName || "Not specified"}
💰 *Unit Price:* ৳${price}
🔢 *Quantity:* ${quantity}
💵 *Total:* ৳${totalPrice}

👤 *Name:* ${formData.name}
🏠 *Address:* ${formData.address}
📞 *Phone:* ${formData.phone}
    `;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>
        <h2>{productName || "Product not found"}</h2>
        <p>
          Price: ৳{price} <br /> Quantity: {quantity} <br />
          <strong>Total: ৳{price * quantity}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Quantity"
            required
          />
          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </main>
  );
}
