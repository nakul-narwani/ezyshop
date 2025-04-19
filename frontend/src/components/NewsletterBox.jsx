import { useState } from "react";
const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-800 mt-3">
        Join our newsletter to stay updated with the latest drops, exclusive
        deals, and style inspiration — straight to your inbox!
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email."
          className="w-full sm:flex-1 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-1 py-4 "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
