import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";



const User=({match})=>(
    <div>
        {match.params.id}
    </div>
)



function UserDetail (props) {

    return (
        <div className='User'>
            <Route path='/users/:id' component={User}/>
        </div >
    );
}

export default UserDetail;