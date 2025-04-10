import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../Store/UseThemeStore";
import { useAuthStore } from "../Store/useAuthStore";

function HomePage() {
  const { theme } = useThemeStore();
  const { authuser, isCheckingAuth } = useAuthStore();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const adminEmail = "mitul@gmail.com";
  const employeeEmails = [
    "jeyur@gmail.com",
    "meet@gmail.com",
    "priya@gmail.com",
    "tushar@gmail.com",
    "urmila@gmail.com",
    "shruti@gmail.com",
  ];

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

  const userName = authuser?.name || authuser?.email?.split("@")[0] || "User";
  const isAdmin = authuser?.email === adminEmail;
  const isEmployee = employeeEmails.includes(authuser?.email);

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 ${
        themeStyles[theme] || "bg-base-100 text-base-content"
      } relative`}
    >
      {showWelcome ? (
        <h1 className="text-5xl font-bold text-center">
          Welcome <span className="text-primary font-bold ">{userName} </span>To
          KP Enterprise
        </h1>
      ) : (
        <>
          {!isCheckingAuth && authuser && (
            <>
              <div className="absolute top-4 left-4 text-[30px]  font-semibold">
                {isAdmin
                  ? "Hello Admin 👨🏻‍💻"
                  : isEmployee
                  ? `Employee - ${userName}`
                  : `User - ${userName}`}
              </div>
              <div className="absolute top-4 right-4">
                <Link
                  to={
                    isAdmin
                      ? "/admin-dashboard"
                      : isEmployee
                      ? "/employee-dashboard"
                      : "https://www.instagram.com/kp__enterprise/?igsh=dmVkOWkybGNiM2o%3D#"
                  }
                  className="btn btn-primary bg-transparent text-base-content hover:text-base-300 "
                  hidden={isAdmin || isEmployee}
                >
                  {isAdmin
                    ? "Admin Dashboard"
                    : isEmployee
                    ? "Employee Dashboard"
                    : `Let's Talk`}
                </Link>
              </div>
            </>
          )}

          {/* header      */}
          <div
            className={`min-h-screen w-full flex items-center justify-center ${
              themeStyles[theme] || "bg-base-100 text-base-content"
            }`}
          >
            {showWelcome ? (
              <h1 className="text-4xl font-bold text-center">
                Welcome to KP Enterprise
              </h1>
            ) : (
              <div className="w-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 max-w-screen-xl">
                {/* Left Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-4xl font-bold mb-4">
                    Empowering Businesses with Excellence
                  </h2>
                  <p className="text-lg mb-6">
                    At KP Enterprise, we specialize in innovative solutions to
                    help businesses grow. Our team is dedicated to delivering
                    top-quality products and services.
                  </p>
                  <div className="flex justify-center lg:justify-start gap-4">
                    <Link to="/about" className="btn btn-primary">
                      Learn More
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                      Get in Touch
                    </Link>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <img
                    src="pexels-photo-3184291.webp"
                    alt="KP Enterprise"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
          {/* features  */}
          <div
            className={`w-full px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 ${theme.bg} ${theme.text}`}
          >
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p
                  className={`inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full ${theme.primaryBg} ${theme.primaryText}`}
                >
                  Exclusive Offer
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="unique-pattern"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect fill="url(#unique-pattern)" width="52" height="24" />
                  </svg>
                  <span className="relative">KP</span>
                </span>{" "}
                Enterprise - Your Trusted Partner
              </h2>
              <p className="text-base md:text-lg">
                Delivering excellence and innovation with top-tier services
                tailored to your needs.
              </p>
            </div>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
              {[
                "Innovative Solutions",
                "Reliable Services",
                "Customer Focused",
                "Global Reach",
              ].map((title, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between p-5 border rounded shadow-sm ${theme.cardBg} hover:cursor-pointer hover:shadow-lg hover:border-${theme.primary}-600  hover:border-600`}
                >
                  <div>
                    <div
                      className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${theme.iconBg}`}
                    >
                      <svg
                        className="w-12 h-12"
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
                    <h6 className="mb-2 font-semibold leading-5">{title}</h6>
                    <p className="mb-3 text-sm">
                      Providing exceptional quality and service to help your
                      business grow and succeed.
                    </p>
                  </div>
                  <a
                    href="/"
                    aria-label="Learn more"
                    className={`inline-flex items-center font-semibold transition-colors duration-200 ${theme.linkText} hover:${theme.linkHover}`}
                  >
                    Learn more
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* content */}
          <div
            className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ${themeStyles[theme]}`}
          >
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
              <h2
                className={`max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none md:mb-6 group ${themeStyles[theme]}`}
              >
                <span className="inline-block mb-1 sm:mb-4">
                  Welcome to KP ENTERPRISE
                  <br className="hidden md:block" />
                  Your Trusted Business Partner
                </span>
                <div
                  className={`h-1 ml-auto duration-300 origin-left transform scale-x-30 group-hover:scale-x-100`}
                />
              </h2>
              <p className={`lg:text-sm lg:max-w-md ${themeStyles[theme]}`}>
                "Providing high-quality solutions with innovative approaches to
                meet your business needs."
              </p>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              <a href="/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      KP Enterprise delivers top-tier solutions for businesses
                      worldwide.
                    </p>
                  </div>
                </div>
              </a>
              <a href="/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      Our innovative solutions help businesses grow efficiently.
                    </p>
                  </div>
                </div>
              </a>
              <a href="/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      Trusted by leading businesses for seamless operations.
                    </p>
                  </div>
                </div>
              </a>
              <a href="/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      We empower businesses with cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center">
              <a
                href="/"
                aria-label="See More"
                className={`inline-flex items-center font-semibold transition-colors duration-200 ${themeStyles[theme]}`}
              >
                See more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* steps */}
          <div
            className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ${themeStyles[theme]}`}
          >
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary text-white">
                  Our Services
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">Empowering</span>
                </span>{" "}
                businesses with innovative solutions
              </h2>
              <p className="text-base md:text-lg">
                At KP Enterprise, we provide top-notch business solutions
                tailored to your needs.
              </p>
            </div>
            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
              {["Consulting", "Technology", "Marketing", "Support"].map(
                (service, index) => (
                  <div
                    key={index}
                    className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-lg font-bold leading-5">{service}</p>
                      <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-primary bg-gray-200">
                        {index + 1}
                      </p>
                    </div>
                    <p className="text-sm text-gray-900">
                      High-quality {service.toLowerCase()} services to enhance
                      your business growth.
                    </p>
                  </div>
                )
              )}
            </div>
            <div className="text-center">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-opacity-75 focus:shadow-outline focus:outline-none"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* stat*/}
          <div
            className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ${themeStyles[theme]}`}
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
            className={`px-4 pt-16 mx-auto sm:max-w-xl bg-base-200 md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ${themeStyles[theme].background}`}
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
                    className={`w-8 `}
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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                  <p
                    className={`mt-4 text-sm ${themeStyles[theme].textSecondary}`}
                  >
                    Eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
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
      )}
    </div>
  );
}

export default HomePage;
