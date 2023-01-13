import { createSlice } from '@reduxjs/toolkit'

const WebsiteDetailsSlice = createSlice({
    name: "WebsiteDetails",
    initialState: {
        websiteName: 'IFSC Code Finder',
        websiteDescription: 'IFSC Code finder is a website where you can find any bank details'
    }
});

export default WebsiteDetailsSlice.reducer;