import React,{ Component} from 'react'
import styled from 'styled-components'

 class Header extends Component {
  render () {
   return (
    <Wrap>
         <Text>
               <h1>青海省医院<br/>近视部</h1>
               <p>青海省医院近视部，未成年人视力健康保护计划</p>
         </Text>
         <div>
            <Button>创建课程</Button>
         </div>
    </Wrap>
    )
 }
}
export default Header

const Wrap = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 158px 248px 106px 133px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 0px rgba(0,0,0,0.2);
`
const Text = styled.div`
    h1 {
       border-left: 14px solid #00CAB7; 
       padding-left: 27px;
       font-size:44px;
       font-family:PingFangSC-Medium;
       color:rgba(78,76,76,1);
       line-height:62px;
    }
    p {
       font-size:24px;
       font-family:PingFangSC-Medium;
       color:rgba(78,76,76,0.7);
       line-height:33px;
       text-indent: 41px;
    }
`
const Button = styled.button`
    background:linear-gradient(180deg,rgba(0,179,214,1),rgba(0,206,177,1));
    box-shadow:0px 2px 0px rgba(0,0,0,0.5);
    border-radius:5px;
    padding:22px 71px;
    margin-top:86px;
`