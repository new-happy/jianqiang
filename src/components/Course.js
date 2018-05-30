import React,{ Component} from 'react'
import styled from 'styled-components'
import imgSrc from '../images/1111.jpg'
import imgSrc1 from '../images/aa.png'
import svg from '../images/fenlei.svg'
import Sidebar from './Sidebar'

 class Course extends Component {
     state = {
         navs:['全部','精选','新课程',''],
         courses:[
             {
                 id:1,
                 name:'讲师：happypeter',
                 pic:imgSrc,
                 img:imgSrc1,
                 title:'如何防治近视？',
                 price:'24元'
             },
             {
                 id: 2,
                 name: '讲师：happypeter',
                 pic: imgSrc,
                 img: imgSrc1,
                 title:'如何防治近视？',
                 price: '免费'
             },
             {
                 id: 3,
                 name: '讲师：happypeter',
                 pic: imgSrc,
                 img: imgSrc1,
                 title:'如何防治近视？',
                 price: '24元'
             },
             {
                 id: 4,
                 name: '讲师：happypeter',
                 pic: imgSrc,
                 img: imgSrc1,
                 title:'如何防治近视？',
                 price: '24元'
             },
             {
                 id: 5,
                 name: '讲师：happypeter',
                 pic: imgSrc,
                 img: imgSrc1,
                 title:'如何防治近视？',
                 price: '24元'
             }
         ],
         num:0
     }
     handleClick = (i) => {
        this.setState({
            num:i
        })
     }
  render () {
      const { navs,courses } = this.state
      const nav = navs.map( (t,i) => {
          return <button className={`${this.state.num === i && 'active'}`}
          key={i} onClick={()=>this.handleClick(i)} >
          {t}</button>
      })
      const course = courses.map( t => {
          return <Cards key={t.id}>
            <Img><img src={t.pic} alt="1"/></Img>
            <Card>
                <Carda>
                <img src={t.img} alt="2"/>
                    <div>
                        <h5>{t.title}</h5>
                        <p>{t.name}</p>
                    </div>
                </Carda>
                  <Button style={{ backgroundColor: t.price === '免费' ? '#32B830' :'#D82943' }}  >{t.price}</Button>
            </Card>
          </Cards>
      })
   return (
    <Wrap>
         <Sidebar />
         <Nav>{nav}</Nav>
         <Courses>{course}</Courses>
    </Wrap>
    )
 }
}
export default Course

const Wrap = styled.div`
    position: relative;
    padding-top:120px;
    background:rgba(247,247,247,1);
`

const Nav = styled.div`
    width:64%;
    margin:0 auto;
    padding-left:92px;
    display: flex;
    justify-content: space-between;
    button {
        width:20%;
        line-height:53px;
        color:rgba(78,76,76,1);
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 0px rgba(0,0,0,0.07);
        border-radius:13px;
        background-images: url('../images/fenlei.svg');
    } 
    .active {
        background:rgba(0,202,183,1);
    }
`
const Courses = styled.div`
    width:73%;
    margin-left:20%;
    display: flex;
    flex-wrap: wrap;
`
const Cards = styled.div`
    width:calc(50% - 165px);
    margin:58px 116px 82px 49px;
    img{
        display:block;
    }
`
const Img = styled.div`
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 0px rgba(0,0,0,0.2);
    padding:22px 22px 42px 22px;
    margin-bottom:25px;
    img{
        width:100%
        border-radius:10px;
    }
`
const Card = styled.div`
    display:flex;
    justify-content: space-between;
    img{
        width:40px;
        height:40px;
    }
    h5 {
        font-size:20px;
        font-family:PingFangSC-Regular;
        color:rgba(78,76,76,1);
        line-height:28px;
    }
    p {
        font-size:14px;
        font-family:PingFangSC-Regular;
        color:rgba(78,76,76,0.7);
        line-height:20px
    }
`
const Carda = styled.div`
    display:flex;
`
const Button = styled.button`
    width:90px;
    line-height:45px;
    border-radius:5px;
}
`