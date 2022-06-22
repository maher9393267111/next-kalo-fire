///
// Our slice for handling authentication:
///

// SSR: We need to import HYDRATE from next-redux-wrapper:
import { HYDRATE } from 'next-redux-wrapper';

// Import the createSlice function from redux toolkit:
import { createSlice } from '@reduxjs/toolkit';


// Create the slice:
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        isAuthLoading: false,
        user: {},
        name:'maher',
        singleproduct: {},
        categories: [],
        subCategoies: [],
        products: [],
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setname: (state, action) => {
            state.name = action.payload;
        },
        setUserInfo: (state, action) => {
            console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀 Action Payload------>',action.payload);
            state.user = action.payload;
        },

        fetchsingleProduct: (state, action) => {
console.log()
            state.singleproduct = action.payload;
        },

    fetchCategories: (state, action) => {

        state.categories = action.payload;
    },
    fetchSubCategories: (state, action) => {
            
            state.subCategoies = action.payload;
    },
    fetchProducts: (state, action) => {
        state.products = action.payload;
    }




    },
    // extraReducers: {
    //     // When SSR dispatch "HYDRATE" this will take the action payload and set the state:
    //     [HYDRATE]: (state, action) => {
    //         state.isLoggedIn = action.payload.auth.isLoggedIn;
    //         state.isAuthLoading = action.payload.auth.isAuthLoading;
    //         state.user = action.payload.auth.user;

    //         const nextState = {
    //             ...state, // use previous state
    //             ...action.payload, // apply delta from hydration
    //         };
    //         if (state.user) {
    //             nextState.user = state.user; // preserve user value on client side navigation
    //             nextState.isLoggedIn = state.isLoggedIn; // preserve isLoggedIn value on client side navigation
    //         } 
    //         return nextState;
    //     }
    // }
}); 


// Export our slice and the action types:
export const { setIsLoggedIn, setname,  fetchCategories,   fetchProducts,  fetchSubCategories,  setUserInfo,fetchsingleProduct } = authSlice.actions;
export default authSlice.reducer;