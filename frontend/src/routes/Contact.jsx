import { GithubIcon } from "../icons/Github";
import { LinkedinIcon } from "../icons/Linkedin";
import ContactForm from "../Components/Contact-Form";

const Contact = () => {
  return (
    <>
      <div className="bg-navy min-h-screen flex flex-col justify-center items-center text-white">
        <div className="md:flex md:flex-row grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-4 font-mono underline underline-offset-8 decoration-indigo-400 decoration-dotted">
              Contact Me
            </h1>
            <p className="text-lg font-mono ">
              If you have any opportunities, questions or inquiries, feel free
              to get in touch with me.
            </p>
            <br />
            <div className="flex space-x-4 mt-4">
              <GithubIcon />
              <LinkedinIcon />
            </div>
            <p className="text-base font-mono">
              (Feel free to hit me up if you're feeling the boredom bug – I'm
              always up for some meme-sharing mischief!)
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
