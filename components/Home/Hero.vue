<template>
  <div class="hero">
    <CustomContainer>
      <div
        class="hero-block flex flex-col justify-center w-full"
        style="min-height: max(100vh, 600px)"
      >
        <div
          class="flex flex-col-reverse items-center md:justify-between md:flex-row w-full"
        >
          <div
            class="left w-full flex flex-col items-center md:w-8/12 md:block"
          >
            <h1
              class="font-semibold xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-sans text-center md:text-left"
              id="hero-brand"
              style="line-height: 1.2"
            >
              The Very Number #1 Platform for Secure Messaging and Quick Chat
            </h1>
            <h4 class="md:text-3xl sm:text-2xl text-xl mt-8 font-mono">
              whisping your
              <span class="text-violet-700 font-semibold">{{ chTag }}</span
              ><span
                class="blink transition-opacity ease-in-out text-violet-700"
                ><span class=""> ▏</span></span
              >
            </h4>
            <NuxtLink to="/login"
              ><ButtonOutline :class="'mt-8'"
                >Start Whisping Now ➔</ButtonOutline
              ></NuxtLink
            >
          </div>
          <div
            class="right flex justify-center"
            style="width: 200px; height: 100px"
          >
            <img class="invert inline" src="/swave.gif" alt="" style="" />
            <img
              class="invert inline"
              src="/swave.gif"
              alt=""
              style="rotate: 180deg"
            />
          </div>
        </div>
      </div>
    </CustomContainer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      indexTag: 0,
      chTag: "",
      chTags: ["friends...", "rival...", "crush...", "enemy..."],
    };
  },
  methods: {
    async changingTagsAnimation() {
      while (true) {
        const tag = this.chTags[this.indexTag];

        // adding letter by letter
        for (let char of tag) {
          this.chTag += char;
          await this.sleep(200);
        }

        await this.sleep(2500);

        // delete letter by letter
        for (let i = 0; i < tag.length; i++) {
          this.chTag = this.chTag.substring(0, this.chTag.length - 1);
          await this.sleep(100);
        }
        await this.sleep(600);
        this.indexTag = (this.indexTag + 1) % this.chTags.length;
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  mounted: function () {
    this.changingTagsAnimation();
  },
};
</script>

<style scoped>
/* .hero {
  background-image: linear-gradient(
    -180deg,
    #ffffff 0%,
    #eee6ec 25%,
    #ead5f0 50%,
    #eee6ec 75%,
    #fff 100%
  );
} */

#hero-brand {
  font-family: "Lato", sans-serif;
  text-shadow: 0px 0px 30px 0px rgba(201, 201, 201, 0.75);
}
.blink {
  animation: blinking 0.7s infinite;
}

@keyframes blinking {
  50% {
    opacity: 0;
  }
}
</style>