import React from 'react'
import './Category.css'
import styled from 'styled-components';
const Categoryarea=styled.div`
background-color:#f7faf7;
padding: 200px 0px 70px 0px;
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* margin: 50px; */

`;
const Card =styled.div`
display: flex;
justify-content: center;
align-items: center;
/* width: 800px; */
margin: 35px;
flex-wrap: wrap;
gap: 15px;
`;
let arr=[{img:<i className="fa-solid fa-gear"></i>,desc:'Technical Support',color:'#c63',bgcolor:'#f5e0d6'},
{img:<i class="fa-solid fa-layer-group"></i>,desc:'Business Development',color:'#7264e5',bgcolor:'#dad7f2'},
{img:<i class="fa-solid fa-house-chimney-window"></i>,desc:'Real Estate Business',color:'#50cc59',bgcolor:'#dbf5de'},
{img:<i class="fa-solid fa-magnifying-glass-chart"></i>,desc:'Share Market Analysis',color:'#daa91f',bgcolor:'#ece5d1'},
{img:<i class="fa-solid fa-sun"></i>,desc:'Weather & Enviroment',color:'#1e27f9',bgcolor:'#ccceff'},
{img:<i class="fa-solid fa-hand-holding-dollar"></i>,desc:'Finance & Banking Service',color:'#726f6f',bgcolor:'#ccc'},
{img:<i class="fa-solid fa-circle-nodes"></i>,desc:'IT & Networking Services',color:'#1783b6',bgcolor:'#ccf1ff'},
{img:<i class="fa-solid fa-utensils"></i>,desc:'Restaurant Services',color:'#c455bf',bgcolor:'#fccffa'},
{img:<i class="fa-solid fa-fire-flame-curved"></i>,desc:'Defence & Fire Service',color:'#c66',bgcolor:'#f5cccc'},
{img:<i class="fa-solid fa-truck-moving"></i>,desc:'Home Delivery Services',color:'#116e18',bgcolor:'#d0e6d2'}]
const Category = () => {
 
  return (
    <Categoryarea>
        <Container>
            <h2 className='h-class'>Choose Your Desire Category</h2>
            
            <Card>
           { 
          
           arr.map((data)=>(
             
              <div className="card" >
                <div className='card-imgcard' style={{color:data.color,backgroundColor:data.bgcolor}}>
                  <div className='card-imgcat'>
                  {data.img}
                  </div>
                </div>
                
              <div className="card-body">
              <a className="card-text">{data.desc}</a>
              </div>
              </div>
           )
            )    
           }
      </Card>
        </Container>
    </Categoryarea>
  )
}

export default Category