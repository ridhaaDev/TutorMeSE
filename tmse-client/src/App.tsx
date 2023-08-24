import {
  FormEventHandler,
  ReactEventHandler,
  Ref,
  useEffect,
  useRef,
} from "react";
import "./App.css";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { IoIosPaperPlane } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { useToggle } from "./hooks/useToggle";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

function App() {
  const [value, toggle] = useToggle();

  const formRef = useRef(null);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm("", "", formRef.current!, "").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <main
      className={`${value ? "dark" : ""}
    `}
    >
      <nav className="px-36 flex bg-white justify-between items-center fixed w-full h-[80px] drop-shadow-md z-50">
        <button
          className="text-3xl"
          data-aos="fade-left"
          onClick={() => scrollToRef(homeRef)}
        >
          <span className="text-gray-500">TutorMe</span>SE
        </button>

        <div className="hidden md:flex leading-[5rem] space-x-5">
          <button onClick={() => scrollToRef(servicesRef)}>Services</button>
          <button onClick={() => scrollToRef(aboutRef)}>About</button>

          <button onClick={() => scrollToRef(contactRef)}>Contact</button>

          <button onClick={toggle} className="flex gap-x-4 items-center">
            <RiSunLine />
            <RiMoonLine />
          </button>
        </div>

        {/* Hamburger */}
        <button
          id="menu-btn"
          className="flex self-center hamburger md:hidden focus:outline-none "
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* Mobile menu  */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-[6em] space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#home" className="navLink" id="active">
              Home
            </a>
            <a href="about.html" className="navLink">
              About
            </a>
            <div>
              <button className="dropbtn">
                Courses<i className="fa fa-caret-down"></i>
              </button>
              <div className="hidden">
                <a href="courses.html">Our Courses</a>
                <a href="#">Curriculum</a>
              </div>
            </div>
            <a href="portfolio.html" className="navLink">
              Portfolio
            </a>
            <a href="contact.html" className="navLink">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Header section */}
      <header
        ref={homeRef}
        className={`px-32 h-[100vh] flex justify-between dark:bg-gray-600 dark:text-white`}
      >
        <img
          src="coding-picture.jpg"
          alt=""
          className="h-[450px] relative top-48 mx-10 rounded-lg"
          data-aos="fade-right"
        />

        <section
          className="relative top-48 flex flex-col space-y-6"
          data-aos="fade-left"
        >
          <h1 className="text-3xl">Welcome to your coding Journey</h1>
          <article className="text-lg mr-24">
            <p>
              Your Journey with code starts today. Taught by professionals with
              good experience in the industry. Hours are usually flexible, but
              tailored to the working individual. Whether you're a web dev
              enthusiast, excited about building desktop apps, or need
              assistance with your school project, we've got you covered.
            </p>
            What we offer:
            <p>
              <ul className="list-disc ml-4">
                <li>Front-end Web development</li>
                <li>Software Engineering</li>
                <li>Data Structures and Algorithms</li>
                {/* <li></li> */}
              </ul>
            </p>
            <p>All you need is:</p>
            <ul className="list-disc ml-4">
              <li>An internet connection</li>
            </ul>
          </article>

          <div className="flex gap-4" data-aos="fade-up">
            <button className="px-6 py-2 rounded-lg border-[1px] border-blue-400 bg-blue-400">
              Contact Me
            </button>
            <button className="px-6 py-2 rounded-lg border-[1px] border-blue-400 bg-blue-400">
              Download Pamphlet
            </button>
          </div>
        </section>
      </header>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="fixed right-5 bottom-5 p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-4 h-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>

      {/* Services section */}
      <section
        ref={servicesRef}
        className="bg-gray-500 w-100 top-64 text-black p-4 lg:py-40 md:grid 
      md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-40
      dark:bg-slate-800 dark:text-white"
      >
        <h1 className="text-3xl mb-4 md:col-span-2 lg:col-span-3">
          Our services
        </h1>

        {/* Cards container */}
        <div className="bg-white p-4 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer dark:bg-gray-600">
          <span>01.</span>
          <h2 className="text-2xl font-semibold">1 on 1 sessions</h2>
          <p className="text-lg">
            1 on 1 online sessions on the platform of choice Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum labore incidunt
            nihil, libero aliquam eum. Quae dolorum voluptatem maxime quo culpa
            facere eius officiis, fugit hic pariatur vero modi aperiam!
          </p>
        </div>

        <div className="bg-white p-4 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer dark:bg-gray-600">
          <span>02.</span>
          <h2 className="text-2xl font-semibold">Self-paced</h2>
          <div className="text-lg">
            Self-paced for the goal you have in mind. Examples of goals could
            be:
            <ol>
              <li>Pass your IT</li>
              <li>
                Assistance with a practical assessment or take home test for an
                interview
              </li>
              <li>Learning from scratch</li>
              <li>Once off or recurring sessions are totally fine</li>
            </ol>
          </div>
        </div>

        <div className="bg-white p-4 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer dark:bg-gray-600">
          <span>03.</span>
          <h2 className="text-2xl font-semibold">Once off or scheduled</h2>
          <div className="text-lg">
            1 on 1 online sessions on the platform of choice Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum labore incidunt
            nihil, libero aliquam eum. Quae dolorum voluptatem maxime quo culpa
            facere eius officiis, fugit hic pariatur vero modi aperiam!
          </div>
        </div>

        <div className="bg-white p-4 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer dark:bg-gray-600">
          <span>04.</span>
          <h2 className="text-2xl font-semibold">Focussed learning</h2>
          <div className="text-lg">
            1 on 1 online sessions on the platform of choice Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum labore incidunt
            nihil, libero aliquam eum. Quae dolorum voluptatem maxime quo culpa
            facere eius officiis, fugit hic pariatur vero modi aperiam!
          </div>
        </div>

        <div className="bg-white p-4 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer dark:bg-gray-600">
          <span>05.</span>
          <h2 className="text-2xl font-semibold">100% online</h2>
          <div className="text-lg">
            1 on 1 online sessions on the platform of choice Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum labore incidunt
            nihil, libero aliquam eum. Quae dolorum voluptatem maxime quo culpa
            facere eius officiis, fugit hic pariatur vero modi aperiam!
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="p-4 py-16 px-32 bg-gray-200 dark:bg-gray-600 dark:text-white"
      >
        <h1 className="text-3xl" data-aos="fade-left">
          About the founder
        </h1>

        <div className="flex gap-x-6">
          <img
            src="ridhaa-picture.jpg"
            alt=""
            className="mt-4 rounded-lg w-[400px] my-28"
            data-aos="fade-right"
          />

          <article className="text-lg mt-4 mr-16 pr-24" data-aos="fade-left">
            <p>
              I've been coding for roughly 8 years, starting in high school and
              progressed slowly but surely. I've also attended and excelled at
              several bootcamps because beginner content has always fascinated
              me. In terms of professional experience, I have 3 years experience
              as a mentor and code reviewer and 2 years of professional
              developer experience (and growing).
            </p>
            <p>
              What I specialize in is bridge the gap between new or curious
              developers and getting them to the point where they are
              self-sufficient and can perform on the job.
            </p>
            <p>
              Programming languages I can teach you in:
              <ul className="list-disc ml-4">
                <li>Java or C#</li>
                <li>Javascript or Typescript</li>
                <li>Python</li>
                <li>Delphi</li>
              </ul>
              You can specialize in:
              <ul className="list-disc ml-4">
                <li>Web development</li>
                <li>Software Engineering</li>
                <li>Build an internal dashboard for your company</li>
                <li>
                  Hobbyist: want to get good at coding or go for once-off
                  sessions to solidify a concept or finish a project.
                </li>
              </ul>
            </p>
            <br />
          </article>
        </div>
      </section>

      <section
        ref={contactRef}
        className="h-[100vh] text-black dark:text-white
      dark:bg-slate-800 p-4 lg:px-32 text-lg bg-gray-500"
      >
        <div className="grid grid-cols-2 bg-white p-10 rounded-l dark:bg-gray-600 mt-20">
          <form
            action=""
            className="flex flex-col space-y-3 min-w-[1200px]"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <h1 className="text-3xl">Get in touch</h1>

            <div className="flex gap-x-6 items-center">
              <div className="flex flex-col">
                <label htmlFor="">Name:</label>
                <input
                  type="name"
                  placeholder="Name"
                  className="border-black border-[1px] px-4 py-2 rounded-lg dark:bg-gray-600"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border-black border-[1px] px-4 py-2 rounded-lg dark:bg-gray-600"
                />
              </div>
            </div>

            <label htmlFor="">How can we help</label>
            <select
              name=""
              id=""
              className="border-black border-[1px] px-4 py-2 w-1/6 rounded-lg dark:bg-gray-600"
            >
              <option value="">Info session</option>
              <option value="">Trial run</option>
              <option value="">Other</option>
            </select>

            <label htmlFor="">Message:</label>
            <textarea
              name=""
              id=""
              placeholder="How can we help?"
              cols={30}
              rows={10}
              className="border-black border-[1px] px-4 py-2 w-3/6 rounded-lg dark:bg-gray-600"
            ></textarea>
            <button
              type="submit"
              className="text-black text-left pr-6 pl-4 py-2 rounded-lg border-[1px] border-blue-400 max-w-[165px] dark:text-white"
            >
              Send Message
            </button>
          </form>

          <div>
            <h1 className="text-3xl">Contact Us</h1>
            <div className="flex flex-col gap-y-4 mt-10">
              <div className="flex gap-x-4">
                <div className="w-8 h-8 bg-slate-500 flex items-center justify-center rounded-full">
                  <AiFillPhone />
                </div>
                <p>Phone: 0680646324</p>
              </div>

              <div className="flex gap-x-4">
                <div className="w-8 h-8 bg-slate-500 flex items-center justify-center rounded-full">
                  <IoIosPaperPlane />
                </div>
                <p>Email: ridhaadev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>© 2023 RIDHAA CUPIDO ALL RIGHTS RESERVED</footer>
    </main>
  );
}

export default App;
