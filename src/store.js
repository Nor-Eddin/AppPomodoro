import { configureStore } from "@reduxjs/toolkit";
import Chrono from "./features/Chrono";
import preview from "./features/preview";

export const store = configureStore({
reducer: {
    Chrono
}
})