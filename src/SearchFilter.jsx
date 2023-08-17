import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const SearchFilter = () => {
    const [words, setWords] = useState(["dispensable", "romantic", "squirrel", "bolt", "fixed", "winter", "many", "poke", "rhetorical", "linen", "tempt", "sassy", "hushed", "pathetic", "harm", "misty", "ready", "belong", "children", "quartz", "annoyed", "puzzled", "ritzy", "grotesque", "acidic", "evanescent", "name", "ruin", "questionable", "dear", "retire", "crabby", "shallow", "attach", "doll", "raise", "fog", "rural", "ambitious", "nine", "crook", "lavish", "prefer", "bare", "bashful", "stupendous", "neighborly", "elegant", "title", "assorted", "sound", "frequent", "part", "compete", "unequaled", "grass", "strengthen", "blink", "tiresome", "club", "divergent", "kill", "sugar", "scribble", "rabbit", "average", "faulty", "leather", "polish", "offbeat", "stormy", "song", "racial", "animal", "ubiquitous", "clammy", "useful", "corn", "clean", "lighten", "telling", "tent", "yard", "suppose", "weight", "nerve", "humorous", "accidental", "stocking", "abhorrent", "vacuous", "rough", "program", "key", "puny", "ill-informed", "jittery", "cherries", "laugh", "disagree", "unnatural", "bewildered", "cakes", "needle", "muddled", "nonstop", "macabre", "noisy", "party", "bat", "cushion", "goofy", "productive", "skillful", "pin", "mine", "obsolete", "road", "heavenly", "peaceful", "health", "resonant", "warlike", "bleach", "cub", "cook", "jam", "nonchalant", "highfalutin", "unfasten", "tan", "literate", "station", "root", "battle", "volcano", "flawless", "lopsided", "sparkle", "cast", "protect", "chilly", "basketball", "plausible", "check", "grumpy", "sick", "caring", "alleged", "wind", "tight", "zealous", "flippant", "naughty", "languid", "cats", "cannon", "disgusting", "self", "partner", "boil", "murky", "downtown", "tramp", "reject", "count", "unbecoming", "trade", "respect", "potato", "gray", "exchange", "cheerful", "cough", "plug", "stew", "flap", "zebra", "boundary", "possess", "whisper", "berserk", "motionless", "attractive", "camp", "listen", "gorgeous", "unusual", "busy", "spy", "mature", "snatch", "breezy", "work", "live", "nostalgic", "erect", "impress", "daily", "hum"]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    useEffect(() => {
        let searchFilteredList = [...words];
        searchFilteredList = searchFilteredList.filter((item) => {
            return item.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1;
        });
        setFilteredList([...searchFilteredList]);
    }, [searchWord]);

    return (
        <div styles={{ padding: "30px" }}>
            <h1>SearchFilter</h1>

            <input type="text" placeholder="type here to search any word" value={searchWord} onChange={(event) => setSearchWord(searchWord => event.target.value)} style={{ width: "300px", height: "40px", paddingLeft: "15px" }} />
            <div style={{ border: "1px solid #f00", margin: "15px", height: "200px", overflow: "scroll", display: "flex", flexWrap: "wrap" }}>
                {filteredList.length > 0 && filteredList.map((item, index) => <span style={{ margin: "15px", padding: "15px", backgroundColor: "aliceblue", display: "flex", alignItems: "center", height: "30px" }} key={index}>{item}</span>)}
            </div>
        </div>
    )
}

export default SearchFilter
