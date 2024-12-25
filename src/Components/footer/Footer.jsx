export default function Footer() {
  return (
    <footer className="bg-blue-600 pb-4">
      <div className="container w-[90%] mx-auto py-5 flex flex-col gap-3 text-center md:text-start md:flex-row md:gap-10 md:justify-between">
        <div className="title lg:w-1/3">
          <h1 className="text-slate-200 font-bold text-base md:text-lg">
            SiniLoker.id
          </h1>
          <p className="text-blue-300 md:text-base">
            Platform digital yang memudahkan pencari kerja menemukan lowongan
            sesuai keahlian dan perusahaan mencari kandidat terbaik.
          </p>
        </div>
        <div className="logo flex items-start justify-center gap-5 text-slate-300 pt-6">
          <a href="https://www.google.com/">
            <i className="fab fa-google text-2xl" />
          </a>
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook text-2xl" />
          </a>
          <a href="https://www.instagram.com/renaldiisptr/">
            <i className="fab fa-instagram text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/renaldiisptr/">
            <i className="fab fa-linkedin text-2xl" />
          </a>
          <a href="https://github.com/Renaldis">
            <i className="fab fa-github text-2xl" />
          </a>
        </div>
        <div className="services flex items-start justify-center text-slate-100 gap-5 lg:w-1/3 pt-6 text-sm md:text-base">
          <a href="#">
            <span>Privacy Policy</span>
          </a>
          <a href="#">
            <span>Terms of Service</span>
          </a>
          <a href="#">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
      <div className="text-center text-slate-300 text-sm md:text-base">
        &copy; 2024 SiniLoker.id. All rights reserved.
      </div>
    </footer>
  );
}