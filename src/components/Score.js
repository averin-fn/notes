
let result = 0;

export function Score({ score, attempt }) {
    console.log(attempt);
    if (attempt === 0) {
        result = ("твой результат" + score);
        score = 0;
        attempt = 3;
        
    } else {
        result = score
    }
    return (

        <p>{result}</p>
    )
};


