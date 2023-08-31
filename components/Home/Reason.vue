<template>
  <CustomContainer>
    <section
      class="mt-20 xl:mt-0"
      id="reason"
      style="min-height: max(60vh, 600px)"
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
          Here some facts you can't get away with it
        </p>
      </div>
      <div class="max-w-2xl mx-auto">
        <Accordion
          v-for="(item, i) in cardContents"
          :key="i"
          :title="item.title"
          :content="item.description"
        />
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
          title: "You are a coward and You are lonely",
          description:
            "It is okay to be chicken, dont deny (y)our weaknesess.. but hear me out, don't get fried!. Communicating with someone is cure of loneliness and YOU SHOULD cure that! Don't being proud instead..",
        },
        {
          title: "We actually don't care who you are",
          description:
            "We're not collecting user data (nothing interesting about you tho), our app are completely free and doesn't make any money! yeah, im kinda lowkey broke",
        },
        {
          title: "Your message are being kept super secret",
          description:
            "Our platform is super secure and super maintain anonymousity only for super you with your super insecurities",
        },
      ],
    };
  },
};
</script>