module.exports = {
    getOne: (req,res,next) => {
        const dbInstance = req.app.get("db");

        dbInstance.read_question()
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
    },
}