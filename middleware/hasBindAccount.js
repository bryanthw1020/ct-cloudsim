export default function (context) {
    if (!context.store.getters["getAccounts"].length) {
        context.redirect('/activation');
    }
}