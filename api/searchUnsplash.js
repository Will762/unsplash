module.exports = async (req, res) => {
    const endpoint = "https://api.unsplash.com/search/photos/";
    const response = await fetch(`${endpoint}?client_id=${process.env.API_KEY}&query=${req.query.query}&page=${req.query.page}&per_page${req.query.per_page}`);
    const data = await response.json();
    res.json({...data, ...req.query});
};
