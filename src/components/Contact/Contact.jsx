import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message envoyé avec succès");
        },
        (error) => {
          toast.error("Erreur lors de l'envoi")
        }
      );
  };
  return (
    <div
      className="flex md:flex-row flex-col justify-between text-xl gap-8 px-5 md:px-24 md:pt-12 pt-8"
      id="contact"
    >
      <div className="flex md:w-[40%] flex-col justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="md:text-6xl text-4xl font-bold font-satoshi">
            Get in touch <br /> <span className="text-blue">with ETIC</span>
          </h1>
          <p className="font-normal text-sm md:text-xl">
            Vous voulez collaborer avec ETIC ? Contactez nous en remplissant
            tout simplement le formulaire.
          </p>
        </div>

        <div className="flex flex-col md:gap-4 gap-2">
          <h2 className="md:text-2xl">Nos coordonnées</h2>
          <div className="flex flex-col text-sm md:text-xl">
            <p className="font-normal">etic@esi.dz</p>
            <p className="font-normal">+213 794 70 73 83</p>
            <p className="font-normal">
              Ecole Nationale Supérieure d&apos;Informatique, Oued Smar, Alger
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[50%] text-[#2D2D2D] text-sm md:text-xl">
        <form className="flex flex-col text-sm md:text-xl gap-4 md:gap-8" onSubmit={sendEmail} ref={form}>
          <div className="flex flex-col">
            <label htmlFor="name">Nom et prénom</label>
            <input
              type="text"
              id="name"
              className="p-2 bg-[#FAFAFA] rounded-md border-[#D9D9D9] border-2"
              name="from_name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">E-mail*</label>
            <input
              type="email"
              required
              id="email"
              className="p-2 bg-[#FAFAFA] rounded-md border-[#D9D9D9] border-2"
              name="from_email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="p-2 font-normal bg-[#FAFAFA] rounded-md border-[#D9D9D9] border-2"
              name="message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue py-4 rounded-full text-white"
          >
            Envoyer
          </button>
        </form>
        <Toaster position="bottom-left" />
      </div>
    </div>
  );
};

export default Contact;
