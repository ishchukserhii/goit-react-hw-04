import axios from 'axios';

export const Api = async (search, page, perPage) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            query: search,
            client_id: "KUafA-j1bs6_l5WGI_2Pg2GqC_AOllf5Jl20QU1ncJc",
            page: page,
            per_page: perPage
        },
    });

    return response.data;
};