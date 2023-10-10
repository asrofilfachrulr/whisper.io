<template>
  <dialog id="new_contact_modal" class="modal">
    <div
      class="modal-box w-11/12 md:w-6/12 lg:w-5/12 max-w-lg max-h-[350px] overflow-hidden flex flex-col gap-5 min-h-[350px]"
    >
      <h3 class="font-bold text-lg">New Contact</h3>
      <p class="py-4">Search by id or username</p>
      <div class="flex gap-4 relative">
        <input id="identifier-searchbox" type="text" v-model="identifier" class="input w-3/4" placeholder="@john_doe, johndoe"/>
        <ButtonSolid
          @click="handleSearch"
          :class="['w-1/4 btn-accent', isLoading ? 'btn-disabled' : '', identifier.match(/\S/g) ? '' : 'btn-disabled']"
        >
          <div class="flex w-full justify-center items-center gap-2">
            <span v-if="isLoading" class="loading loading-spinner loading-sm"></span>
            <span>Search</span>
          </div></ButtonSolid
        >
        <span
          class="absolute text-sm font-medium text-red-700"
          v-if="error.status"
          style="bottom: -1.75rem; left: 1rem"
          >{{ error.msg }}</span
        >
        <span
          class="absolute text-sm font-medium text-green-700"
          v-if="isFounded"
          style="bottom: -1.75rem; left: 1rem"
          >User found!</span
        >
      </div>
      <div class="modal-action">
        <form method="dialog" class="w-full">
          <!-- if there is a button, it will close the modal -->
          <ButtonSolid
            @click="handleAddContact"
            :class="['btn btn-primary w-full', isFounded ? '' : 'btn-disabled']"
          >
            Add Contact
          </ButtonSolid>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button @click="resetAll"></button>
    </form>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      isFounded: false,
      error: {
        status: false,
        msg: ''
      },
      identifier: "",
      isLoading: false,
      retrievedContact: {},
    };
  },
  methods: {
    async handleSearch() {
      this.reset();
      this.identifier = this.identifier.match(/\S/g).join("");

      if(this.$store.getters["contacts/contactById"](this.identifier)){
        this.error = {status: true, msg: 'user already exists on contact list!'}
        return
      }

      if(this.identifier.includes('@') && (this.identifier === this.$auth.user.id)){
        this.error = {status: true, msg: 'cannot add yourself as friend, find somebody else!'}
        return
      }
      
      let response;      
      
      try {
        this.isLoading = true;
        
        // delaying action
        await new Promise(resolve => setTimeout(resolve, 1200))

        response = await this.$axios.get(
          `user/public/${this.identifier}`
        );
        
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
        this.error = {status: true, msg: 'User not found!'}
        return
      }
      this.isFounded = true;

      const user = response.data.user
      this.retrievedContact = {
        id: user.id,
        full_name: user.full_name,
        username: user.username,
      }
    },
    handleAddContact() {
      this.$store.dispatch("contacts/add", this.retrievedContact);
      this.resetAll();
    },
    reset() {
      this.isFounded = false;
      this.error = {status: false, msg: ''};
      this.isLoading = false;
      this.retrievedContact= {};
    },
    resetAll(){
      this.identifier = "";
      this.reset();
    }
  },
};
</script>

<style scoped>
::-webkit-input-placeholder {
  font-size: 0.85em;
}
::-moz-placeholder {
  font-size: 0.85em;
}
</style>