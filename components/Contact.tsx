"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  submitContactForm,
  type SubmitContactFormPayload,
} from "../services/client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

type OrganizationType =
  | "Pharmacy"
  | "Clinic"
  | "Hospital"
  | "Individual"
  | "Physiotherapist"
  | "NGO"
  | "Other";

const Contact: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const initialState = {
    fullName: "",
    email: "",
    phone: "",
    organizationType: "" as OrganizationType | "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.organizationType ||
      !formData.message
    ) {
      setLoading(false);
      if (!formData.fullName) return toast.error("fullName is required");
      if (!formData.email && !formData.phone)
        return toast.error("Email or phone is required");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        return toast.error("Invalid email address");
      if (!formData.organizationType)
        return toast.error("Organization type is required");
      if (!formData.message) return toast.error("Message is required");
    }

    try {
      await dispatch(
        submitContactForm(formData as SubmitContactFormPayload)
      ).unwrap();
      toast.success("Message sent successfully!");
      setFormData(initialState);
    } catch (error) {
      if (error) {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="flex md:flex-row flex-col-reverse md:px-32 md:py-20 px-5 py-10 2xl:px-96">
      <ToastContainer />
      {/* First Element */}
      <div
        className="relative md:w-2/5 w-full bg-[#063d06] md:mt-0 mt-16 bg-cover bg-center rounded-2xl p-10 text-white z-10 md:mr-20"
        style={{
          backgroundImage: "url('/images/bg-5.png')",
          backgroundSize: "250%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-start items-center">
          <div className="h-4 w-2 bg-[#E09F1F] mr-2"></div>
          <h2 className="text-sm font-bold text-center uppercase text-[#E09F1F]">
            Reach out to us
          </h2>
          <div className="h-4 w-2 bg-[#E09F1F] ml-2"></div>
        </div>
        <p className="md:w-1/2 w-3/4 md:text-2xl text-xl mb-2 capitalize font-bold my-5">
          We&apos;d love to hear from you!
        </p>
        <p className="md:w-2/3 w-full text-sm mb-8">
          Feel free to reach out to us with any questions or concerns.
        </p>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="w-14 h-11 bg-[#145114] rounded-[8px] flex items-center justify-center mr-5">
              <div className="w-5 h-5 relative">
                <Image src="/icons/locations2.svg" alt="Location" fill />
              </div>
            </div>
            <div className="text-sm">
              <p className="font-bold">Address</p>
              <a
                href="https://www.google.com/maps/place/3+KG+686+St,+Kigali"
                target="_blank"
                className="text-white"
              >
                Nyarugenge Pension Plaza, KN 3 Rd
              </a>
            </div>
          </div>
          <div className="flex items-center my-10">
            <div className="w-14 h-11 bg-[#145114] rounded-[8px] flex items-center justify-center mr-5">
              <div className="w-5 h-5 relative">
                <Image src="/icons/mail2.svg" alt="Email" fill />
              </div>
            </div>
            <div className="text-sm">
              <p className="font-bold">Email</p>
              <a href="mailto:info@geuza.africa" className="text-white">
                info@geuza.africa
              </a>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="w-14 h-11 bg-[#145114] rounded-[8px] flex items-center justify-center mr-5">
              <div className="w-5 h-5 relative">
                <Image src="/icons/phone2.svg" alt="Phone" fill />
              </div>
            </div>
            <div className="text-sm">
              <p className="font-bold">Phone</p>
              <a href="tel:+250791903218" className="text-white">
                +250-796-084-144
              </a>
            </div>
          </div>
        </div>
        <div className="absolute md:bottom-[-20px] bottom-[-40px] md:right-[-60px] right-[-20px] w-28 h-28 -z-10">
          <Image src="/icons/decor.svg" alt="Decoration" fill />
        </div>
        <div className="absolute inset-0 rounded-2xl z-[-1]"></div>
      </div>

      {/* Second Element */}
      <div className="md:w-[50%] w-full">
        <h2 className="md:text-3xl text-2xl text-black mb-10 uppercase font-[300]">
          Send us <span className="font-[800]">a Message</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col md:space-x-4 space-x-0">
            <div className="md:w-1/2 w-full flex flex-col md:mb-0 mb-3">
              <label className="text-[#535353] text-sm mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Enter your full name"
                className="w-full bg-[#F9F9F9] text-sm md:h-[48px] h-[40px] text-[#AFAFAF] px-4 border-none rounded"
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col md:mb-0 mb-3">
              <label className="text-[#535353] text-sm mb-2">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                placeholder="Enter  your email"
                className="w-full bg-[#F9F9F9] text-sm md:h-[48px] h-[40px] text-[#AFAFAF] px-4 border-none rounded"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:space-x-4 space-x-0">
            <div className="md:w-1/2 w-full flex flex-col md:mb-0 mb-3">
              <label className="text-[#535353] text-sm mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                className="w-full bg-[#F9F9F9] text-sm md:h-[48px] h-[40px] text-[#AFAFAF] px-4 border-none rounded"
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col md:mb-0 mb-3">
              <label className="text-[#535353] text-sm mb-2">
                Organization Type
              </label>
              <select
                name="organizationType"
                value={formData.organizationType as string}
                onChange={handleChange}
                className="w-full bg-[#F9F9F9] text-sm md:h-[48px] h-[40px] text-[#AFAFAF] px-4 border-none rounded"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Clinic">Clinic</option>
                <option value="Hospital">Hospital</option>
                <option value="Individual">Individual</option>
                <option value="Physiotherapist">Physiotherapist</option>
                <option value="NGO">NGO</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-[#535353] text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us something..."
              className="w-full bg-[#F9F9F9] text-sm h-32 text-[#AFAFAF] px-4 py-3 border-none rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#E09F1F] text-white py-3 px-28 rounded text-sm my-10"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
