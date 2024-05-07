'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products",[{
      name:"Samsung S22",
      price:"700",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Microondas",
      price:"50",
      createdAt: new Date(),
      updatedAt: new Date()


    },
    {
      name:"Horno",
      price:"100",
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name:"Sofa",
      price:"200",
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name:"Barra de sonido",
      price:"150",
      createdAt: new Date(),
      updatedAt: new Date()


    }
])
    
},
  
async down (queryInterface, Sequelize) {
   
  }
};
