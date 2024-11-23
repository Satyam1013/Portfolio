import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const cardVariant = (direction: any) => ({
  hidden: { opacity: 0, x: direction.x, y: direction.y },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
});

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!username) setErrMsg("Enter your Name");
    else if (!email) setErrMsg("Enter your Email");
    else if (!message) setErrMsg("Enter your Message");
    else {
      setErrMsg("");

      const templateParams = { username, user_email: email, message };

      emailjs
        .send(
          "service_csflbfc",
          "template_abxhlwr",
          templateParams,
          "th-QQ5jZnw984WVY_"
        )
        .then(() => {
          setSuccessMsg(
            `Thank you for your message, ${username}. I will respond to you at ${email} as soon as possible.`
          );

          setUsername("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          setErrMsg("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-6 py-16 text-white"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl uppercase font-semibold text-center mb-16">
          Contact Me
        </h2>

        {/* Responsive Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaMap className="text-designColor" />,
              text: "Dehradun, India",
            },
            {
              icon: <FaPhoneAlt className="text-designColor" />,
              text: "+91 9424919969",
            },
            {
              icon: <FaEnvelope className="text-designColor" />,
              text: "satyambanwale786@gmail.com",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-full p-8 shadow-lg rounded-xl bg-cardColor text-center hover:scale-105 transition-transform duration-500"
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false, margin: "-100px" }}
              variants={cardVariant({ x: 0, y: 50 })}
            >
              <div className="text-4xl flex justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-lg font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Form or Success Message */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={cardVariant({ x: 0, y: 50 })}
        >
          {successMsg ? (
            <p className="text-center text-lg font-semibold max-w-2xl mx-auto">
              {successMsg}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-full flex flex-col md:flex-row items-center gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full md:w-1/2 py-3 px-6 bg-transparent border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-1/2 py-3 px-6 bg-transparent border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-40 bg-transparent border border-white rounded-xl p-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>

              {errMsg && (
                <p className="bg-red-500 py-2 px-4 rounded-full text-center text-sm font-semibold">
                  {errMsg}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="bg-designColor px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all"
              >
                Submit Now
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm font-light">
          <p>
            For project inquiries, reach out at{" "}
            <span className="font-semibold text-designColor underline">
              satyambanwale786@gmail.com
            </span>
          </p>
          <p className="mt-2">
            &copy; 2024 Satyam Banwale. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
