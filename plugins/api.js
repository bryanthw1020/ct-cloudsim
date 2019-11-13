import simApi from '@/api/sim';

export default (ctx, inject) => {
    const sim = simApi(ctx.$axios);

    const api = {
        sim
    };

    inject('api', api);
}