import React from "react";
import Logo from "./Logo";

const LandingPage = () => {
  const features = [
    "Real-Time Editing: Collaborate with your team in real-time, seeing each other's changes instantly.",
    "Secure and Private: Your documents are encrypted and stored securely, ensuring your data is safe.",
    "Comments: You can add coments in the documents to point out errors or for future references.",
    "Intuitive Interface: A user-friendly design that makes document editing and collaboration simple and efficient.",
    "Multi-Device Access: Work on your documents from any device, anywhere.",
  ];
  return (
    <div>
      <div className="bg-dark md:h-screen h-auto overflow-auto flex flex-col justify-start p-2 md:p-8 lg:p-8">
        <div className="mb-8">
          <Logo />
        </div>
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-100 mb-4 md:text-5xl lg:text-6xl">
          DocSync: Real-Time Collaboration Made Easy
        </h1>

        {/* Subheader */}
        <p className="text-xl text-slate-600 mb-6 md:text-2xl lg:text-3xl">
          Collaborate, Edit, and Share Documents Seamlessly
        </p>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
              <p className="text-slate-100">{feature}</p>
            </div>
          ))}
        </div>

        <div></div>

        {/* Call to Action */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold text-slate-100 mb-4 md:text-xl lg:text-2xl">
            Join the Future of Document Collaboration by Signing up{" "}
            <span className="md:hidden  inline-block">below</span>
          </h2>
        </div>

        {/* Testimonials */}
        {/* <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="text-slate-600 italic">
                "{testimonial.text}"
                <span className="block text-slate-100 font-bold">{`— ${testimonial.name}, ${testimonial.role}`}</span>
              </blockquote>
            ))}
          </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
