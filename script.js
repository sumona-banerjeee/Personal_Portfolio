document.addEventListener("DOMContentLoaded", () => {
  // Skill bar animation
  const skillProgressBars = document.querySelectorAll('.skill-progress');

  skillProgressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    setTimeout(() => {
      bar.style.width = progress;
    }, 100);
  });

  // Hover image popup on "Show" button
  const popup = document.getElementById("popupImage");
  const popupImg = popup.querySelector("img");

  document.querySelectorAll(".show-btn").forEach(button => {
    button.addEventListener("mouseenter", (e) => {
      const imgSrc = e.target.getAttribute("data-img");
      popupImg.src = imgSrc;
      popup.style.display = "block";
    });

    button.addEventListener("mousemove", (e) => {
      popup.style.top = e.pageY + 20 + "px";
      popup.style.left = e.pageX + 20 + "px";
    });

    button.addEventListener("mouseleave", () => {
      popup.style.display = "none";
    });
  });

  // Animate name letters one by one
  const nameElement = document.getElementById("animated-name");
  if (nameElement) {
    const text = nameElement.textContent.trim();
    nameElement.textContent = ""; // Clear original text

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${index * 0.5}s`;
      nameElement.appendChild(span);
    });
  }
});
