document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    noWrap: false
  });
});
function update10() {
  var element = document.getElementById("myprogressBar");
  var width = 0;
  var identity = setInterval(scene, 10);
  function scene() {
      if (width >= 10) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update20() {
  var element = document.getElementById("myprogressBar");
  var width = 1;
  var identity = setInterval(scene, 20);
  function scene() {
      if (width >= 20) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update30() {
  var element = document.getElementById("myprogressBar");
  var width = 20;
  var identity = setInterval(scene, 30);
  function scene() {
      if (width >= 30) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update40() {
  var element = document.getElementById("myprogressBar");
  var width = 30;
  var identity = setInterval(scene, 40);
  function scene() {
      if (width >= 40) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update50() {
  var element = document.getElementById("myprogressBar");
  var width = 40;
  var identity = setInterval(scene, 50);
  function scene() {
      if (width >= 50) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update60() {
  var element = document.getElementById("myprogressBar");
  var width = 50;
  var identity = setInterval(scene, 60);
  function scene() {
      if (width >= 60) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update70() {
  var element = document.getElementById("myprogressBar");
  var width = 60;
  var identity = setInterval(scene, 70);
  function scene() {
      if (width >= 70) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update80() {
  var element = document.getElementById("myprogressBar");
  var width = 70;
  var identity = setInterval(scene, 80);
  function scene() {
      if (width >= 80) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update90() {
  var element = document.getElementById("myprogressBar");
  var width = 80;
  var identity = setInterval(scene, 90);
  function scene() {
      if (width >= 90) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}

function update100() {
  var element = document.getElementById("myprogressBar");
  var width = 90;
  var identity = setInterval(scene, 100);
  function scene() {
      if (width >= 100) {
          clearInterval(identity);
      } else {
          width++;
          element.style.width = width + '%';
          element.innerHTML = width * 1 + '%';
      }
  }
}