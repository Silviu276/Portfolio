import React, { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { PROFILE_DATA } from "../utils/data";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const notify_mail_success = () => toast.success("Email sent", { autoClose: 2000, pauseOnHover: false });
  const notify_mail_fail = () => toast.error("Email cannot be sent", { autoClose: 2000, pauseOnHover: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6vnbtja", "template_9cdvg6l", form.current, {
        publicKey: "J39EnWUPqtuMVVY0W",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          notify_mail_success();
        },
        (error) => {
          console.log("FAILED...", error.text);
          e.target.reset();
          notify_mail_fail();
        }
      );
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14 ">Contact</h5>

      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />

          <ContactInfoCard icon={<IoPhonePortraitOutline />} text={PROFILE_DATA.phone} />
          <ToastContainer />

          {/* <ContactInfoCard
            icon={<MdOutlineWeb />}
            text={PROFILE_DATA.website}
          /> */}
        </div>

        <div>
          <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">Contact Form</h5>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <input type="text" name="user_name" placeholder="Full Name" className="input-box" autoComplete="off" />

            <input type="email" name="user_email" placeholder="Email" className="input-box" autoComplete="off" />

            <textarea name="message" placeholder="Message" rows="5" className="input-box" autoComplete="off"></textarea>

            <button value="Send" type="submit" className="primary-btn rounded-lg transition ease-out duration-200">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  const notify = () =>
    toast.info("Copied to clipboard!", { autoClose: 1500, pauseOnHover: false, hideProgressBar: true, theme: "colored" });

  function CopyText(event) {
    navigator.clipboard.writeText(event.target.innerText);
    notify();
  }

  return (
    <div
      className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5 hover:cursor-pointer"
      onClick={CopyText}
    >
      <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700 ">
        {icon}
      </div>

      <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
