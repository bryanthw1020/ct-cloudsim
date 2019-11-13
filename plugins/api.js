import ctApi from '@/api/ct';
import simApi from '@/api/sim';

export default (ctx, inject) => {
    const ct = ctApi(ctx.$axios);
    const sim = simApi(ctx.$axios);

    const api = {
        ct,
        sim
    };

    inject('api', api);
}