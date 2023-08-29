<template>
  <CustomContainer>
    <section
      class="mt-20 xl:mt-0"
      id="reason"
      style="min-height: max(100vh, 600px)"
    >
      <div class="flex items-center flex-col">
        <h1
          class="sm:text-xl md:text-2xl lg:text:3xl font-semibold section-title mb-6"
          style="line-height: 2"
        >
          WHY DO YOU NEED IT
        </h1>
        <p class="mb-8">
          The one-stop app to have
          <span class="text-violet-700 font-semibold">quick message</span> to
          anyone nearby or in different planet!
        </p>
      </div>
      <card-grid :gridItems="gridItems"></card-grid>
    </section>
  </CustomContainer>
</template>

<script>
export default {
  data: function () {
    return {
      gridItems: [
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