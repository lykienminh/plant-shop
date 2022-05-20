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
        description: "Cây huyết dụ xanh là cây thân thảo, mọc theo bụi, sinh sản nhanh. Thân cây mọc thẳng, vỏ sần sùi, thân mảnh. Cây trồng làm cảnh trong nhà thường chỉ cao từ 50-100cm, nhưng nếu sống trong môi trường hoang dã có thể lên đến 3m.",
        type: "Cây trồng trong nhà",
        price: 100000,
        image: item1_image,
        score: 3,
        xuatxu: "Việt Nam",
        quantity: 0
    },
    {
        id: 2,
        name: "Cây trầu bà Nam Mỹ",
        description: "Cây Trầu bà Nam Mỹ hay còn được biết đến với tên thường gọi là cây Monstera, cây Trầu bà lá xẻ, cây Ráy lá xẻ Nam Mỹ,… Tên khoa học của loài cây này là Monstera Deliciosa, có nguồn gốc xuất xứ từ vùng Nam Mỹ, ưa thích sống ở những nơi có khí hậu nhiệt đới hoặc gần xích đạo. Cây Monstera là cây rất có thể leo bám vào thân cây chủ để sinh trưởng, trong môi trường thiên nhiên với điều kiện phát triển tốt thì chúng rất có thể leo cao tới 20m, tán lá vô cùng to và rậm rạp. Lá của cây Trầu bà Nam Mỹ xẻ sâu, lá rất có thể dài từ 50cm đến 1m, bề mặt lá có tương đối nhiều lỗ nhỏ rất dễ dàng nhận ra.",
        type: "Cây trồng trong nhà",
        price: 120000,
        image: item2_image,
        score: 4,
        xuatxu: "Nam Mỹ",
        quantity: 0
    },
    {
        id: 3,
        name: "Cây kim tiền",
        description: "Cây kim tiền là cây gì? Cây kim tiền hay còn gọi là cây kim phát tài có tên khoa học là Zamioculcas zamiifolia có nguồn gốc từ Trung Phi, nơi khí hậu khắc nghiệt nhất.",
        type: "Cây trồng trong nhà",
        price: 110000,
        image: item3_image,
        score: 4,
        xuatxu: "Việt Nam",
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
        xuatxu: "Nam Phi",
        quantity: 0
    },
    {
        id: 5,
        name: "Cây lan đô la",
        description: "Cây đô la có dạng thân leo, mọc thành bụi, trong điều kiện thích hợp có thể dài tới 5m. Thân và nhánh mỏng, bóng mượt, bám chắc vào các bề mặt. Khi không có mặt bám, thân mềm sẽ rũ xuống thành sợi dài như một tấm rèm rất đẹp mắt. Lá cây mọc dọc thân theo từng đốt cách nhau 3 – 5cm, mỗi đốt sẽ có 2 lá mọc đối. Lá màu xanh thẫm, hình tròn hoặc bầu dục, hơi dày và mọng nước.",
        type: "Cây dây leo",
        price: 130000,
        image: item5_image,
        score: 3,
        xuatxu: "Việt Nam",
        quantity: 0
    },
    {
        id: 6,
        name: "Cây xương rồng",
        description: "xương rồng có nguồn gốc từ vùng cao nguyên của Ấn Độ. Ngày nay, cây xuất hiện ở hầu khắp nơi, kể cả các vùng đất nóng bức như sa mạc, nhiệt đới nóng ẩm ở châu Mỹ, châu Phi, châu Á… Nhờ có phần thân mọng nước mà chúng có thể phát triển và sinh trưởng được ở cả những vùng đất đai khô cằn, nhiệt độ cao. Tại Việt Nam, thực vật này được trồng rộng rải. Cây thường được gieo trồng bằng cành. Ra hoa vào mùa xuân, thường từ tháng 3-4 hằng năm.",
        type: "Cây mọng nước",
        price: 70000,
        image: item6_image,
        score: 4,
        xuatxu: "Australia",
        quantity: 0
    },
    {
        id: 7,
        name: "Cây môn hồng",
        description: "Cây có tên khoa học là Anthurium Andraeanum. Ở nhiều nơi cây còn được gọi với những cái tên khác nhau như cây buồm đỏ, cây vĩ hoa tròn, cây hồng môn đỏ. Có nguồn gốc từ Colombia và Ecuador, cây được đem đến trồng tại rất nhiều quốc gia trên thế giới và có cả Việt Nam. Giá cây khá rẻ chỉ từ vài trăm nghìn đồng tùy loại.",
        type: "Cây hoa",
        price: 200000,
        image: item7_image,
        score: 3,
        xuatxu: "Việt Nam",
        quantity: 0
    },
    {
        id: 8,
        name: "Cây trúc quân tử",
        description: "Cây trúc quân tử có tên khoa học là Bambusa multiplex, thuộc họ Poaceae Poaceae, tên gọi khác là tre hàng rào, thuộc họ trúc đào và có nguồn gốc từ Trung Quốc, Nepal. Chiều cao của trúc quân tử từ 1.5 đến 3 mét, tốc độ sinh trưởng trung bình và thuộc dạng mọc thưa theo bụi. Thân cây có màu xanh vàng, thân nhỏ có nhiều đốt nhỏ giống cây tre.",
        type: "Cây trồng ngoài trời",
        price: 210000,
        image: item8_image,
        score: 5,
        xuatxu: "Trung Quốc",
        quantity: 0
    },
]

export default listItems