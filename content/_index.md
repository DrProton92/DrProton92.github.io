---
title: 'Perspective Solutions'
summary: Software Development and Music Production from a sole proprietorship in business since 1998
type: landing

sections:
  - block: hero
    content:
      text: A sole proprietorship bringing together Software Development and Music Production. Explore practical software solutions and creative music services.
      primary_action:
        text: Software Development
        url: "/software-development/"
        icon: code-bracket
        style: gradient
      secondary_action:
        text: Music Production
        url: "/music-production/"
        icon: musical-note
        style: gradient
      media:
        type: image
        src: logo.png
        alt: Perspective Solutions logo
    design:
      layout: stacked
      size: compact
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark hero-logo-stacked"
      background:
        # Deep navy base; radial glow paints a soft violet spotlight from above
        color: "#0a0e27"
        gradient:
          type: radial
          start: "rgba(124,58,237,0.45)"
          end: "transparent"
          position: "50% -10%"
          shape: ellipse
          size: "80% 80%"
        # Mesh orbs add depth and atmosphere on top of the radial glow
        gradient_mesh:
          enable: true
          style: orbs
          intensity: medium
          animation: pulse
          colors: ["primary-500/25", "secondary-500/25"]
          orb_count: 2
          positions: ["top-1/3 left-1/4", "bottom-1/3 right-1/4"]
          sizes: ["w-[32rem] h-[32rem]", "w-[26rem] h-[26rem]"]
---
