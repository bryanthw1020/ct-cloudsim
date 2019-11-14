import mbToGb from "./mbToGb";

export default {
    install(Vue) {
        Vue.filter("mbToGb", mbToGb);
    }
}