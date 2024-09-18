import {createSlice} from "@reduxjs/toolkit";

const intialState={
    status:false,
    useDate:null
}

const authSlice=createSlice({
    name:"auth",
    intialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.useDate=action.payload.useDate;

        },
        logout:(state)=>{
            state.status=false;
            state.useDate=null;
        }

    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer