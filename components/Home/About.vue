<template>
  <CustomContainer>
    <section class="mt-12" id="about" style="min-height: max(100vh, 600px)">
      <div class="flex items-center flex-col">
        <h1
          class="sm:text-xl md:text-2xl lg:text:3xl font-semibold section-title mb-6"
          style="line-height: 2"
        >
          WHAT IS THIS
        </h1>
        <p class="mb-8 font-semibold">
          The one-stop app to have
          <span class="text-violet-700 font-semibold">quick message</span> to
          anyone nearby or in different planet!
        </p>
        <div
          class="cards flex flex-wrap gap-8 mx-auto justify-center items-center max-w-4xl"
        >
          <Card
            v-for="(content, i) in cardsContent"
            :key="i"
            :imageUrl="content.url"
            :cardTitle="content.title"
            :cardBody="content.body"
          />
        </div>
      </div>
    </section>
  </CustomContainer>
</template>

<script>
export default {
  data: function () {
    return {
      cardsContent: [
        {
          url: "https://img.icons8.com/ios/50/925fe2/anonymous-mask.png",
          title: "privacy",
          body: "Breeze like winds.. say anything then go away seamlessly (still, mind your responisibility!)",
        },
        {
          url: "https://img.icons8.com/external-line-lima-studio/50/925fe2/external-toy-international-children-day-line-lima-studio-3.png",
          title: "ease",
          body: "Tap tap tap, type type type, yes yes yes! never been easy as it was!",
        },
        {
          url: "https://img.icons8.com/ios/50/925fe2/coins--v1.png",
          title: "free",
          body: "We are not capitalist, lowerelist or cursivist! WE ARE psst... we are whisper.io",
        },
        {
          url: "https://img.icons8.com/ios/50/925fe2/lock-2.png",
          title: "secure",
          body: "We have some cool dudes working on computer for 12 hours a day (not including their voluntarily night shift) to prevent you cry for losing data",
        },
      ],
    };
  },
};
</script>