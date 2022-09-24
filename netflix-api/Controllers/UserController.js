const userSchema = require('../Models/UserModel.js');

module.exports.addToLikedMovies = async (req,res) => {
    try {
        const { email, data } = req.body;
        const user = await userSchema.findOne({ email });

        if (user){
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({id}) => (id === data.id));

            if (!movieAlreadyLiked){
                await userSchema.findByIdAndUpdate(
                    user.id,
                    {
                        likedMovies: [ ...user.likedMovies, data ],
                    },
                    {
                        new: true,
                    }
                );
            }else {
                return res.json({ message: 'Movie already added to the liked list' });
            }
        }else {
            await userSchema.create({
                email,
                likedMovies: [data]
            });
        }
        return res.json({ message: 'Movie added successfully' });
    } catch (err) {
        return res.status(400).json({ message: 'error adding movies' });
    }
};

module.exports.getLikedMovies = async (req,res) => {
    try {
        const { email } = req.params;
        const user = await userSchema.findOne({ email });

        if (user) {
            res.status(200).json({ message: 'success', movies: user.likedMovies });
        } else {
            return res.json({ message: 'user with given email not found' });
        }
    } catch (err) {
        return res.status(400).json({ message: 'error fetching movies' });
    }
};

module.exports.removeFromLikedMovies = async (req,res) => {
    try {
        const { email, movieId } = req.body;
        const user = await userSchema.findOne({ email });

        if (user){
            const { likedMovies } = user;
            const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);

            if (!movieIndex){
                return res.status(400).send({ message: 'Movie not found' });
            }
            likedMovies.splice(movieIndex, 1);
                await userSchema.findByIdAndUpdate(
                    user.id,
                    {
                        likedMovies,
                    },
                    {
                        new: true,
                    }
                );
                return res.status(200).json({ message: 'successfully deleted movies from liked list', movies: likedMovies });
        }
    } catch (err){
        return res.status(400).json({ message: 'error deleting movies' });
    }
}