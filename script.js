// script.js — FINAL WORKING VERSION
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle — fixed selector
  const mobileButton = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (mobileButton && mobileMenu) {
    mobileButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('bg-white/95', window.scrollY > 100);
    header.classList.toggle('backdrop-blur-sm', window.scrollY > 100);
    header.classList.toggle('shadow-xl', window.scrollY > 100);
  });

  // Year auto-update
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});