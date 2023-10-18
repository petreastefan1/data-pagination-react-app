import React from 'react';
import { Pagination } from 'antd';

function Footer({pages}){

    // function handleClick(event){
    // let obj = event.target;
    // obj.classList.toggle("active")

return (

    <Pagination defaultCurrent={1} total={100} />


)
}

export default Footer;