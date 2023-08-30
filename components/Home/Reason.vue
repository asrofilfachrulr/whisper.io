<template>
  <CustomContainer>
    <section
      class="mt-20 xl:mt-0"
      id="reason"
      style="min-height: max(100vh, 600px)"
    >
      <div class="flex items-center flex-col">
        <h1
          class="text-2xl md:text-3xl lg:text-4xl font-semibold section-title transition-all duration-500"
          style="line-height: 2"
        >
          WHY DO YOU NEED IT
        </h1>
        <p
          class="my-10 font-semibold text-lg md:text-xl xl:text-2xl transition-all duration-500"
        >
          The one-stop app to have
          <span class="text-violet-700 font-semibold">quick message</span> to
          anyone nearby or in different planet!
        </p>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto"
      >
        <CardPlain
          v-for="(item, index) in cardContents"
          :key="index"
          :item="item"
        ></CardPlain>
      </div>
    </section>
  </CustomContainer>
</template>

<script>
export default {
  data: function () {
    return {
      cardContents: [
        {
          title: "You are coward",
          description: "It is okay to be coward, dont deny our weaknesess",
        },
        {
          title: "You are lonely",
          description: "Communicating with someone is cure of loneliness",
        },
        {
          title: "The message is super secret",
          description: "Our platform is super secure and maintain anonymousity",
        },
      ],
    };
  },
};
</script>