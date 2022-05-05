import React, { Component } from 'react'
export const DataContext = React.createContext();
const item1_image = require('../../images/plant-item_1.jpg')
const item2_image = require('../../images/plant-item_2.jpg')
const item3_image = require('../../images/plant-item_3.jpg')
const item4_image = require('../../images/plant-item_4.jpg')
const item5_image = require('../../images/plant-item_5.jpg')
const item6_image = require('../../images/plant-item_6.jpg')
const item7_image = require('../../images/plant-item_7.jpg')
const item8_image = require('../../images/plant-item_8.jpg')

const listItems = [
    {
        id: 1,
        name: "Cây huyết dụ xanh",
        description: "Cây để trong nhà tạo cảm giác nhà có sáng hơn",
        type: "Cây trồng trong nhà",
        price: 100000,
        image: item1_image,
        score: 3,
        quantity: 0
    },
    {
        id: 2,
        name: "Cây trầu bà Nam Mỹ",
        description: "Cây để trong nhà giúp lọc khí",
        type: "Cây trồng trong nhà",
        price: 120000,
        image: item2_image,
        score: 4,
        quantity: 0
    },
    {
        id: 3,
        name: "Cây kim tiền",
        description: "Cây xuất xứ từ Brazil",
        type: "Cây trồng trong nhà",
        price: 110000,
        image: item3_image,
        score: 4,
        quantity: 0
    },
    {
        id: 4,
        name: "Cây natural",
        description: "Cây xuất xứ từ châu Phi",
        type: "Cây trồng trong nhà",
        price: 150000,
        image: item4_image,
        score: 1,
        quantity: 0
    },
    {
        id: 5,
        name: "Cây lan đô la",
        description: "Cây xuất xứ từ châu Phi",
        type: "Cây dây leo",
        price: 130000,
        image: item5_image,
        score: 3,
        quantity: 0
    },
    {
        id: 6,
        name: "Cây xương rồng",
        description: "Cây xuất xứ từ châu Phi",
        type: "Cây mọng nước",
        price: 70000,
        image: item6_image,
        score: 4,
        quantity: 0
    },
    {
        id: 7,
        name: "Cây môn hồng",
        description: "Cây xuất xứ từ châu Phi",
        type: "Cây hoa",
        price: 200000,
        image: item7_image,
        score: 3,
        quantity: 0
    },
    {
        id: 8,
        name: "Cây trúc quân tử",
        description: "Cây xuất xứ từ Trung Quốc",
        type: "Cây trồng ngoài trời",
        price: 210000,
        image: item8_image,
        score: 5,
        quantity: 0
    },
]

export default listItems