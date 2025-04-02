import React from "react";
import { useThemeStore } from "../Store/UseThemeStore";

const AboutPage = () => {
  const { theme } = useThemeStore();
  const themeStyles = {
    light: "bg-gray-100 text-gray-900",
    dark: "bg-gray-900 text-white",
    cupcake: "bg-pink-100 text-pink-900",
    bumblebee: "bg-yellow-300 text-yellow-900",
    emerald: "bg-green-300 text-green-900",
    corporate: "bg-blue-100 text-blue-900",
    synthwave: "bg-purple-900 text-pink-300",
    retro: "bg-orange-300 text-brown-900",
    cyberpunk: "bg-yellow-400 text-black",
    valentine: "bg-pink-500 text-white",
    halloween: "bg-orange-600 text-black",
    garden: "bg-green-100 text-green-900",
    forest: "bg-green-800 text-green-300",
    aqua: "bg-blue-300 text-blue-900",
    lofi: "bg-gray-200 text-gray-900",
    pastel: "bg-pink-200 text-pink-900",
    fantasy: "bg-purple-200 text-purple-900",
    wireframe: "bg-gray-100 text-gray-600",
    black: "bg-black text-white",
    luxury: "bg-gray-800 text-gold-300",
    dracula: "bg-purple-800 text-green-300",
    cmyk: "bg-cyan-400 text-magenta-900",
    autumn: "bg-orange-700 text-yellow-300",
    business: "bg-blue-900 text-white",
    acid: "bg-lime-400 text-black",
    lemonade: "bg-yellow-200 text-yellow-900",
    night: "bg-gray-900 text-gray-300",
    coffee: "bg-brown-800 text-white",
    winter: "bg-blue-100 text-blue-900",
    procyon: "bg-indigo-900 text-indigo-200",
  };
  const teamMembers = [
    {
      name: "Oliver Aguilerra",
      role: "Product Manager",
      description:
        "Vincent Van Gogh’s most popular painting, The Starry Night.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      name: "Marta Clermont",
      role: "Design Team Lead",
      description:
        "Amet I love liquorice jujubes pudding croissant I love pudding.",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Alice Melbourne",
      role: "Human Resources",
      description:
        "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
      image:
        "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "John Doe",
      role: "Good Guy",
      description:
        "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
      image:
        "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];
  return (
    <>
      <div
        className={`px-40 py-[100px] ${themeStyles[theme]} flex flex-col items-center justify-center`}
      >
        <h1
          className={`text-4xl font-bold mb-6 ${themeStyles[theme].textPrimary}`}
        >
          About Us
        </h1>
        <p
          className={`text-lg text-center max-w-2xl ${themeStyles[theme].textSecondary}`}
        >
          Welcome to our company! We are committed to delivering high-quality
          services and products that meet our customers' needs. Our team is
          dedicated to innovation, efficiency, and customer satisfaction.
        </p>
        <p
          className={`mt-4 text-lg text-center max-w-2xl ${themeStyles[theme].textSecondary}`}
        >
          Our mission is to empower businesses and individuals with
          state-of-the-art solutions, leveraging the latest technology to drive
          success.
        </p>
      </div>

      {/* team */}
      <div
        className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full ${themeStyles[theme]} lg:max-w-screen md:px-24 lg:px-8 lg:py-20`}
      >
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-base-content uppercase rounded-full bg-teal-accent-400">
            Know Our Team
          </p>
          <p
            className={`text-xl font-bold leading-none sm:text-xl ${themeStyles[theme].textPrimary}`}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
          {teamMembers.map((member, index) => (
            <div key={index} className="grid sm:grid-cols-3">
              <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">{member.name}</p>
                <p className="mb-4 text-xs text-base-content">{member.role}</p>
                <p
                  className={`mb-4 text-sm tracking-wide text-base-content ${themeStyles[theme].textSecondary}`}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* stat*/}
      <div
        className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-20 ${themeStyles[theme]}`}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "819",
              title: "Downloads",
              text: "Delivering high-quality business solutions to our clients worldwide.",
            },
            {
              number: "1.3K",
              title: "Users",
              text: "Trusted by over 1,300 clients to optimize their business operations.",
            },
            {
              number: "91",
              title: "Subscribers",
              text: "Growing community of subscribers benefiting from our innovative services.",
            },
            {
              number: "52",
              title: "Products",
              text: "Diverse range of products tailored to meet various business needs.",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary-light sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6
                className={`text-4xl font-bold ${themeStyles[theme].textPrimary}`}
              >
                {stat.number}
              </h6>
              <p
                className={`mb-2 font-bold text-md ${themeStyles[theme].textPrimary}`}
              >
                {stat.title}
              </p>
              <p className={`${themeStyles[theme].textSecondary}`}>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div
        className={`px-4 pt-16 mx-auto sm:max-w-xl bg-base-200 md:max-w-full lg:max-w-screen md:px-24 lg:px-8 ${themeStyles[theme].background}`}
      >
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 ${themeStyles[theme].textPrimary}"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span
                className={`ml-2 text-xl font-bold tracking-wide uppercase ${themeStyles[theme].textPrimary}`}
              >
                Company
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className={`text-sm ${themeStyles[theme].textSecondary}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className={`mt-4 text-sm ${themeStyles[theme].textSecondary}`}>
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            {[
              {
                title: "Category",
                links: ["News", "World", "Games", "References"],
              },
              {
                title: "Business",
                links: [
                  "Web",
                  "eCommerce",
                  "Business",
                  "Entertainment",
                  "Portfolio",
                ],
              },
              {
                title: "Apples",
                links: [
                  "Media",
                  "Brochure",
                  "Nonprofit",
                  "Educational",
                  "Projects",
                ],
              },
              {
                title: "Cherry",
                links: ["Infopreneur", "Personal", "Wiki", "Forum"],
              },
            ].map((section, index) => (
              <div key={index}>
                <p
                  className={`font-semibold tracking-wide ${themeStyles[theme].textPrimary}`}
                >
                  {section.title}
                </p>
                <ul className="mt-2 space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="/"
                        className={`transition-colors duration-300 hover:${themeStyles[theme].textHighlight} ${themeStyles[theme].textSecondary}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row ${themeStyles[theme].borderPrimary}">
          <p className={`text-sm ${themeStyles[theme].textSecondary}`}>
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {[
              {
                href: "/",
                icon: '<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z" />',
              },
              {
                href: "https://www.instagram.com/kp__enterprise/?igsh=dmVkOWkybGNiM2o%3D#",
                icon: '<circle cx="15" cy="15" r="4" /><path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />',
              },
              {
                href: "/",
                icon: '<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z" />',
              },
            ].map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                className={`transition-colors duration-300 hover:${themeStyles[theme].textHighlight} ${themeStyles[theme].textSecondary}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
