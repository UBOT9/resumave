import { Link } from 'react-router-dom';
import { IoIosRocket } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="mx-auto flex h-full min-h-[calc(100vh-5rem)] max-w-screen-xl flex-col items-center justify-center gap-8 px-3 py-6 text-center">
      <div>
        <h4 className="text-base md:text-xl">
          <span className="text-gradient">A Free and Open Source Resume Builder</span>
        </h4>
        <h1 className="text-3xl md:mt-2 md:text-4xl">
          <span className="text-gradient">Resume Building Made Simple</span>
        </h1>
        <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-10 md:text-lg">
          Resumave is an ATS-friendly resume maker designed to simplify the process of creating professional
          resumes without the hassle of login or sign-up. With Resumave, users can easily input their
          details, generate a well-formatted resume, and export it in PDF format.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-16 md:flex-row md:gap-8">
          <Link to="/editor" className="btn-filled w-full md:w-auto">
            <span>Create My Resume</span>
            <IoIosRocket />
          </Link>

          <a href="https://github.com/devXprite/resumave" className="btn w-full md:w-auto">
            <span>View Source</span>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;