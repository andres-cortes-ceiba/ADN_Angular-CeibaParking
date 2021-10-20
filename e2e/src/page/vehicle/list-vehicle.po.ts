import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ListVehiclePage {
    private VEHICLE = {
        tableRows: (): ElementArrayFinder => element.all(by.css('generic-table__row')),
        actionButton: (itemId: number): ElementFinder => element(by.id(`generic-table__action-button--${itemId}`))
    };

    async getRows() {
        return await this.VEHICLE.tableRows().getText();
    }

    async clickActionButton(itemId: number) {
        await this.VEHICLE.actionButton(itemId).click();
        browser.sleep(100);
    }
}
