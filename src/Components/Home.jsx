import pasPoto from '../assets/pas-poto-alpin2.jpg';

const Home = () => {
  return (
    <>
    <div className="relative h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-8 space-y-6 md:space-y-0 md:space-x-8">
        {/* Informasi Teks */}
        <div>
          {/* Nama dan Judul */}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Alpin Apriliansyah Mohsa</h1>
          <p className="text-lg text-gray-600 mb-4">
            Full Stack Developer | Quality Assurance Enthusiast
          </p>

          {/* Deskripsi Singkat */}
          <p className="text-gray-700 max-w-md mb-6">
            I'm a passionate developer specializing in building exceptional web applications. With experience in React, Tailwind CSS, and modern JavaScript frameworks, I strive to deliver responsive and user-friendly interfaces.
          </p>
        </div>
        
        {/* Foto Profil */}
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg">
          <img
            src={pasPoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
