import { configureStore } from "@reduxjs/toolkit";
import Chrono from "./features/chrono";


export const store = configureStore({
reducer: {
    Chrono
}
})