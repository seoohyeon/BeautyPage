import React from "react";
import styled from 'styled-components';

const ItemBlock = styled.div`
 float: left; margin:5px; margin-top:30px;
 padding:10px;
 width:290px; height:300px;
 border:1px solid #ccc;
 box-sizing:border-box;
 border-radius:5px;
`;

function BestItem(){
    const items = [    
        {
            id: 1,
            src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
            maintitle: '설화수1',
            subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
            price: '15000 만원',
            review:'★★★'
        },
        {
          id: 2,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수2',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 3,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수3',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 4,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수4',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 5,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수5',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 6,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수6',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 7,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수7',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 8,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수8',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 9,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수9',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 10,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수10',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 11,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수11',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 12,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수12',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        }
      
      ];  
    return(
        <>
        <ItemBlock>
            <img src={items[0].src} alt={items[0].maintitle} width="50%" />
            <h3>{items[0].maintitle} </h3>
            <p>{items[0].subtitle}</p>
            <p>{items[0].price}</p>
            <p>{items[0].review}</p>
            <div><span>사은품</span><span>기프트가드</span></div>
        </ItemBlock>
       
        </>
    )
}

export  default BestItem;