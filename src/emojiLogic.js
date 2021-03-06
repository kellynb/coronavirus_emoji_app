import deathFace from './images/death_face.png'
import heartFace from './images/hear_face.png'
import neutralFace from './images/neutral.png'
import oozyFace from './images/oozy_face.png'
import smileFace from './images/smile.png'


export const emojiLogic = (currentCountry, worldData) => {
    let emojiImg = undefined
    const {virusToday, virusYes} = currentCountry
    
    const country_to_world = (currentCountry, worldData) => {
        const worldChange = ((currentCountry - worldData) / worldData) * 100
        const findScore = score(worldChange)
        return findScore
    }

    const country_change = (virusToday, virusYes) => {
        if (virusYes.todayDeaths) {
            const deathChange = ((virusToday.todayDeaths - virusYes.todayDeaths) / virusYes.todayDeaths) * 100
            const findScore = score(deathChange)
            return findScore
        } else if (virusToday.todayDeaths) {
            const deathChange = virusToday.todayDeaths * 100
            const findScore = score(deathChange)
            return findScore
        } else {
            const findScore = score(-100)
            return findScore
        }
        
    }

    const score = (change) => {
        let score = 0;
        if (change <= -100) {
            score = 2
        } else if (change <= -50) {
            score = 1;
        } else if (change <= 50) {
            score = 0;
        } else if (change <= 100) {
            score = -1;
        } else {
            score = -2
        }
        return score
    }

    if (virusYes) {
        const getScore = country_to_world(virusToday.deathsPerOneMillion, worldData.deathsPerMill) + country_change(virusToday, virusYes)
        
        if (getScore < -2) {
            emojiImg = "deathFace"
        } else if (getScore < 0 ) {
            emojiImg = "oozyFace"
        } else if (getScore < 2) {
            emojiImg = "neutralFace"
        } else if (getScore < 4 ) {
            emojiImg = "smileFace"
        } else {
            emojiImg = "heartFace"
        }
    }

    return emojiImg
    
}

export const emojiShow = {
    "deathFace": deathFace,
    "oozyFace": oozyFace,
    "neutralFace": neutralFace,
    "smileFace": smileFace,
    "heartFace": heartFace
}

export const emojiScale = {
    "deathFace": 0,
    "oozyFace": 25,
    "neutralFace": 50,
    "smileFace": 75,
    "heartFace": 100
}
