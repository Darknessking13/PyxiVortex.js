const axios = require('axios');

class PyxiVortex {
    constructor(config = {}) {
        this.baseURL = 'https://pyxilab-pyxivortex.hf.space';
        this.config = {
            timeout: 30000,
            ...config
        };
    }

    async search({ query, type = 'images', limit = 10, page = 1 }) {
        try {
            const response = await axios({
                method: 'get',
                url: `${this.baseURL}/search`,
                params: {
                    query,
                    type,
                    limit,
                    page
                },
                timeout: this.config.timeout
            });

            return response.data;
        } catch (error) {
            throw new Error(`PyxiVortex API Error: ${error.message}`);
        }
    }

    async images(query, { limit = 10, page = 1 } = {}) {
        return this.search({ query, type: 'images', limit, page });
    }

    async news(query, { limit = 10, page = 1 } = {}) {
        return this.search({ query, type: 'news', limit, page });
    }

    async videos(query, { limit = 10, page = 1 } = {}) {
        return this.search({ query, type: 'videos', limit, page });
    }

    async text(query, { limit = 10, page = 1 } = {}) {
        return this.search({ query, type: 'text', limit, page });
    }
}

module.exports = PyxiVortex;
