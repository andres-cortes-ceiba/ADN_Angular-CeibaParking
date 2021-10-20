import { browser, by, element, ElementFinder } from 'protractor';

export class CreateOrderPage {
    private ORDER = {
        orderTypeSelect: (): ElementFinder => element(by.id('create-order__order-type')),
        orderTypeOption: (option: string): ElementFinder => element(by.id(`create-order__order-type-option--${option}`)),
        requiredOrderTypeError: (): ElementFinder => element(by.id('create-order__error-order-type-required')),
        parkingLotSelect: (): ElementFinder => element(by.id('create-order__parking-lot')),
        parkingLotOption: (option: string): ElementFinder => element(by.id(`create-order__parking-lot-option--${option}`)),
        requiredParkingLotError: (): ElementFinder => element(by.id('create-order__error-parking-lot-required')),
        vehicleSelect: (): ElementFinder => element(by.id('create-order__vehicle')),
        vehicleOption: (option: string): ElementFinder => element(by.id(`create-order__vehicle-option--${option}`)),
        requiredVehicleError: (): ElementFinder => element(by.id('create-order__error-vehicle-required')),
        btnCreate: (): ElementFinder => element(by.id('create-order__btn-create'))
    };

    async clickOrderTypeSelect() {
        await this.ORDER.orderTypeSelect().click();
        browser.sleep(100);
    }

    async selectOrderType(orderType: string) {
        await this.ORDER.orderTypeOption(orderType).click();
        browser.sleep(100);
    }

    async getRequiredOrderTypeError() {
        return await this.ORDER.requiredOrderTypeError().getText();
    }

    async clickParkingLotSelect() {
        await this.ORDER.parkingLotSelect().click();
        browser.sleep(100);
    }

    async selectParkingLot(parkingLot: string) {
        await this.ORDER.parkingLotOption(parkingLot).click();
        browser.sleep(100);
    }

    async getRequiredParkingLotError() {
        return await this.ORDER.requiredParkingLotError().getText();
    }

    async clickVehicleSelect() {
        await this.ORDER.vehicleSelect().click();
        browser.sleep(100);
    }

    async selectVehicleLot(vehicle: string) {
        await this.ORDER.vehicleOption(vehicle).click();
        browser.sleep(100);
    }

    async getRequiredVehicleError() {
        return await this.ORDER.requiredVehicleError().getText();
    }

    async clickCreateParkingLotButton() {
        await this.ORDER.btnCreate().click();
        browser.sleep(100);
    }
}
