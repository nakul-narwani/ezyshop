import { useState } from "react";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description"); // Default active tab

  return (
    <div className="mt-20">
      {/* Tab Buttons */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-5 py-3 text-sm font-semibold ${
            activeTab === "description"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-5 py-3 text-sm font-semibold ${
            activeTab === "reviews"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Reviews (122)
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
  {activeTab === "description" && (
    <p>
      Discover the perfect blend of <strong>style, comfort, and durability</strong> with our latest collection. 
      Crafted with <strong>premium materials</strong>, this product ensures all-day wear without compromising on elegance.  
      
      Designed to fit seamlessly into both casual and formal settings, it features a <strong>sleek silhouette</strong>, 
      <strong>breathable fabric</strong>, and attention to detail that speaks volumes. Whether you’re at work, on a weekend getaway, 
      or simply relaxing, this piece is your go-to for effortless style.  
      
      <strong>Key Highlights:</strong>
      <ul className="list-disc list-inside mt-2">
        <li>✨ <strong>Premium Quality Fabric:</strong> Soft, breathable, and long-lasting.</li>
        <li>👕 <strong>Modern Fit:</strong> Tailored for a flattering, comfortable look.</li>
        <li>🌿 <strong>Eco-Friendly Materials:</strong> Sustainable without compromising style.</li>
        <li>💧 <strong>Easy Care:</strong> Machine washable with minimal maintenance.</li>
      </ul>
      
      Elevate your wardrobe with a touch of sophistication. It’s not just an outfit—it’s a statement.
    </p>
        )}

        {activeTab === "reviews" && (
          <div>
            <p className="font-semibold text-gray-800">User Reviews:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>"Great product! Highly recommend." - Jane D.</li>
              <li>"Good quality and fast shipping." - Mark J.</li>
              <li>"Exactly as described. Would buy again!" - Sarah K.</li>
              <li>"Not bad, but could be better." - Alex P.</li>
              <li>"Love it! Perfect fit." - Chris L.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
