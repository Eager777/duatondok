import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main>
        <Sidebar />

        <div className="main-content">
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
              <p>Nama Lengkap : Eager Duatondok Palangan</p>
              <p>Jenis Kelamin : Laki-laki</p>
              <p>Agama : Kristen</p>
              <p>Status : Mahasiswa</p>
              <ol className="hobi">
                Hobi :
                <ul className="list-hobi">
                  <li>&bull; Badminton</li>
                  <li>&bull; Berenang</li>
                  <li>&bull; Menyanyi</li>
                  <li>&bull; Bermain Piano</li>
                  <li>&bull; Bermain Gitar</li>
                </ul>
              </ol>
              <ol className="hobi">
                Prestasi :
                <ul className="list-hobi">
                  <li>&bull; Membuat Game</li>
                  <li>&bull; Konser Piano</li>
                  <li>&bull; Lulus sidang skripsi 1</li>
                </ul>
              </ol>
              <p>Pelatihan : Adobe Photoshop</p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
