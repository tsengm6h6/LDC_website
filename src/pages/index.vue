<template>
  <div>
    <IndexHero id="hero" @scroll-to="scrollTo" />
    <IndexFeature id="feature" />
    <IndexProposal id="proposal" />
    <IndexEquipment id="equipment" />
    <IndexActivities id="activities" />
    <IndexContact id="contact" />
  </div>
</template>

<script lang="ts" setup>
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 95
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting)
          if (entry.isIntersecting) observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '48px',
        threshold: 0.3,
      }
    )

    const sections = document.querySelectorAll('section')

    sections.forEach((section) => {
      observer.observe(section)
    })
  })
</script>

<style scoped>
  section {
    opacity: 0;
    transition: all 0.3s ease-in-out;
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
      transition: all 2s ease-in-out;
    }

    section#proposal.show {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
