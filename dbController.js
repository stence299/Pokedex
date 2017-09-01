module.exports = {
    getOne: (req,res,next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
        dbInstance.get_pokemon()
            .then( () => res.status(200).send(pokemon) )
            .catch( () => res.status(500).send() )
    },
}