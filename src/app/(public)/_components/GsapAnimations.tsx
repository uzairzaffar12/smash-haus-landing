'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GsapAnimations() {
  useGSAP(() => {
    const navbarTimeline = gsap.timeline()
    navbarTimeline
      .to("#navbar .path", {
        stagger:0.1,
        duration: 0.2,
        opacity: 1,
        ease: 'none',
      })
      .to('.navbar-btn', {
        duration: 0.3,
        scale: 1,
        opacity: 1,
      });

    const overlappingCards = document.querySelectorAll('.overlapping-cards');
    overlappingCards.forEach((rod, index) => {
      gsap.to(rod, {
        scrollTrigger: {
          trigger: rod,
          once: true,
          start: '50% bottom',
        },
        transform: 'translateY(0)',
        ease: 'none',
        duration: 0.3,
        opacity: 1,
        force3D: true,
        delay: index * 0.1,
      });
    });

    

    const mainHeadings = document.querySelectorAll('.main-heading');
    mainHeadings.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: '5% bottom',
        },
        y: 0,
        ease: 'none',
        duration: 0.3,
        opacity: 1,
        delay: 0.7,
      });
    });

    const sectionHeadings = document.querySelectorAll('.section-heading');
    sectionHeadings.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: '5% bottom',
        },
        y: 0,
        ease: 'none',
        duration: 0.3,
        opacity: 1,
      });
    });

    gsap.to('.paragraph-text', {
      y: 0,
      ease: 'none',
      duration: 0.3,
      opacity: 1,
      delay: 0.7,
    });

    gsap.to('.rectangle', {
      scrollTrigger: {
        trigger: '.rectangle',
      },
      opacity: 1,
      duration: 0.6,
      y: 0,
      ease: 'none',
    });

    gsap.to('.netflix-box', {
      scrollTrigger: {
        trigger: '.netflix-box',
      },
      duration: 0.5,
      opacity: 1,
      x: 0,
    });

    gsap.to('.sub-text', {
      y: 0,
      ease: 'none',
      duration: 0.5,
      opacity: 1,
      delay: 0.7,
    });

    gsap.to('.user-elem', {
      scrollTrigger: '.user-elem',
      duration: 0.5,
      delay: 1,
      opacity: 1,
      y: 0,
    });

    gsap.to('.sony-tag', {
      scrollTrigger: '.sony-tag',
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });

    const footerIcons = document.querySelectorAll('.footer-icon');
    footerIcons.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: item,
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.1,
      });
    });

    const musicBoxText = document.querySelectorAll('.musicBox-text');
    musicBoxText.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: item,
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.2,
      });
    });

    const buttons = document.querySelectorAll('.anim-button');

    buttons.forEach((btn) => {
      const btnTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: btn,
          start: 'top bottom',
        },
      });

      btnTimeline
        .to(btn, {
          duration: 0.2,
          scale: 1,
          delay: 0.7,
        })
        .to(btn, {
          ease: 'none',
          duration: 0.2,
          width: '205px',
        });
    });

    gsap.to('.music-card', {
      scrollTrigger: '.music-card',
      opacity: 1,
      duration: 0.5,
    });

    const cards = document.querySelectorAll('.cards');

    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: '50% bottom',
        },
      });
    });

    gsap.to('.testimonialCards', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonialCards',
        start: '50% bottom',
      },
    });

    
    

      gsap.to("#footer .path", {
        stagger:0.1,
        scrollTrigger:"#footer .path",
        duration: 0.2,
        opacity: 1,
        ease: 'none',
      });

      
  });
  return <></>;
}
