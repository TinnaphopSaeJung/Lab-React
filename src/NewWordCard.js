import React, { useState} from "react";
import _, { attempt } from 'lodash';

import CharacterCard from "./CharacterCard";

const prepareStateFromWord = given_newword => {
    let newword = given_newword.toUpperCase()
    let chars = _.shuffle(Array.from(newword))
    return {
        newword,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

    
        if(guess.length == state.newword.length){
            if(guess == state.newword){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
        </div>
    )
}