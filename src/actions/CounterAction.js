export const increaseCounter = () => {  /////name export // seprate fun for each action
    return{
        type:"INCREASE"  // this type mut be same in switch cases in reducer
    }
}
export const decreaseCounter = () => {
    return{
        type:"DECREASE"
    }
}
