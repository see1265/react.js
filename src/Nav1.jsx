import { React } from 'react';
const Nsm=()=>{
    return(
        <nav>
            <div>
                <ul>
                    <li><a href="">Brand</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Products</a></li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder='search......' />
                <input type="text" style={{backgroundColor:"#3F2E3E"}} value="search"/>
            </div>
        </nav>
    )
}
export default Nav;