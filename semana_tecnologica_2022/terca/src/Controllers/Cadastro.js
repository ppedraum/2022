var userArray = [];

module.exports = {

    async cadastrar(req, res){
        const {nome, idade} = req.body;
        if(!nome){
            res.status(400).json({errmsg: 'Informe seu Nome!'});
            return;
        }
        if(!idade){
            res.status(400).json({errmsg: 'Informe sua idade!'});
            return;
        }else{
            if(Number(idade) < 0){
                res.status(400).json({errmsg: 'A idade não pode ser menor que 0!'});
                return;
            }
        }
        userArray.push({nome: nome, idade: idade, id : userArray.length});
        res.status(200).json(`Salvo! id: ${userArray.length-1}`);
        console.log(userArray);
    },
    async recuperar(req, res){
        res.status(200).json(userArray);
    },
    async recuperarPorId(req, res){
        
        const {id} = req.query;
        if(!id || Number(id)<0){
            res.status(400).json({msg:'informe o id!'});
            return;
        }else if(userArray.length<id){
            res.status(200).json({msg: 'item não encontrado!'});
            return;
        }
        console.log('Entrou');
        res.status(200).json(userArray[id]);
    },
    async deletar(req, res){
        const id = req.query;
        userArray.splice(id, 1);
        res.status(200).json({msg: 'deletado!', array: userArray});
    }
};