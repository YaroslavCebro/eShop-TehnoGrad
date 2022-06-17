import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import AuthAdmin from './pages/AuthAdmin';
import ProductPage from './pages/ProductPage';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, ADMIN_LOGIN_ROUTE, ADMIN_PRODUCT, ADMIN_CATEGORY, PROFILE_ROUTE, USER_OLD_ORDERS, ADMIN_EMPLOYEE, ADMIN_COMPANY, ADMIN_USER,  } from './utils/consts.js';
import AdminProduct from './pages/AdminProduct';
import AdminCategory from './pages/AdminCategory';
import UserPage from './pages/UserPage';
import UserOrders from './pages/UserOrders';
import AdminEmployess from './pages/AdminEmployess'
import AdminCompany from './pages/AdminCompany';
import AdminUser from './pages/AdminUser';

export const authRoutes = [
    {
        path: USER_OLD_ORDERS,
        Component: UserOrders
    },
    {
        path: PROFILE_ROUTE,
        Component: UserPage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ADMIN_PRODUCT,
        Component: AdminProduct
    },
    {
        path: ADMIN_CATEGORY,
        Component: AdminCategory
    }

]

export const adminAuthRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: ADMIN_LOGIN_ROUTE,
        Component: AuthAdmin
    },
    {
        path: ADMIN_EMPLOYEE,
        Component: AdminEmployess
    },
    {
        path: ADMIN_COMPANY,
        Component: AdminCompany
    },
    {
        path: ADMIN_USER,
        Component: AdminUser
    },
]