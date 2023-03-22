import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['wrapper', 'card'];

    addCard() {
        const card = this.cardTargets[0].cloneNode(true);
        this.wrapperTarget.appendChild(card);
    }
}
