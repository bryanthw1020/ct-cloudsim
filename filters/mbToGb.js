export default value => {
    if (!value) return "0 GB";

    return (value / 1024).toFixed(2) + " GB";
}