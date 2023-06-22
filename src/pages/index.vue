<template>
  <div>
    <IndexHero id="hero" class="show" @scroll-to="scrollTo" />
    <IndexFeature id="feature" class="show" />
    <IndexProposal id="proposal" />
    <IndexEquipment id="equipment" />
    <IndexActivities id="activities" />
    <IndexContact id="contact" />
  </div>
</template>

<script setup>
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 95
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const showSections = () => {
    const sections = document.querySelectorAll('.section')
    const windowHeight = window.innerHeight
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

    sections.forEach((section) => {
      const offsetTop = section.offsetTop

      if (scrollPosition + windowHeight >= offsetTop) {
        section.classList.add('show')
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', showSections)
    window.addEventListener('load', showSections)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', showSections)
    window.removeEventListener('load', showSections)
  })
</script>

<style scoped>
  section {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .show {
    opacity: 1;
    transform: translateX(0);
  }

  section#proposal {
    opacity: 0;
    transform: translateX(-5%);
    transition-delay: 2s;
    transition: all 0.5s ease-in-out;
  }

  section#proposal.show {
    opacity: 1;
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    section#proposal {
      opacity: 0;
      transform: translateY(-10%);
      transition-delay: 2s;
      transition: all 1s ease-in-out;
    }

    section#proposal.show {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
