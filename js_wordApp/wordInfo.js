class WordInfo {
    constructor(wordList) {
        this.wordList = wordList;
        this.index = 0;
    }

    getInfo = () => {
        return this.wordList[this.index];
    }

    next = () => {
        if (this.index + 1 != this.wordList.length) {
            this.index++;
        }
    }

    prev = () => {
        if(this.index != 0) {
            this.index--;
        }
        else {
            this.index = this.wordList.length - 1;
        }
    }

    control = () => {
        if (this.index + 1 == this.wordList.length) return "1";
    }
    
}
