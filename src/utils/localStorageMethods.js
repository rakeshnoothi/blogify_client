const localStorageMethods = {
    getUser: () => localStorage.getItem("user") || null,
    setUser: value => localStorage.setItem("user", value),
    clearUser: () => localStorage.clear(),
};

export default localStorageMethods;
