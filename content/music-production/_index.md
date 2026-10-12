---
title: Music Production
type: landing
summary: Music production services from Perspective Solutions.

sections:
  - block: hero
    content:
      title: Music Production
      text: Creative and technical support to bring your musical ideas to life.
      media:
        type: image
        src: logo_with_music.png
        alt: Perspective Solutions logo
    design:
      layout: stacked
      size: compact
      css_class: hero-logo-stacked service-page-hero
  - block: features
    id: services
    content:
      items:
        - name: Production and arrangement
          icon: musical-note
          description: Shape musical ideas into arrangements and complete productions.
        - name: Recording and editing
          icon: microphone
          description: Capture performances and refine recordings for your project.
        - name: Mixing and mastering
          icon: speaker-wave
          description: Balance and polish your tracks into a finished listening experience.
    design:
      css_class: "service-page-content bg-gray-50 dark:bg-gray-900/50"
  - block: portfolio
    id: portfolio
    content:
      title: Portfolio
      subtitle: Project stories and case studies coming soon.
      filters:
        folders:
          - music-production
    design:
      css_class: service-page-portfolio
      columns: 3
      fallback_icon: musical-note
  - block: cta-card
    content:
      title: Explore our technical services
      text: Perspective Solutions also offers Software Development.
      button:
        text: Software Development
        url: "/software-development/"
    design:
      css_class: service-page-cta
      card:
        css_class: "bg-gray-100 dark:bg-gray-800/60"
---
