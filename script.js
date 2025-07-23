
  
  // 🟩 2. Initial animations
  gsap.from("#oval", { opacity: 0, duration: 3.5, ease: "power1.out" });
  
  gsap.to("#plant", {
    scale: 1.2,
    repeat: -1,
    duration: 2,
    yoyo: true,
    ease: "bounce.out"
  });
  
  // 🟨 3. Mouse interaction
  window.addEventListener("mousemove", (e) => {
    const screenCenter = window.innerWidth / 2;
    const offset = (screenCenter - e.clientX) / screenCenter;
    const shift = offset * 2;
    gsap.to("#machine", {
      y: `${shift}vw`,
      duration: 0.3,
      ease: "power1.inOut"
    });
  });
  
  window.addEventListener("mousemove", (e) => {
    const screenCenter = window.innerWidth / 2;
    const offset = (screenCenter - e.clientY) / screenCenter;
    const shift = offset * 2;
  
    const bike = document.getElementById("static_bike");
    const rect = bike.getBoundingClientRect();
    const bikeCenterX = rect.left + rect.width / 2;
    const distance = Math.abs(e.clientX - bikeCenterX);
    const scale = distance < 200 ? 1.2 - distance / 1000 : 1;
  
    gsap.to("#static_bike", {
      x: `${shift}vw`,
      scale: scale,
      duration: 0.4,
      ease: "power2.out"
    });
  });
  
  // 🟥 4. Other animations
  gsap.to("#cloud", {
    x: '80vw',
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "power1.in"
  });
  
  gsap.to("#sun", {
    x: '80vw',
    y: '-20vh',
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "power1.in"
  });
  
  gsap.to("#bird", {
    scale: 1.5,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "power1.in"
  });
  
  gsap.to("#house", {
    x: '5vw',
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power1.in"
  });
  
  gsap.to("#text img", {
    opacity: 1,
    filter: "brightness(1) blur(0px)",
    scale: 1.3,
    duration: 3,
    ease: "power1.out",
    delay: 4
  });
  
  // 🟦 5. Slide navigation
  const slides = document.querySelectorAll(".slide");
  const counter = document.getElementById("counter");
  const dots = document.getElementById("dots");
  let currentSlide = 0;
  
  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.style.display = i === currentSlide ? "block" : "none";
    });
    counter.textContent = `${currentSlide + 1}/${slides.length}`;
    updateDots();
    animateCurrentSlide();
  }
  
  function updateDots() {
    dots.innerHTML = "";
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      if (i === currentSlide) dot.classList.add("active");
      dots.appendChild(dot);
    }
  }
  
  //Here we modify the animations and scale for each element in the slides
  function animateCurrentSlide() {
  // 🟦 Slide 1 **************************************
  if (currentSlide === 0) {
    gsap.from("#walls-01", { 
      opacity: 0, 
      scale: 0.5, 
      duration: 1 
    });
    
    gsap.from("#bed-01", { 
      y: 50, 
      opacity: 0, 
      duration: 1.2, 
      delay: 0.3 
    });
    gsap.from("#text-01-1", { 
      scale: 1.3, 
      opacity: 0, 
      duration: 1.5, 
      delay: 0.5 
    });
  }

  // 🟦 Slide 2***************************************
  if (currentSlide === 1) {
    gsap.from("#bed-with-figure-01", { 
      y: -100, 
      opacity: 0, 
      duration: 1 
    });
    
    gsap.from("#wall-01", { 
      x: -100, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
    
    gsap.from("#text-01-2", { 
      x: 100, 
      opacity: 0, 
      duration: 1, 
      delay: 0.8 
    });
  }

  // 🟦 Slide 3 **************************************
  if (currentSlide === 2) {
    gsap.from("#background-3", { 
      scale: 0.8, 
      opacity: 0, 
      duration: 1 
    });
    
    gsap.from("#kitchen-01", { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
    
    gsap.from("#text-3", { 
      opacity: 0, 
      duration: 1, 
      delay: 1 
    });
  }

  // 🟦 Slide 4 **************************************
  if (currentSlide === 3) {
    gsap.from("#clouds-01", { 
      x: -100, 
      opacity: 0, 
      duration: 1 
    });
    gsap.from("#walking-01", { 
      y: 100, 
      opacity: 0,
      duration: 1, 
      delay: 0.5 
    });
    gsap.from("#text-01-4", { 
      scale: 0.5, 
      opacity: 0, 
      duration: 1, 
      delay: 1 
    });
  }

  // 🟦 Slide 5***************************************
  if (currentSlide === 4) {
    gsap.from("#background-01-5", { 
      scale: 0.8, 
      opacity: 0, 
      duration: 1 
    });
    
    gsap.from("#figers-01", { 
      x: 100, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
    
    gsap.from("#text-01-5", { 
      y: -50, 
      opacity: 0, 
      duration: 1, 
      delay: 1 
    });
  }

  // 🟦 Slide 6***************************************
  if (currentSlide === 5) {
    gsap.from("#background-01-6", { 
      opacity: 0, 
      duration: 1
     });
    
     gsap.from("#figures-01", { 
      scale: 0.5, opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
    
    gsap.from("#text-01-6", { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      delay: 1 
    });
  }

  // 🟦 Slide 7***************************************
  if (currentSlide === 6) {
    gsap.from("#figure-01", { 
      x: -100, 
      opacity: 0, 
      duration: 1 
    });

    gsap.from("#text-01-7", { 
      scale: 0.3, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
  }

  // 🟦 Slide 8****************************************
  if (currentSlide === 7) {
    gsap.from("#background-01-8", { 
      opacity: 0, 
      duration: 1 
    });
    gsap.from("#figure-01-8", { 
      scale: 0.6, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
    gsap.from("#text-01-8", {
       y: 30, 
       opacity: 0, 
       duration: 1, 
       delay: 1
      });
  }

  // 🟦 Slide 9****************************************
  if (currentSlide === 8) {
    gsap.from("#bed-01-9", { 
      x: -100, 
      opacity: 0, 
      duration: 1 
    });
    gsap.from("#wall-01-9", { 
      x: 100, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
    gsap.from("#text-01-9", { 
      opacity: 0, 
      scale: 0.8, 
      duration: 1,
      delay: 1 
    });
  }

  // 🟦 Slide 10 ****************************************
  if (currentSlide === 9) {
    gsap.from("#living-room-01", { 
      y: 50, 
      opacity: 0, 
      duration: 1 
    });
    gsap.from("#text-01-10", { 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
  }

  // 🟦 Slide 11 ****************************************
  if (currentSlide === 10) {
    gsap.from("#slide-15-01", { 
      scale: 0.5, 
      opacity: 0,
      duration: 1 
    });
    gsap.from("#text-01-11", { 
      y: -30, 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
  }
}

  
  document.getElementById("prev").addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlides();
    }
  });
  
  document.getElementById("next").addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlides();
    }
  });
  
  updateSlides();
  
  // 🟨 6. Music toggle
  document.body.addEventListener("click", function startMusic() {
    const music = document.getElementById("bg-music");
    music.volume = 0.3;
    music.play();
    document.body.removeEventListener("click", startMusic);
  });
  
  document.getElementById("mute-btn").addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    music.muted = !music.muted;
    document.getElementById("mute-btn").textContent = music.muted ? "🔇 Unmute" : "🔊 Mute";
  });
  