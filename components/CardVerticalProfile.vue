<template>
  <div class="card max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
    <img
      class="w-40 h-w-40 mt-8 mx-auto rounded-xl"
      src="/profile-photo.jpg"
      alt="Card image"
    />
    <div class="p-8">
      <div
        class="uppercase tracking-wide text-sm text-violet-600 font-semibold"
      >
        Profile
      </div>
      <div class="mt-2 text-gray-500">
        <table class="table-auto">
          <tbody>
            <tr>
              <th>Name</th>
              <td>Asrofil Fachrul Riidlo</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>College Student</td>
            </tr>
            <tr>
              <th>Skills</th>
              <td>Go, Node.js, Linux, AWS, GCP, Figma</td>
            </tr>
            <tr>
              <th>Hometown</th>
              <td>Cikarang. West Java</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card {
  cursor: default;
}
table * {
  text-align: left;
}
td {
  padding-inline-start: 1rem;
}
</style>