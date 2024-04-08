/**
* Template Name: EstateAgency - v4.8.0
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Search window open/close
   */
  let body = select('body');
  on('click', '.navbar-toggle-box', function(e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function(e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })

  /**
   * Intro Carousel
   */
  new Swiper('.intro-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property carousel
   */
  new Swiper('#property-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.propery-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * News carousel
   */
  new Swiper('#news-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.news-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Testimonial carousel
   */
  new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property Single carousel
   */
  new Swiper('#property-single-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.property-single-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });
})()

function Pago_mensual() {
  // La función devuelve el pago mensual
  let ms=document.getElementsByName("valor_credito")[0].value;
  ms=parseFloat(ms);
  /*alert(ms);*/
  let tm=document.getElementsByName("tasa_anual")[0].value;
  tm=parseFloat(tm/12)
  /*alert(tm);*/
  let p=document.getElementsByName("plazo_years")[0].value;
  p=parseInt(p*12);
  /*alert(p);*/

  if (!isNaN(ms)) {
      if (!isNaN(tm)) {
        if (!isNaN(p)) {
          pm=(ms*(tm/100)*Math.pow(1+tm/100,p))/(Math.pow(1+tm/100,p)-1);
        } 
      }
  }

/*alert(pm);*/
  document.getElementById("cuota").innerHTML = 'Cuota mensual: ' + parseFloat(pm).toFixed(2);

  tabla_datos();

}

function tabla_datos(){

  document.getElementById("correo_cliente").innerHTML=document.getElementsByName("email")[0].value;
  document.getElementById("nombre_cliente").innerHTML=document.getElementsByName("name")[0].value;
  document.getElementById("fecha_birth").innerHTML=document.getElementsByName("fechanacimiento")[0].value;
  document.getElementById("salario_neto").innerHTML=document.getElementsByName("salario")[0].value;
  document.getElementById("vivienda").innerHTML=document.getElementsByName("valor")[0].value;
  document.getElementById("monto").innerHTML=document.getElementsByName("valor_credito")[0].value;
  document.getElementById("plazo").innerHTML=document.getElementsByName("plazo_years")[0].value;
  document.getElementById("tasa").innerHTML=document.getElementsByName("tasa_anual")[0].value+"%";
  document.getElementById("cuota_tabla").innerHTML=parseFloat(pm).toFixed(2);

  let salariominimo=parseFloat(pm).toFixed(2);
  salariominimo=parseFloat(salariominimo/0.40).toFixed(2);
  document.getElementById("ingreso_minimo").innerHTML=salariominimo;
  
  let porcentaje=parseFloat(parseFloat(document.getElementsByName("valor_credito")[0].value)/parseFloat(document.getElementsByName("valor")[0].value)).toFixed(2)*100;
  document.getElementById("porcentaje_prestamo").innerHTML=porcentaje+"%";

  let salario=parseFloat(document.getElementsByName("salario")[0].value).toFixed(2);

  if(parseFloat(salario).toFixed(2) > parseFloat(salariominimo).toFixed(2)){
    document.getElementById("revision_salario").innerHTML="Monto de salario insuficiente para el crédito";
  }
  else{
   document.getElementById("revision_salario").innerHTML="Monto de salario suficiente para el crédito";
  }

  
  if(calcular_edad(document.getElementById("fecha_birth").innerHTML)<=55 && calcular_edad(document.getElementById("fecha_birth").innerHTML)>=22 ){
    document.getElementById("revision_edad").innerHTML="Cliente con edad suficiente para crédito";
  }
  else{
    document.getElementById("revision_edad").innerHTML="No se cumplen los requisitos relacionados a la edad";
  }

}

function calcular_edad(cumple) { 
  let d1 = new Date(cumple);
  let d2 = new Date(Date.now());
  let edad =  d2.getFullYear() - d1.getFullYear();
  return edad
}

function interes(){

  let tasaMensual=document.getElementsByName("tasa_anual")[0].value;
  tasaMensual=parseFloat(tasaMensual/12);

  let mes=document.getElementsByName("plazo_years")[0].value;
  mes=parseInt(mes*12);

  let pagoMensual= pm;
  let montoSolicitado=document.getElementsByName("valor_credito")[0].value;

  let vInteres=0;
  let amortiza=montoSolicitado;
  const interes=[];
  const amortizacion=[];
  const saldo=[];

  for(var i = 1;i<=8;i++){
    vInteres=(amortiza*(tasaMensual/100));
    amortiza=amortiza-(pagoMensual-vInteres);
    interes[i]=vInteres;
    amortizacion[i]=pagoMensual-vInteres;
    saldo[i]=amortiza;
  } 

  /*alert(interes);
  alert(amortizacion);
  alert(saldo);*/

  document.getElementById("p1").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i1").innerHTML=parseFloat(interes[1]).toFixed(2);
  document.getElementById("a1").innerHTML=parseFloat(amortizacion[1]).toFixed(2);
  document.getElementById("s1").innerHTML=parseFloat(saldo[1]).toFixed(2);

  document.getElementById("p2").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i2").innerHTML=parseFloat(interes[2]).toFixed(2); 
  document.getElementById("a2").innerHTML=parseFloat(amortizacion[2]).toFixed(2);
  document.getElementById("s2").innerHTML=parseFloat(saldo[2]).toFixed(2);

  document.getElementById("p3").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i3").innerHTML=parseFloat(interes[3]).toFixed(2);
  document.getElementById("a3").innerHTML=parseFloat(amortizacion[3]).toFixed(2);
  document.getElementById("s3").innerHTML=parseFloat(saldo[3]).toFixed(2);

  document.getElementById("p4").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i4").innerHTML=parseFloat(interes[4]).toFixed(2);
  document.getElementById("a4").innerHTML=parseFloat(amortizacion[4]).toFixed(2);
  document.getElementById("s4").innerHTML=parseFloat(saldo[4]).toFixed(2);

  document.getElementById("p5").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i5").innerHTML=parseFloat(interes[5]).toFixed(2);
  document.getElementById("a5").innerHTML=parseFloat(amortizacion[5]).toFixed(2);
  document.getElementById("s5").innerHTML=parseFloat(saldo[5]).toFixed(2);

  document.getElementById("p6").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i6").innerHTML=parseFloat(interes[6]).toFixed(2);
  document.getElementById("a6").innerHTML=parseFloat(amortizacion[6]).toFixed(2);
  document.getElementById("s6").innerHTML=parseFloat(saldo[6]).toFixed(2);

  document.getElementById("p7").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i7").innerHTML=parseFloat(interes[7]).toFixed(2);
  document.getElementById("a7").innerHTML=parseFloat(amortizacion[7]).toFixed(2);
  document.getElementById("s7").innerHTML=parseFloat(saldo[7]).toFixed(2);

  document.getElementById("p8").innerHTML=parseFloat(pm).toFixed(2);
  document.getElementById("i8").innerHTML=parseFloat(interes[8]).toFixed(2);
  document.getElementById("a8").innerHTML=parseFloat(amortizacion[8]).toFixed(2);
  document.getElementById("s8").innerHTML=parseFloat(saldo[8]).toFixed(2);



}
