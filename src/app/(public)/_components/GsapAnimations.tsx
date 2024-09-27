'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GsapAnimations() {
  useGSAP(() => {
    // navbar animations
    const navbarTimeline = gsap.timeline();
    navbarTimeline
      .to('#navbar .path', {
        stagger: 0.1,
        duration: 0.2,
        opacity: 1,
        ease: 'none',
      })
      .to('.navbar-btn', {
        duration: 0.3,
        scale: 1,
        opacity: 1,
      });

    // hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .to('.sub-text', {
        y: 0,
        ease: 'none',
        duration: 0.5,
        opacity: 1,
      })
      .to('.main-heading', {
        y: 0,
        ease: 'none',
        duration: 0.3,
        opacity: 1,
      })
      .to('.paragraph-text', {
        y: 0,
        ease: 'none',
        duration: 0.3,
        opacity: 1,
      })
      .to('.hero-btn', {
        duration: 0.2,
        scale: 1,
      })
      .to('.hero-btn', {
        duration: 0.2,
        width: '205px',
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

    // cards section

    gsap.to('.cards', {
      opacity: 1,
      translateX: 0,
      duration: 0.7,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.cards',
        start: '50% bottom',
      },
    });

    // music section animations
    gsap.to('#music-section .section-heading', {
      scrollTrigger: {
        trigger: '#music-section .section-heading',
        start: '5% bottom',
      },
      translateY: 0,
      ease: 'none',
      duration: 0.3,
      opacity: 1,
    });

    gsap.to('.musicBox-text', {
      scrollTrigger: '.musicBox-text',
      translateX: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
    });

    gsap.to('#music-section .button', {
      scrollTrigger: '#music-section .button',
      width: 205,
      opacity: 1,
      duration: 0.5,
    });

    gsap.to('.music-card', {
      scrollTrigger: '.music-card',
      opacity: 1,
      duration: 0.5,
    });

    const overlappingCards = gsap.utils.toArray<HTMLElement>('.overlapping-cards');
    overlappingCards.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: '50% bottom',
        },
        stagger: 0.3,
        translateY: 0,
        ease: 'none',
        duration: 0.3,
        opacity: 1,
      });
    });

    // testimonials section

    gsap.to('#testimonials-section .section-heading', {
      scrollTrigger: {
        trigger: '#testimonials-section .section-heading',
        start: '5% bottom',
      },
      translateY: 0,
      ease: 'none',
      duration: 0.3,
      opacity: 1,
    });

    gsap.to('.testimonialCards', {
      opacity: 1,
      translateY: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonialCards',
        start: '50% bottom',
      },
    });

    // footer section animations

    gsap.to('#footer .path', {
      stagger: 0.1,
      scrollTrigger: '#footer .path',
      duration: 0.2,
      opacity: 1,
      ease: 'none',
    });

    gsap.to('.footer-icon', {
      scrollTrigger: '.footer-icon',
      translateX: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
    });
  });

  return <></>;
}
