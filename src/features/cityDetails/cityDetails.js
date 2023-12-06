import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    "Islamabad":["26 Number Bus Stop -RWP","Abasyn University Islamabad","Airport Housing Society","Ali Pur","Azeem Town","Bhara Kahu","Bhata Chowk -RWP","Similar Places..."],
    "Lahore":["Aliya Town","Rashid Pura","Ichhra","Beghum Pura","Baghban Pura"],
    "Mian Channun":["Mian Channu Area"],
    "Okara":["Okara"],
    "Pattoki":["Pattoki"],
    "Peshawar":["Abdara Road","Abdul Qayyum Road","Academy Town"],
    "Rawalpindi":["15 Number Market Wah","22 Number Chungi","25 AREA WAH CANTT","6TH Road","7TH Road"],
    "Sahiwal":["University of Sahiwal","Wahdat Colony","Aabpara Town Market","Al Hafiz Garden","Al Haram City"]
}

const cityDetails = createSlice({
    name:"cities",
    initialState,
})

export default cityDetails.reducer