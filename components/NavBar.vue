<template>
  <nav
    class="fixed top-0 w-full backdrop-blur flex justify-between items-center p-4 z-50"
    :id="scrolled ? 'scrolled-navbar' : ''"
  >
    <div class="left">
      <img src="/icon.png" width="30px" class="h-auto inline-block" alt="" />
      <p class="font-bold inline-block text-lg">
        <a href="/">Whisper.io</a>
      </p>
    </div>
    <div class="middle">
      <ul class="flex flex-row space-x-8 text-sm font-semibold">
        <li class="nav-items">
          <a
            class="nav-links hover:text-violet-700 text-center transition-colors duration-500 ease-in-out"
            href="#about"
            >What's This?</a
          >
        </li>
        <li class="nav-items">
          <a
            class="nav-links hover:text-violet-700 text-center transition-colors duration-500 ease-in-out"
            href="#reason"
            >Why do I?</a
          >
        </li>
        <li class="nav-items">
          <a
            class="nav-links hover:text-violet-700 text-center transition-colors duration-500 ease-in-out"
            href="#profile"
            >Whose own this?</a
          >
        </li>
      </ul>
    </div>
    <div class="right me-2">
      <ul class="flex flex-row space-x-8 text-sm font-semibold">
        <li class="nav-items">
          <a
            class="text-center transition-colors duration-500 ease-in-out bg-violet-700 text-white px-4 py-3 rounded-md hover:bg-violet-900 hover:text-violet-100"
            href="#"
            >Login</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 100; // Adjust the scroll position threshold
    },
  },
};
</script>

<style>
nav {
  background: transparent;
}

.nav-links {
  position: relative;
}

.nav-links::before {
  position: absolute;
  bottom: -5px;
  left: 0;
  content: "";
  background-color: #925fe2;
  height: 3px;
  width: 0;
  transition: all 400ms ease-in-out;
}

.nav-links:hover::before {
  width: 100%;
}

#scrolled-navbar {
  border-color: #0f172a1a;
  border-bottom-width: 1px;
  background: white;
}

nav .middle {
  margin-left: -10ch;
}

@media (max-width: 1000px) {
  nav .middle {
    display: none;
  }
}
</style>