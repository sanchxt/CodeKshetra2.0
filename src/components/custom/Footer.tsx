import logo from "../../../public/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10 w-full rounded-t-[50px]" style={{ width: '100vw', marginLeft: '-50vw', marginRight: '-50vw', left: '50%', position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-start">
        
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <img
            src={logo}
            alt="JIMS Logo"
            className="h-32 w-auto mx-auto mb-4" 
          />
          <p className="text-base md:text-lg lg:text-xl"> {/* Increased text size for lg screens */}
            Code Kshetra, a groundbreaking hackathon by{" "}
            <a
              href="https://www.jimsindia.org/"
              className="text-pink-400 hover:text-purple-600"
              target="_blank"
              rel="noreferrer"
            >
              JIMS Sector-5 Rohini
            </a>{" "}
            and{" "}
            <a
              href="https://www.geekroom.in/"
              className="text-pink-400 hover:text-purple-600"
              target="_blank"
              rel="noreferrer"
            >
              Geek Room
            </a>
            , redefines creativity and technology. Join us in the pursuit of
            innovation, transcending traditional hackathons.
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 border-b-2 border-pink-500 inline-block"> {/* Increased text size for lg screens */}
            Useful Links
          </h3>
          {/* <ul className="list-none">
            <li><a href="#" className="hover:text-white">Link 1</a></li>
            <li><a href="#" className="hover:text-white">Link 2</a></li>
            <li><a href="#" className="hover:text-white">Link 3</a></li>
          </ul> */}
        </div>

        {/* Center align the contact section */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 border-b-2 border-pink-500 inline-block"> {/* Increased text size for lg screens */}
            Contact Us
          </h3>
          <address className="not-italic text-sm md:text-base lg:text-lg"> {/* Increased text size for lg screens */}
            JIMS, Near Rithala Metro Station<br />
            Rohini Sector 5, Institutional Area,<br />
            New Delhi, Delhi 110085
          </address>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="mailto:someone@example.com" aria-label="Email">
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i className="fa-solid fa-envelope" style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}></i>
              </span>
            </a>
            <a href="https://example.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i className="fa-brands fa-x-twitter" style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}></i>
              </span>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i className="fa-brands fa-instagram" style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/company/code-kshetra/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i className="fa-brands fa-linkedin-in" style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
