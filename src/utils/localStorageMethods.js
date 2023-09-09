const localStorageMethods = {
    getJwt: () => localStorage.getItem("jwt") || null,
    setJwt: value => localStorage.setItem("jwt", value),
    clearJwt: () => localStorage.clear(),
};

export default localStorageMethods;
