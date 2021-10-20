import { AppPage } from './../../app.po';
import { browser } from 'protractor';
import { CreateVehiclePage } from './../../page/vehicle/create-vehicle.po';

describe('workspace-project Create Vehicle', () => {
    let page: AppPage;
    let vehicle: CreateVehiclePage;

    beforeEach(() => {
        page = new AppPage();
        vehicle = new CreateVehiclePage();
        page.navigateTo('/vehicle/create-vehicle');
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

    it('should create vehicle', () => {
        vehicle.inputLicensePlate('ABC123');
        vehicle.inputVehicleName('mazda 3');
        vehicle.clickVehicleTypeSelect();
        vehicle.selectVehicleType('car');
        vehicle.clickCreateVehicleButton();
    });

});
