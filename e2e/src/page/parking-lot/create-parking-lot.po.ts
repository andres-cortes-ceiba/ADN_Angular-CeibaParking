import { browser, by, element, ElementFinder } from 'protractor';

export class CreateParkingLotPage {
    private PARKING_LOT = {
        codeInput: (): ElementFinder => element(by.id('create-parking-lot__code')),
        requiredCodeError: (): ElementFinder => element(by.id('create-parking-lot__error-code-required')),
        parkingTypeSelect: (): ElementFinder => element(by.id('create-parking-lot__parking-type')),
        parkingTypeOption: (option: string): ElementFinder => element(by.id(`create-parking-lot__parking-type-option--${option}`)),
        requiredParkingTypeError: (): ElementFinder => element(by.id('create-parking-lot__error-parking-type-required')),
        btnCreate: (): ElementFinder => element(by.id('create-parking-lot__btn-create'))
    };

    async inputCode(code: string) {
        await this.PARKING_LOT.codeInput().sendKeys(code);
    }

    async getRequiredCodeError() {
        return await this.PARKING_LOT.requiredCodeError().getText();
    }

    async clickParkingTypeSelect() {
        await this.PARKING_LOT.parkingTypeSelect().click();
        browser.sleep(100);
    }

    async selectParkingType(parkingType: string) {
        await this.PARKING_LOT.parkingTypeOption(parkingType).click();
        browser.sleep(100);
    }

    async getRequiredParkingTypeError() {
        return await this.PARKING_LOT.requiredParkingTypeError().getText();
    }

    async clickCreateParkingLotButton() {
        await this.PARKING_LOT.btnCreate().click();
        browser.sleep(100);
    }
}
