export const state = () => ({
  items: [
    {
      id: '@id_dummy01',
      username: 'anya',
      full_name: 'Anya Sebastian',
    },
    {
      id: '@id_dummy02',
      username: 'fachri',
      full_name: 'Joao Fachri',
    },
    {
      id: '@id_dummy03',
      username: 'john',
      full_name: 'John Lao',
    },
    {
      id: '@id_dummy04',
      username: 'doe',
      full_name: 'Doe Mama',
    },
    {
      id: '@id_dummy05',
      username: 'budi',
      full_name: 'Budi Charles',
    },
    {
      id: '@id_dummy06',
      username: 'andi',
      full_name: 'Andi Coal',
    },
    {
      id: '@id_dummy07',
      username: 'seto',
      full_name: 'Seto de Francis',
    },
    {
      id: '@id_dummy08',
      username: 'messi',
      full_name: 'Messi la Rodriguez',
    },
    {
      id: '@id_dummy09',
      username: 'ronaldo',
      full_name: 'Ronaldo de Julia',
    },
  ],
});


export const getters = {
  items: (state) => state.items
}
