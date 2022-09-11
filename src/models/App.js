import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from "./redux/store/store";
import { Provider } from 'react-redux';
import { Catagory_Provider } from "./context-api/catagory-context";
import Navbar from "./combonants/home-page/Nav-Bar/Navbar";
import Main_page from "./combonants/categories/mainPage";
import Crearte_Post from "./combonants/cerate_post/Crearte_Post";
import './App.css';

const queryClient = new QueryClient();

const App=()=>{
    return(
        <div className="main">
        <Catagory_Provider>
                <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                                <BrowserRouter >
                                        <Routes>
                                                <Route path="/" element={<><Navbar/> <Main_page/> </>}/>
                                                <Route path="/createPost" element={<><Navbar/> <Crearte_Post/></>}/>
                                        </Routes>
                                </BrowserRouter>
                </Provider>
                </QueryClientProvider>
        </Catagory_Provider>
        </div>
    )
}



export default App