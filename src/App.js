import React from 'react';
import MainPage from './Pages/MainPage';
import { BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewProduct, removeProductFromCart } from './actions/actions.js'
import PageCart from './Pages/PageCart'
import products from './data/data.json'
import {Menu,Input,Button} from 'antd'
import {SearchOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import HomePage from './Pages/HomePage';
import './css/App1.css'
import MilkPage from './Pages/MilkPage';
import MeatPage from './Pages/MeatPage';

 
    const mapStateToProps = ({ cart }) => {
        const props = { cart };
        return props;
      
      }
      const sortFunction=(groupName)=>{
       return products.filter((product)=>product.group===groupName)
    }
      const App = ({ dispatch, cart }) => {
        const handleAddProduct =(product,count,id) =>(e)=> {
          e.preventDefault();
          product.amount=count;
          dispatch(addNewProduct(product,count,id));
        }
      
      
        const handleRemoveProductFromCart = (id)=>(e)=>{
          e.preventDefault();
         dispatch(removeProductFromCart(id));
        }
        

      
    return (<div className="container">
        <Router>
        <Menu className='menu'>
            <Menu.Item className='menu-item'>
                <Link style={{color:'white',fontSize:'20px',fontWeight:'600'}} className='link' to='/MainPage'>Главная страница</Link>
                </Menu.Item>
            <Menu.Item className='menu-item'>
                <Link style={{color:'white',fontSize:'20px',fontWeight:'600'}} className='link' to='/HomePage'>Все продукты</Link>
                </Menu.Item >   
            <Menu.Item className='menu-item'><Link style={{color:'white',fontSize:'20px',fontWeight:'600'}} className='link' to='/MilkPage'>Молочная продукция</Link></Menu.Item>
            <Menu.Item className='menu-item'><Link style={{color:'white',fontSize:'20px',fontWeight:'600'}} className='link' to='/MeatPage'>Мясо</Link></Menu.Item>
            <Menu.Item><Input placeholder="input search text" style={{ width: 200 }} /><Button className='search'><SearchOutlined className='icon-search' /></Button></Menu.Item>
            <Menu.Item><Link style={{color:'white',fontSize:'20px',fontWeight:'600'}} className='link' to='/PageCart'><ShoppingCartOutlined style={{fontSize:'20px'}}/> {cart.length}</Link></Menu.Item>
        </Menu>
        <Switch>
            <Route path='/MainPage'>
                 <MainPage />
            </Route>
            <Route path='/HomePage'>
                <HomePage products={products} handleAddProduct={handleAddProduct} />
            </Route>
            <Route path='/MilkPage'>
                <MilkPage sortFunction={sortFunction} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path='/MeatPage'>
                <MeatPage sortFunction={sortFunction} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path='/PageCart'>
                <PageCart cart={cart} handleRemoveProductFromCart={handleRemoveProductFromCart} changeAmount={handleAddProduct}/>
            </Route>
        </Switch>
        </Router>
        
        

        </div>
    )
}
export default connect(mapStateToProps)(App)