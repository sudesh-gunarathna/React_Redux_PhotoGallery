import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/themeSlice";
import { galleryReducer } from "./gallery/gallerySlice";

const store = configureStore(
    {
        reducer:{
            theme: themeReducer,
            gallery: galleryReducer,
        },
    }
);

export default store;