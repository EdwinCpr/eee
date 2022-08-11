import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Prueba from '../components/Prueba';
import { getPurchaseThunk } from '../store/slices/purchase.slice';

const Purschases = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPurchaseThunk())
    },[])
    const purchasess = useSelector((state) => state.purchases)
    return (
        <div className="purchases">
            <div className="purchases-title">
                <h2>Mis compras</h2>
            </div>
            {
                purchasess.map((purchase) => (
                    <Prueba purchase={purchase.cart.products}/>
                ))
            }
        </div>
    );
};

export default Purschases;