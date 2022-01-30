module.exports = {
    paginate: ({ page, per_page, total }) => {
        const offset = (page - 1) * per_page;
        const from = offset + 1;
        const to = Math.min((offset + per_page), total);
        const last_page = Math.ceil(total / per_page)

        return {
            offset,
            from,
            to,
            last_page,
        }
    }
}