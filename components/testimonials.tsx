"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Amina Yusuf",
    company: "Caregiver",
    content:
      "Caring for my son, Abdi, who was born with spina bifida is tough, but Neuro Care Foundation’s support has made a real difference. I now feel more confident and less alone.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg02,
    name: "Grace Mwangi",
    company: "Living with Spinabifida",
    content:
      "Neuro Care Foundation empowered me to live independently and gave me hope. I finally feel understood and supported.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg03,
    name: "Samuel Otieno",
    company: "Living with Hydrocephalus",
    content:
      "Thanks to Neuro Care Foundation, I now have access to information and care I never knew existed. Their advocacy has truly improved my life.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg04,
    name: "Dr. Ruth Njoroge",
    company: "Pediatric Neurologist",
    content:
      "Neuro Care Foundation’s community-centered approach is changing lives. Their dedication to awareness and access to care has improved outcomes for many.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    name: "Grace Njeri",
    company: "Caregiver",
    content:
      "The foundation’s resources and community have helped me better understand my daughter’s hydrocephalus and reminded me I’m not alone.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg06,
    name: "Daniel Kofi",
    company: "Caregiver",
    content:
      "With Neuro Care Foundation’s support, I’ve grown stronger and more confident in caring for my child. Their guidance has truly been life-changing.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    name: "David Kimani",
    company: "Living with Multiple Sclerosis",
    content:
      "With Neuro Care Foundation, I found more than care. I found community, hope and the confidence to live each day with strength.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg08,
    name: "Samuel Okeke",
    company: "Programs Manager, Hope Well Foundation.",
    content:
      "Partnering with Neuro Care Foundation has been deeply rewarding. Their transparency and impact make them a trusted ally in transforming lives.",
    categories: [1, 5],
  },
  {
    img: TestimonialImg09,
    name: "Jane Njeri",
    company: "Living with Epilepsy",
    content:
      "Epilepsy can be isolating, but Neuro Care Foundation’s advocacy and awareness programs have given me strength and hope.",
    categories: [1, 2],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
        <h2
          className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#374151,#6366f1,#4b5563,#6366f1,#374151)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
        >
          Don’t just take our word for it
        </h2>
          <p className="text-lg text-gray-700">
            Discover how Neuro Care Foundation’s compassion and advocacy continue to transform lives and inspire hope.
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[#df0a92]/40 ${
                  category === 1
                    ? "relative bg-[#df0a92] text-white shadow-md"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 1}
                onClick={() => setCategory(1)}
              >
                <svg
                  className={`fill-current ${
                    category === 1 ? "text-white" : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
                </svg>
                <span>All</span>
              </button>
              {/* Button #2 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[#df0a92]/40 ${
                  category === 2
                    ? "relative bg-[#df0a92] text-white shadow-md"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 2}
                onClick={() => setCategory(2)}
              >
                <svg
                  className={`fill-current ${
                    category === 2 ? "text-white" : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <span>PWDs</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[#df0a92]/40 ${
                  category === 3
                    ? "relative bg-[#df0a92] text-white shadow-md"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
                <svg
                  className={`fill-current ${
                    category === 3 ? "text-white" : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* Left heart */}
                  <path
                    d="M6 12.35l-1.45-1.32C0.4 6.36 2 3.28 2 1.5 2 0.42 4.42 0 7.5 0c1.74 0 3.41 0.81 4.5 2.09C13.09 0.81 14.76 0 16.5 0 19.58 0 22 2.42 22 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    opacity="0.4"
                    transform="scale(0.5) translate(2 14)"
                  />
                  {/* Center heart */}
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    transform="scale(0.5) translate(7 18)"
                  />
                  {/* Right heart */}
                  <path
                    d="M18 12.35l-1.45-1.32C12.4 6.36 14 3.28 14 1.5 14 0.42 16.42 0 19.5 0c1.74 0 3.41 0.81 4.5 2.09C25.09 0.81 26.76 0 28.5 0 31.58 0 34 2.42 34 5.5c0 3.78-3.4 6.86-8.55 11.54L24 21.35z"
                    opacity="0.4"
                    transform="scale(0.5) translate(12 14)"
                  />
                </svg>
                <span>Caregivers</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[#df0a92]/40 ${
                  category === 4
                    ? "relative bg-[#df0a92] text-white shadow-md"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <svg
                  className={`fill-current ${
                    category === 4 ? "text-white" : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 2H14C15.1 2 16 2.9 16 4V6H19C20.1 6 21 6.9 21 8V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H8V4C8 2.9 8.9 2 10 2ZM10 4V6H14V4H10ZM5 8V19H19V8H5Z" />
                </svg>
                <span>Professionals</span>
              </button>
              {/* Button #5 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[#df0a92]/40 ${
                  category === 5
                    ? "relative bg-[#df0a92] text-white shadow-md"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 5}
                onClick={() => setCategory(5)}
              >
                <svg
                  className={`fill-current ${
                    category === 5 ? "text-white" : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 12a4 4 0 1 1-4-4 4 4 0 0 1 4 4zm7-4a4 4 0 1 0-4 4 4 4 0 0 0 4-4zM6 15a6 6 0 0 0 12 0v-1h-2v1a4 4 0 0 1-8 0v-1H6z"/>
                </svg>
                <span>Partners</span>
              </button>
            </div>
          </div>
          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-gray-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-900">
            <span>{testimonial.name}</span>
            <span className="text-gray-600"> — </span>
            <span className="text-gray-700">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
