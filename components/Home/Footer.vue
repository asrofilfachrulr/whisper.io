<template>
  <div id="profile" class="w-100 pt-8 pb-16">
    <div class="flex items-center flex-col">
      <h1
        class="sm:text-xl md:text-2xl lg:text:3xl font-semibold section-title mb-6"
        style="line-height: 2"
      >
        THE ANSWER IS ME!
      </h1>
      <p class="mb-8">
        I'm making this app to create for my very own first
        <span class="text-violet-700 font-semibold">web app.</span>
        Here some introduction of me:
      </p>
      <CardVerticalProfile />
    </div>
  </div>
</template>

<style scoped>
#profile {
  background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);
  min-height: max(60vh, 400px);
}
</style>