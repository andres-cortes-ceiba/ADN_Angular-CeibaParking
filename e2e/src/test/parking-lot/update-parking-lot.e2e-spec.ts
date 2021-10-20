import { AppPage } from './../../app.po';
import { browser } from 'protractor';
import { UpdateParkingLotPage } from './../../page/parking-lot/update-parking-lot.po';

describe('workspace-project Update parking lot', () => {
    let page: AppPage;
    let parkingLot: UpdateParkingLotPage;

    beforeEach( () => {
        page = new AppPage();
        parkingLot = new UpdateParkingLotPage();
        page.navigateTo('/parking-lot/update-parking-lot');
    });

    it('should see error "* Code is required"', () => {
        parkingLot.inputCode('');
        browser.sleep(100);
        expect(parkingLot.getRequiredCodeError()).toEqual('* Code is required');
    });

    it('should see error "* Parking type is required"', () => {
        expect(parkingLot.getRequiredParkingTypeError()).toEqual('* Parking type is required');
    });

    it('should Update parking lot', () => {
        parkingLot.inputCode('B22');
        parkingLot.clickParkingTypeSelect();
        parkingLot.selectParkingType('car');
        parkingLot.clickUpdateParkingLotButton();
    });
});
