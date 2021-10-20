import { AppPage } from './../../app.po';
import { browser } from 'protractor';
import { UpdateVehiclePage } from './../../page/vehicle/update-vehicle.po';

fdescribe('workspace-project Update vehicle', () => {
    let page: AppPage;
    let vehicle: UpdateVehiclePage;

    beforeEach( async () => {
        page = new AppPage();
        vehicle = new UpdateVehiclePage();
        page.navigateTo('vehicle/update-vehicle/1');
    });

    it('should see error "* License plate is required"', () => {
        vehicle.inputLicensePlate('');
        browser.sleep(100);
        expect(vehicle.getRequiredLicensePlateError()).toEqual('* License plate is required');
    });

    it('should see error "* License plate can be max 6 characters long"', () => {
        vehicle.inputLicensePlate('1234567');
        browser.sleep(100);
        expect(vehicle.getRequiredLicensePlateError()).toEqual('* License plate can be max 6 characters long');
    });

    it('should see error "* License plate can be min 5 characters long"', () => {
        vehicle.inputLicensePlate('1234');
        browser.sleep(100);
        expect(vehicle.getRequiredLicensePlateError()).toEqual('* License plate can be min 5 characters long');
    });

    it('should see error "* Vehicle name is required"', () => {
        vehicle.inputVehicleName('');
        browser.sleep(100);
        expect(vehicle.getRequiredVehicleNameError()).toEqual('* Vehicle name is required');
    });

    it('should see error "* Vehicle type is required"', () => {
        expect(vehicle.getRequiredVehicleTypeError()).toEqual('* Vehicle type is required');
    });

    fit('should update vehicle', () => {
        vehicle.inputLicensePlate('ABC123');
        vehicle.inputVehicleName('mazda 3');
        vehicle.clickVehicleTypeSelect();
        vehicle.selectVehicleType('car');
        vehicle.clickupdateVehicleButton();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'vehicle/list-vehicle');
    });
});
