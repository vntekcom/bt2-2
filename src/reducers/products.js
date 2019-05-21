let initialState = [
    {
        id: 1,
        name: 'Oppo R1',
        image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
        description: 'Sản phẩm của china',
        price: 450,
        invetory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 9',
        image: 'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
        description: 'Sản phẩm của Hàn Quốc',
        price: 200,
        invetory: 15,
        rating: 5
    }, {
        id: 3,
        name: 'Iphone XS',
        image: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782',
        description: 'Sản phẩm của US',
        price: 600,
        invetory: 20,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
          return [...state];
      }
};

export default products;