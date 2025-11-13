"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import "./page.css";

export default function CheckoutContent() {
  const params = useSearchParams();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [delivery, setDelivery] = useState(80); // default inside Dhaka

  useEffect(() => {
    const product = params.get("product");
    const priceParam = params.get("price");

    if (product) setProductName(decodeURIComponent(product));
    if (priceParam) setPrice(Number(priceParam));
    else setPrice(650);
  }, [params]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔥 calculate price including delivery
  const totalPrice = price * quantity + delivery;

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "8801857624441";

    const message = `
📦 *New Order from Puff Zone*
🧃 *Product:* ${productName}
💰 *Unit Price:* ৳${price}
🔢 *Quantity:* ${quantity}
🚚 *Delivery Charge:* ৳${delivery}
💵 *Total Payable:* ৳${totalPrice}

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
          <strong>Price:</strong> ৳{price} <br />
          <strong>Quantity:</strong> {quantity} <br />
          <strong>Delivery:</strong> ৳{delivery} <br />
          <strong style={{ color: "#00c3ff", fontSize: "1.2rem" }}>
            Total: ৳{totalPrice}
          </strong>
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
            placeholder="Full Address (Area, House No, etc)"
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

          {/* 🔥 Quantity */}
          <input
            type="number"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />

          {/* 🔥 DELIVERY SELECTION */}
          <select
            className="delivery-select"
            value={delivery}
            onChange={(e) => setDelivery(Number(e.target.value))}
          >
            <option value={80}>Inside Dhaka – ৳80</option>
            <option value={120}>Outside Dhaka – ৳120</option>
          </select>

          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </main>
  );
}
