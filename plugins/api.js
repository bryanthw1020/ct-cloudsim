import authApi from '@/api/auth';
import simApi from '@/api/sim';

export default (ctx, inject) => {
    const auth = authApi(ctx.$axios);
    const sim = simApi(ctx.$axios);

    const api = {
        auth,
        sim
    };

    inject('api', api);
}