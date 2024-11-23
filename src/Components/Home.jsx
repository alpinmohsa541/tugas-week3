import pasPoto from '../assets/pas-poto-alpin2.jpg';

const Home = () => {
  return (
    <>
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-100">
      <div className="relative flex flex-col items-center p-8 space-y-6 text-center md:flex-row md:items-start md:text-left md:space-y-0 md:space-x-8">
        {/* Informasi Teks */}
        <div>
          {/* Nama dan Judul */}
          <h1 className="mb-2 text-4xl font-bold text-gray-800">Alpin Apriliansyah Mohsa</h1>
          <p className="mb-4 text-lg text-gray-600">
            Full Stack Developer | Quality Assurance Enthusiast
          </p>

          {/* Deskripsi Singkat */}
          <p className="max-w-md mb-6 text-gray-700">
            I`m a passionate developer specializing in building exceptional web applications. With experience in React, Tailwind CSS, and modern JavaScript frameworks, I strive to deliver responsive and user-friendly interfaces.
          </p>
        </div>
        
        {/* Foto Profil */}
        <div className="w-48 h-48 overflow-hidden rounded-full shadow-lg md:w-60 md:h-60">
          <img
            src={pasPoto}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
