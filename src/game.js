/** Класс определяющий стостояние игры */
class Game {
    score = 0;
    attempt= 3;
    bestResult = 0;

    restart() {
        this.bestResult = this.score;

        this.score = 0;
        this.attempt = 3;
    }
}

export const game = new Game();
