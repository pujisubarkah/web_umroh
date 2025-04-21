const HajiFurodaSection = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <figure>
              <img
                src="/hajifuroda.jpg"
                alt="Haji Furoda"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="text-justify text-gray-800 leading-relaxed">
              <p className="mb-4">
                <strong>Haji Furoda</strong> yakni satu-satunya program Haji non kuota yang sah dan terdaftar dalam kuota calon jamaah Haji oleh pemerintah kerajaan Arab Saudi. Tidak seperti para jamaah Haji Reguler dan Haji Plus yang memakai Visa Haji sebagai akses masuk ke tanah suci, para jamaah Haji Furoda memakai Visa khusus yang dinamakan <strong>Visa Furoda</strong>.
              </p>
              <p className="mb-4">
                Visa Furoda memang diciptakan secara khusus untuk para jamaah Haji yang berhaji memakai kuota pemerintah kerajaan Arab Saudi. Oleh karena Haji Furoda tak mengambil jatah kuota Haji pemerintah RI, karenanya calon jamaah tidak perlu antri seperti para calon jamaah yang mendaftar Haji Reguler dan Haji Plus (kuota Haji RI). Mulai tahun 2019, travel pelaksana Haji Furoda tetap harus melapor ke Kemenag agar tetap dapat dimonitor dan terjaga.
              </p>
              <p className="font-semibold text-pink-700">
                Daftarkan segera program khusus Haji Furoda untuk Anda yang ingin menunaikan Ibadah Haji tanpa antri bersama Khalifah Asia.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HajiFurodaSection;
  
