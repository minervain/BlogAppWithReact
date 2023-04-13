import React from "react";
import "./css/about.css";
const BlogListPage = () => {
  return (
    <div>
      <section class='w3l-content-6' id='skills'>
        <div class='content-6-mian py-5'>
          <div class='container py-lg-5 py-md-4 py-2'>
            <div class='content-info-in row'>
              <div class='content-gd col-lg-5 pe-lg-5 my-image'>
                <img src='./assets/resim.jpg' alt='' class='img-fluid' />
              </div>
              <div class='content-gd col-lg-7 mt-lg-0 mt-5 align-self ps-lg-5'>
                <h3 class='w3l-title-main mb-lg-4 mb-3'>Hakkımda</h3>
                <p class='my-4 pe-lg-5' id='paragraf'>
                  Çeşitli sertifika,kurslar,bootcampler ve programlar sayesinde
                  kendimi front-end alanında geliştirdim. Aynı zamanda
                  arayüzlerin geliştirilmesi için kodlarda düzenleme ve
                  geliştirme yapabiliyorum. Mobil alandada kendimi geliştirmeye
                  başladım. Gelişime açık bir insanım hızlı ve kolay uyum
                  sağlayabilir ve kolay öğrenen bir yapıya sahibim.
                </p>
                <h5 class='w3l-subtitle mt-5'>
                  Kendimi aşağıda görülen dillerde geliştirdim ve bunları
                  kendimce yüzdelik olarak hesapladım{" "}
                </h5>

                <div class='progress-info '>
                  <h6 class='progress-tittle'>HTML5</h6>
                  <div class='progress'>
                    <div
                      class='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: " 85%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div class='progress-info info1'>
                  <h6 class='progress-tittle'>CSS3 & Bootstrap & Tailwind</h6>
                  <div class='progress'>
                    <div
                      class='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: "60%" }}
                      aria-valuenow='95'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div class='progress-info info3'>
                  <h6 class='progress-tittle'>Javascript</h6>
                  <div class='progress'>
                    <div
                      class='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: " 55%" }}
                      aria-valuenow='55'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div class='progress-info info4 mb-0'>
                  <h6 class='progress-tittle'>React</h6>
                  <div class='progress'>
                    <div
                      class='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: "62%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div class='progress-info info4 mb-0'>
                  <h6 class='progress-tittle'>Angular</h6>
                  <div class='progress'>
                    <div
                      class='progress-bar progress-bar-striped'
                      role='progressbar'
                      style={{ width: "45%" }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
                <div class='progress-info info4 mb-0'>
                  <h6 class='progress-tittle'>Git&Github</h6>
                  <div class='progress'>
                    <div
                      class='progress-bar progress-bar-striped'
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
      </section>
    </div>
  );
};

export default BlogListPage;
