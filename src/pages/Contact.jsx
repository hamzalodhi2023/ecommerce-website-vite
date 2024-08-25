import Button from "../components/layout/ui/Button";

function Contact() {
  return (
    <>
      <h2 className="py-5 text-center text-3xl font-semibold">Contact Page</h2>

      <iframe
        className="border-none outline-none"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.631497964354!2d66.89773708758331!3d24.88992294400064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb313620f977b65%3A0xb037912bf0ca8518!2sSector%206%20Hawkes%20Bay%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1724580580113!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <form
        action="https://formspree.io/f/mjkbjzpr"
        method="POST"
        className="flex min-h-[40dvh] w-full flex-col items-center justify-center gap-4 py-5"
      >
        <input
          className="w-[30%] rounded-sm border-[2px] border-gray-300 px-2 py-1 text-xl outline-none"
          type="text"
          placeholder="Enter User Name"
          name="Username"
          autoComplete="off"
          required
        />
        <input
          className="w-[30%] rounded-sm border-[2px] border-gray-300 px-2 py-1 text-xl outline-none"
          type="email"
          placeholder="Enter your email"
          name="Email"
          autoComplete="off"
          required
        />
        <textarea
          className="w-[30%] rounded-sm border-[2px] border-gray-300 px-2 py-1 text-xl outline-none"
          name="Message"
          required
          autoComplete="off"
          placeholder="Enter Your Message"
        ></textarea>
        <Button data={"SEND"} />
      </form>
    </>
  );
}

export default Contact;
