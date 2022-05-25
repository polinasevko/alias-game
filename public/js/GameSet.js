export class GameSet {
    constructor() {
        this.commands = [];
        this.wordNum = 60;
        this.time = 60;
        this.dictionary = '';
    }
}

export class Command {
    constructor(name) {
        this.name = name;
        this.guessed = 0;
        this.passed = 0;
        this.guessedWords = [];
        this.passedWords = [];
        this.score = 0;
    }
}