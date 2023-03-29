export const selectUserPets = ({ user }) => user.items;
export const selectUser = ({ state }) => state.user;
export const selectIsLoading = ({ user }) => user.isLoading;
