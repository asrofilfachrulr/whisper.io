<template>
  <div class="hero">
    <div class="backdrop-blur">
      <CustomContainer>
        <div
          class="hero-block flex flex-col justify-center w-full"
          style="min-height: max(100vh, 600px)"
        >
          <div
            class="flex md:justify-between w-full md:flex-row flex-col-reverse items-center"
          >
            <div
              class="left w-full flex flex-col items-center md:w-auto md:block"
            >
              <h1
                class="font-semibold lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-sans"
                id="hero-brand"
                style="line-height: 1.5"
              >
                Whisper.io
              </h1>
              <h4 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                whisping your
                <span class="text-violet-700 font-semibold">{{ chTag }}</span
                ><span
                  class="blink transition-opacity ease-in-out text-violet-700"
                  ><span class=""> ▏</span></span
                >
              </h4>
            </div>
            <div class="right">
              <img src="/hero.png" alt="" />
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      indexTag: 0,
      chTag: "",
      chTags: ["friends...", "strangers...", "crush...", "enemy..."],
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
.hero {
  background-image: linear-gradient(
    -180deg,
    #ffffff 0%,
    #eee6ec 25%,
    #f3e8f1 50%,
    #eee6ec 75%,
    #fff 100%
  );
}

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