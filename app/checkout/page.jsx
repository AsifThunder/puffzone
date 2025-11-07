import { Suspense } from "react";
import CheckoutContent from "./CheckoutContent";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", marginTop: "100px" }}>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
