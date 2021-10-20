import { $$, browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ListParkingLotPage {
    private PARKING_LOT = {
        tableRows: (): ElementArrayFinder => $$('.generic-table__row'),
        actionButton: (itemId: number): ElementFinder => element(by.id(`generic-table__action-button--${itemId}`))
    };

    async getRows() {
        return await this.PARKING_LOT.tableRows().getText();
    }

    async clickActionButton(itemId: number) {
        await this.PARKING_LOT.actionButton(itemId).click();
        browser.sleep(100);
    }
}
