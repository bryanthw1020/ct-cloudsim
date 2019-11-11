import authApi from '@/api/auth';
import dropdownApi from '@/api/dropdown';

export default (ctx, inject) => {
    const auth = authApi(ctx.$axios);
    const dropdown = dropdownApi(ctx.$axios);

    const api = {
        auth,
        dropdown
    };

    inject('api', api);
}