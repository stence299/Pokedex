module.exports = {
    getOne: (req,res,next) => {
        const dbInstance = req.app.get("db");

        dbInstance.get_pokemon()
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
    },
}