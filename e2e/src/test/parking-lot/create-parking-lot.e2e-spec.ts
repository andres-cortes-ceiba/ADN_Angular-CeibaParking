import { AppPage } from './../../app.po';
import { browser } from 'protractor';
import { CreateParkingLotPage } from './../../page/parking-lot/create-parking-lot.po';

describe('workspace-project Create parking lot', () => {
    let page: AppPage;
    let parkingLot: CreateParkingLotPage;

    beforeEach( () => {
        page = new AppPage();
        parkingLot = new CreateParkingLotPage();
        page.navigateTo('/parking-lot/create-parking-lot');
    });

    it('should see error "* Code is required"', () => {
        parkingLot.inputCode('');
        browser.sleep(100);
        expect(parkingLot.getRequiredCodeError()).toEqual('* Code is required');
    });

    it('should see error "* Parking type is required"', () => {
        expect(parkingLot.getRequiredParkingTypeError()).toEqual('* Parking type is required');
    });

    it('should create parking lot', () => {
        parkingLot.inputCode('B22');
        parkingLot.clickParkingTypeSelect();
        parkingLot.selectParkingType('car');
        parkingLot.clickCreateParkingLotButton();
    })
});
