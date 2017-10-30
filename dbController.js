module.exports = {
    getAll: (req,res,next) => {
        const dbInstance = req.app.get("db");

        dbInstance.get_all_pokemon()
            .then( allpokemon => res.status(200).send(allpokemon) )
            .catch( () => res.status(500).send() )
    },
    getOne: (req,res,next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;

        dbInstance.get_one_pokemon([ params.id ])
            .then( pokemon => res.status(200).send(pokemon) )
            .catch( () => res.status(500).send() )
    },
}