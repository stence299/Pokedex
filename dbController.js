module.exports = {
    getAll: (req,res,next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
        dbInstance.get_all_pokemon()
            .then( () => res.status(200).send(pokemon) )
            .catch( () => res.status(500).send() )
    },
    getOne: (req,res,next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
        dbInstance.get_one_pokemon()
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
    },
}