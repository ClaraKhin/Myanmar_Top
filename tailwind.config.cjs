module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1F4D3A",
                accent: "#C9A227",
                brandbg: "#FAF9F6",
            },
            borderRadius: {
                '3xl': '1.5rem'
            }
        },
    },
    plugins: [],
};
