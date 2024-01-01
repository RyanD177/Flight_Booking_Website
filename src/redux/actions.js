
import { BOOKING, DELETE } from "./actionsTypes"


export const makeBooking = (data) => {

    return {
        type: BOOKING,
        payload: data
    }
}


export const deletBooking = (id) => {

    return {
        type: DELETE,
        payload: id,
    }
}
