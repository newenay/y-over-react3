function slideControls(state = [], action) {
    /* console.log("m1l1_nar - Reducer:", action.type) */
    if(typeof action.currentSlide!== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.currentSlide]: changeSlide(state[action.currentSlide], action)
            
        }
    }
    //console.log(state, action);
    return state;
}

// See Redux Arthur notes on Reducer Composition
function changeSlide(state = [], action){
    /* console.log("slideBullets - Reducer:", action.type) */
    switch(action.type) {
        case 'SLIDE_FORWARD':
            console.log("Slide Forward", action);
            // return the new state with the new comment
            return [ /* ...state, {
                prevSlide: slideId-1,
                currentSlide: slideId,
                nextSlide: slideId+1
            } */];
        case 'SLIDE_BACKWARDS':
            console.log("Slide Backwards", state);
            // return the new state without the deleted comment
            return [
                /* //from the start to the one we want to delete
                ...state.slice(0,action.i),
                // after the deleted one, to the end
                ...state.slice(action.i + 1) */
            ]

        default:
            return state;
    }
}

export default slideControls;