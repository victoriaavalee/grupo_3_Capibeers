const path = require("path")
const fs = require("fs")
const users = require('../data/users.json')

const User = {
    fileName:'../data/users.json',
    getData: function(){
        return users;
    },
    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();//creo q se comenta
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    findAll: function(){
        return this.getData()
    },
    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findByField: function(field, text){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound;
    },
    create: function (userData){
        let allUsers = this.findAll();
        let newUser={
            id:this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync('./src/data/users.json', JSON.stringify(allUsers, null, 4));
        return newUser;
    },
    delete: function(id){
        let allUsers= this.findAll();
        let finalUsers=allUsers.find(oneUser => oneUser.id !==id);
        fs.writeFileSync(__dirname,"../data/users.json", JSON.stringify(finalUsers, null, 4));
        return true
    }
}
module.exports = User;
