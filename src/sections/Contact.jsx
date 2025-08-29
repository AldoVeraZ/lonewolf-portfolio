import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();

  const [loading, setloading] = useState(false);
  const [form, setform] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setform({ ...form, [name]: value });
  };

  // service_kd1s90u
  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true);

    try {
      await emailjs.send(
        "service_p2fc7v2",
        "template_79mmqkq",
        {
          from_name: form.name,
          to_name: "Aldo",
          from_email: form.email,
          to_email: "aestebanveraz@gmailcom",
          message: form.message,
        },
        "sy_eLrqByYQAXza6v"
      );

      setloading(false);

      alert("Your message has been sent!");

      setform({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setloading(false);

      console.log(error);

      alert("Something went wrong");
    }
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img
          src="/assets/bgContact.jpg"
          alt="terminal background"
          className="absolute inset-0 h-full w-full object-cover"
        /> */}
        <div className="contact-bento">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I’m eager to bring my skills to your company—let’s start a
            conversation!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Ronnie James Dio"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ronniejamesdio@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
