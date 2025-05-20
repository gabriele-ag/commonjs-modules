import createPerson from "./names.js";
import personHobby from "./hobbies.js";

function createPeople() {
    const people = {
        fullName: createPerson(`Gabriele`, `Ardizzone`),
        hobbies: personHobby(`Musica`, `Videogiochi`, `PixelArt`)
    }
    return people
}

export default createPeople