<template>
  <CustomContainer>
    <section class="mt-12" id="about" style="min-height: max(100vh, 600px)">
      <div class="flex items-center flex-col">
        <h1
          class="text-2xl md:text-3xl lg:text-4xl font-semibold section-title transition-all duration-500"
          style="line-height: 2"
        >
          WHAT IS WHISPER.IO
        </h1>
        <p
          class="my-10 font-semibold text-lg md:text-xl xl:text-2xl transition-all duration-500"
        >
          The one-stop app to deliver
          <span class="text-violet-700 font-bold">secured quick message</span>
          to anyone!
        </p>
        <div
          class="cards flex flex-wrap gap-8 mx-auto justify-center items-center max-w-4xl"
        >
          <CardCustomDimmed
            v-for="(content, i) in cardsContent"
            :key="i"
            :imageUrl="content.url"
            :cardTitle="content.title"
            :cardBody="content.body"
            :class="'w-full h-fit md:h-48 lg:h-44 md:w-64 lg:w-80 2xl:w-full'"
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
          body: "Much easy as tap and type, then go nap or hide. I ain't gonna call the cops tho",
        },
        {
          url: "https://img.icons8.com/ios/50/925fe2/coins--v1.png",
          title: "free",
          body: "We are not capitalist, lowercasist or uppercasist! WE ARE psst... we are whisper(ist)",
        },
        {
          url: "https://img.icons8.com/ios/50/925fe2/lock-2.png",
          title: "secure",
          body: "We've to working on computer for 12 hours a day just to stop you cry for leaked data",
        },
      ],
    };
  },
};
</script>