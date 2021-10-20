import { browser, by, element, ElementFinder } from 'protractor';

export class UpdateVehiclePage {
    private VEHICLE = {
        licensePlateInput: (): ElementFinder => element(by.id('update-vehicle__license-plate')),
        requiredLicensePlateError: (): ElementFinder => element(by.id('update-vehicle__error-license-plate-required')),
        maxLengthLicensePlateError: (): ElementFinder => element(by.id('update-vehicle__error-license-plate-max-length')),
        minLengthLicensePlateError: (): ElementFinder => element(by.id('update-vehicle__error-license-plate-min-length')),
        vehicleNameInput: (): ElementFinder => element(by.id('update-vehicle__vehicle-name')),
        requiredVehicleNameError: (): ElementFinder => element(by.id('update-vehicle__error--vehicle-name-required')),
        vehicleTypeSelect: (): ElementFinder => element(by.id('update-vehicle__vehicle-type')),
        vehicleTypeOption: (option: string): ElementFinder => element(by.id(`update-vehicle__vehicle-type--option-${option}`)),
        requiredVehicleTypeError: (): ElementFinder => element(by.id('update-vehicle__error--vehicle-type-required')),
        btnUpdate: (): ElementFinder => element(by.id('update-vehicle__btn-update'))
    };

    async inputLicensePlate(licensePlate: string) {
        await this.VEHICLE.licensePlateInput().sendKeys(licensePlate);
    }

    async getRequiredLicensePlateError() {
        return await this.VEHICLE.requiredLicensePlateError().getText();
    }

    async getMaxLengthLicensePlateError() {
        return await this.VEHICLE.maxLengthLicensePlateError().getText();
    }

    async getMinLengthLicensePlateError() {
        return await this.VEHICLE.minLengthLicensePlateError().getText();
    }

    async inputVehicleName(vehicleName: string) {
        await this.VEHICLE.vehicleNameInput().sendKeys(vehicleName);
    }

    async getRequiredVehicleNameError() {
        return await this.VEHICLE.requiredVehicleNameError().getText();
    }

    async clickVehicleTypeSelect() {
        await this.VEHICLE.vehicleTypeSelect().click();
        browser.sleep(100);
    }

    async selectVehicleType(vehicleType: string) {
        await this.VEHICLE.vehicleTypeOption(vehicleType).click();
        browser.sleep(100);
    }

    async getRequiredVehicleTypeError() {
        return await this.VEHICLE.requiredVehicleTypeError().getText();
    }

    async clickupdateVehicleButton() {
        await this.VEHICLE.btnUpdate().click();
        browser.sleep(100);
    }
}
