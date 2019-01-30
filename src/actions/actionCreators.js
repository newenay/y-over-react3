// 1.) PROPS THAT DISPATCH EVENTS WITH PROPERTIES TO UPDATE THE STATE

// 2.) NEXT STOP IS THE REDUCER

// increment
export function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addBullet(slideId, author, bullet){
    return {
        type: 'ADD_COMMENT',
        slideId,
        author,
        bullet
    }
}

// remove comment
export function removeBullet(slideId, i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        slideId
    }
}

// *********** Footer Actions ***************
export function slideForward(currentSlide){
    return { 
        type: 'SLIDE_FORWARD', 
        currentSlide
    }
}

export function slideBackwards(currentSlide){
    return { 
        type: 'SLIDE_BACKWARDS', 
        currentSlide
    }
}