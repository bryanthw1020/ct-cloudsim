export default function (context) {
    if (context.route.name !== 'authenticate' && !context.store.getters["getToken"]) {
        context.redirect('/authenticate');
    }
}