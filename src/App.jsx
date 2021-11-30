import React from "react";
import Home from './components/home'


export function App () {
  return (
    <body>
          <nav class="navbar navbar-expand-lg">
              <div class="container px-4 px-lg-5">
                  <img src="/img/subasta.ico.png" id="logo" alt="logo" />
                  <a id="navbar-brand" href="#!">Oroplas</a>
                  <a id="navbar-brand" href="#!">Subastas</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                      <div class="collapse navbar-collapse" id="navbar-font">
                          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                              <a class="nav-link" href="">Iniciar Sesión</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="">Términos y condiciones</a>
                            </li>
                          </ul>
                      </div>
              </div>
          </nav>
         
          <section>
              <div
                  id="carousel"
                  class="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-pause="“false”"
                >
              <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="/img/imagen1.jpg"
                        class="d-block w-100"
                        alt="foto"
                      />
                    </div>
                  <div class="overlay">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12 offset-md-12  text-md-center">
                          <h1>¡Las joyas de tus sueños, al alcance de tus manos!</h1>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </section>
       
          <section class="py-5">
              <div class="container px-4 px-lg-5 mt-5">
                  <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      <div class="col mb-5">
                          <div class="card h-100">
                             
                              <img class="card-img-top" src="/img/joya1.jpg" alt="..." />
                             
                              <div class="card-body p-4">
                                  <div class="text-center">
                                     
                                      <h5 class="fw-bolder">Anillo Oro Amarillo con Diamantes</h5>
                                      $5.000.000
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col mb-5">
                          <div class="card h-100">
                          
                            <img class="card-img-top" src="/img/joya2.jpg" alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder">Anillo oro blanco,Diamantes </h5>
                                    $6.600.000
                                </div>
                            </div>   
                              
                          </div>
                      </div>
                      <div class="col mb-5">
                          <div class="card h-100">
                            
                            <img class="card-img-top" src="/img/joya3.jpg" alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder">Anillo Oro Blanco con Diamantes</h5>
                                   
                                    $8.600.000
                                </div>
                            </div>   
                              
                          </div>
                      </div>
                      <div class="col mb-5">
                          <div class="card h-100">
                
                            <img class="card-img-top" src="/img/joya4.jpg" alt="..." />
                         
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Aretes esmeraldas, zafiros</h5>
                                  
                                    $2.600.000
                                </div>
                            </div>   
                              
                          </div>
                      </div>
                      
                  </div>
              </div>
          </section>
   
          <footer id="footer">
              <div class="container">
                  <p class="m-0 text-center text-white">Oroplas Ltda | Cartagena, Colombia</p>
                  <p class="m-0 text-center text-white">Todos los derechos reservados</p>
              </div>
          </footer>
         
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        
          <script src="js/scripts.js"></script>
      </body>      
  );
}



