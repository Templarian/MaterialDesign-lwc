import { LightningElement, api } from 'lwc';

const DEFAULT_PATH = 'M0 0h24v24H0V0zm2 2v20h20V2H2z';

/**
 * Render an SVG path icon into the page.
 * 
 * ```javascript
 * import { mdiAccount } from '@mdi/js'
 * 
 * export default class Example extends LightningElement {
 *   mdiAccount = mdiAccount;
 * }
 * ```
 * 
 * ```html
 * <template>
 *   <mdi-icon path={mdiAccount}></mdi-icon>
 * </template>
 * ```
 * 
 * @name Icon
 * @order 1
 */
export default class Icon extends LightningElement {

    /**
    * The path data rendered in the SVG.
    *
    * @type {string}
    * @default 'M0 0h24v24H0V0zm2 2v20h20V2H2z'
    */
    @api path = DEFAULT_PATH

    /**
    * CSS fill property on <path>.
    *
    * @type {string}
    * @default null
    */
    @api color = null

    /**
    * If defined the text for screen readers. If left off aria-hidden="true"
    *
    * @type {string}\
    * @default null
    */
    @api label = null

    get computedIsAriaHidden() {
        return this.label === null;
    }

    get computedStyle() {
        const style = [];
        if (this.color) {
            style.push(`fill:${this.color}`);
        }
        return style.join(';');
    }
}
