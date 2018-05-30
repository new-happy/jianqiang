import React,{ Component} from 'react'
import styled from 'styled-components'
import svg from '../images/星星.svg'
import svg1 from '../images/心.svg'
import svg2 from '../images/标签.svg'

 class Sidebar extends Component {
  render () {
   return (
    <Wrap>
           <div>
                <img src={svg} alt="" />
                <a href="#">我的收藏</a>
            </div>
           <div>
               <img src={svg1} alt="" />
               <a href="#">点赞梦想</a>
           </div>
           <div>
              <img src={svg2} alt="" />
               <a href="#">价格标签</a>
           </div>
    </Wrap>
    )
 }
}
export default Sidebar

const Wrap = styled.div`
    width:18%;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding:36px 0;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 0px rgba(0,0,0,0.2);
    div {
        padding:0 0 67px 25px;
        display:flex;
    }
    a { 
        padding-left:15px;
        margin-top: 5px;
        font-size:14px;
        font-family:PingFangSC-Medium;
        color:rgba(78,76,76,1);
        line-height:20px;
        
    }
    img { 
        width:30px;
    }
`