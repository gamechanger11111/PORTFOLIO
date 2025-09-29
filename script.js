document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    projects.forEach(project => {
      const projectTop = project.getBoundingClientRect().top;
      if (projectTop < triggerBottom) {
        project.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
