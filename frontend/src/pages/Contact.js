import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    // 🔹 FALLBACK: mailto (no backend)
    if (!process.env.REACT_APP_API_URL) {
      const subject = encodeURIComponent(`Portfolio Contact — ${payload.name}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`
      );

      window.location.href = `mailto:siddharthriot@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("error");
    }
  }

  return (
    <PageWrapper>
      <Layout>
        <motion.div
          className="max-w-md select-none cursor-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-12">
            Contact
          </h1>

          <p className="text-muted font-body leading-[1.75] mb-10">
            Have an idea, opportunity, or just want to talk tech?
            <br />
            Drop a message — I read everything.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 font-body select-text cursor-text"
          >
            <input
              className="w-full bg-transparent border border-white/5 rounded-md px-4 py-3
                         focus:outline-none focus:border-accent transition"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status === "sending"}
            />

            <input
              className="w-full bg-transparent border border-white/5 rounded-md px-4 py-3
                         focus:outline-none focus:border-accent transition"
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status === "sending"}
            />

            <textarea
              className="w-full bg-transparent border border-white/5 rounded-md px-4 py-3
                         focus:outline-none focus:border-accent transition"
              name="message"
              rows="5"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              disabled={status === "sending"}
            />

            {/* btn */}
            <AnimatePresence>
              {status !== "success" && (
                <motion.button
                  type="submit"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3
                             rounded-md font-medium hover:opacity-90 transition cursor-pointer
                             disabled:opacity-60"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message →"}
                </motion.button>
              )}
            </AnimatePresence>

            {/* SUCCESS */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-center gap-3 text-green-400 font-medium"
                >
                  <span className="text-xl">✓</span>
                  Message sent successfully
                </motion.div>
              )}
            </AnimatePresence>

            {status === "error" && (
              <p className="text-sm text-red-400 mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </Layout>
    </PageWrapper>
  );
}

export default Contact;