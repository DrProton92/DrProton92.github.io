---
title: 'Perspective Solutions'
summary: Software Development and Music Production from a sole proprietorship in business since 1998.
type: landing

sections:
  - block: hero
    content:
      eyebrow: Independent business since 1998
      title: Perspective Solutions
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
        style: ghost
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
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
  - block: features
    id: services
    content:
      subtitle: Technical expertise and creative perspective
      title: Services offered
      text: Two areas of expertise, one independent business. Choose a service to learn more.
      items:
        - name: Software Development
          icon: code-bracket
          description: Custom applications, web development, and ongoing software maintenance.
        - name: Music Production
          icon: musical-note
          description: Production, arrangement, recording, editing, mixing, and mastering.
    design:
      css_class: "bg-gray-50 dark:bg-gray-900/50"
---
