import developers from "../module/module.js";
//post request
const createDeveloper = async(req,res) =>{
    const develop = new developers({
        first_name:req.body.first_name,
        second_name:req.body.second_name,
        gender:req.body.gender,
        email:req.body.email,
        specification:req.body.specification,
    })
    await develop.save();
    res.send(develop)
}

//Get request
const getAllDeveloper = async(req,res) =>{
    try{
    const retrieves = await developers.find();
    if(!retrieves){
        res.send('Not Found');
    }
    res.send(retrieves);
}catch{
    res.status(404);
}
}
//Getting single developer
const getADeveloper = async(req,res) =>{
    try{
    const _id = req.params.id;
    const retrieve = await developers.findOne({_id});
    if(!retrieve){
        res.send("Not found")
    }
    res.send(retrieve);
    }catch{
        res.status(404);
    }
}
//pactch/update request 
const updateDeveloper = async(req,res) =>{
    const _id = req.params.id;
    try{
        
            const _id = req.params.id;
            const body = req.body;
            const updateDeveloper = await developers.findOne({_id});
        if(body.first_name){
            updateDeveloper.first_name = body.first_name
        }
        if(body.second_name){
            updateDeveloper.second_name = body.second_name
        }
        if(body.gender){
        updateDeveloper.gender = body.gender;
        }
        if(body.email){
            updateDeveloper.email = body.email;
        }
        if(body.specification){
            updateDeveloper.specification = body.specification;
        }
        await updateDeveloper.save();
        res.send(updateDeveloper);
    }catch{
        res.status(404);
        res.send({ error: "Developer doesn't exist!" })
    }
}
//Delete request

const removeDeveloper = async (req, res) => {
    const id =req.params._id;
    try {
        await developers.deleteOne(id)
        res.send("Developer removed !!")
    } catch {
        res.status(404)
        res.send({ error: "developer doesn't exist!" })
    }
}
export default {
    createDeveloper,
    getAllDeveloper,
    getADeveloper,
    updateDeveloper,
    removeDeveloper
}