const item1_image = require('../../images/plant-item_1.jpg')
const item2_image = require('../../images/plant-item_2.jpg')
const item3_image = require('../../images/plant-item_3.jpg')
const item4_image = require('../../images/plant-item_4.jpg')

const listItems = [
    {
        id: 1,
        name:"Cây warm light",
        description:"Cây để trong nhà tạo cảm giác nhà có sáng hơn",
        type: "Cây trồng trong nhà",
        price: 100000,
        image: item1_image,
    },
    {
        id: 2,
        name:"Cây minnie penny",
        description:"Cây để trong nhà giúp lọc khí",
        type: "Cây trồng trong phòng khách",
        price: 120000,
        image: item2_image,
    },
    {
        id: 3,
        name:"Cây Brazil Window",
        description:"Cây để xuất xứ từ Brazil",
        type: "Cây trồng trong nhà",
        price: 110000,
        image: item3_image,
    },
    {
        id: 4,
        name:"Cây natural",
        description:"Cây để xuất xứ từ châu Phi",
        type: "Cây trồng trong phòng khách",
        price: 150000,
        image: item4_image,
    },
]

export default listItems