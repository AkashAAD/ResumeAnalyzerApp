import HomeImage from '../../assets/home-image.jpg';

const Home = () => {
  return(
    <>
      <div className="min-h-screen bg-white text-gray-800">
        <div className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
          
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6">
              Resume Analyzer
            </h1>
            <p className="text-lg mb-6">
              Automatically extract skills, education, experience, and more from resumes using advanced parsing and AI. Save time and make hiring easier!
            </p>
            <a
              href="/resume-analyzer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={HomeImage}
              alt="Resume Analyzer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>    
    </>
  )
}

export default Home;
