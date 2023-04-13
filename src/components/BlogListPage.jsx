import React from "react";
import "./css/about.css";
const BlogListPage = () => {
  return (
    <div className="as kenburns-top-right">
      <audio autoPlay>
        <source src=".\assets\Kibariye-Arada-Bir.mp3" type="audio/mpeg"/>
      </audio>
   
      <section className='w3l-content-6' id='skills'>
        <div className='content-6-mian py-5'>
          <div className='container py-lg-5 py-md-4 py-2'>
            <div className='content-info-in row'>
              <div className='content-gd col-lg-5 pe-lg-5 my-image'>
                <img src='./assets/resim.jpg' alt='' className='img-fluid' />
              </div>
              <div className='content-gd col-lg-7 mt-lg-0 mt-5 align-self ps-lg-5'>
                <h3 className='w3l-title-main mb-lg-4 mb-3' id="xxx">Hakkımda</h3>
                <p className='my-4 pe-lg-5' id='paragraf'>
                  Çeşitli sertifika,kurslar,bootcampler ve programlar sayesinde
                  kendimi front-end alanında geliştirdim. Aynı zamanda
                  arayüzlerin geliştirilmesi için kodlarda düzenleme ve
                  geliştirme yapabiliyorum. Mobil alandada kendimi geliştirmeye
                  başladım. Gelişime açık bir insanım hızlı ve kolay uyum
                  sağlayabilir ve kolay öğrenen bir yapıya sahibim.
                </p>
                <h5 className='w3l-subtitle mt-5'  id='paragraf'>
                  Kendimi aşağıda görülen dillerde geliştirdim ve bunları
                  kendimce yüzdelik olarak hesapladım{" "}
                </h5>
<div className="diller">
                <div className='progress-info '>
                  <h6 className='progress-tittle dil' c>HTML5</h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: " 85%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div className='progress-info info1 dil'>
                  <h6 className='progress-tittle'>CSS3 & Bootstrap & Tailwind</h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: "60%" }}
                      aria-valuenow='95'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div className='progress-info info3 dil'>
                  <h6 className='progress-tittle'>Javascript</h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: " 55%" }}
                      aria-valuenow='55'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div className='progress-info info4 mb-0 dil' >
                  <h6 className='progress-tittle'>React</h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-bar-striped dil'
                      role='progressbar'
                      style={{ width: "62%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div className='progress-info info4 mb-0 dil'>
                  <h6 className='progress-tittle'>React Native</h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: "44%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div className='progress-info info4 mb-0'>
                  <h6 className='progress-tittle dil'>Angular</h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: "45%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div className='progress-info info4 mb-0'>
                  <h6 className='progress-tittle dil'>Git&Github</h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: "77%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default BlogListPage;
