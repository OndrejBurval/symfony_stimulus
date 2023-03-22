import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['title'];

    static values = {
        random: String
    }

    localData = 'localValue';

    connect() {
        this.localData = 'localValue--2';
        console.log(this.randomValue)
        console.log(this.localData)
    }

    changeTitle({ params }) {
        this.titleTarget.textContent = params.title;
    }
}
