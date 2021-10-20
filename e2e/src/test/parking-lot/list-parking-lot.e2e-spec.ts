//import { ListParkingLotPage } from './../../page/parking-lot/list-parking-lot.po';
import { AppPage } from './../../app.po';

describe('workspace-project List parking lots', () => {
    let page: AppPage;
    //let parkingLot: ListParkingLotPage;

    beforeEach(async () => {
        page = new AppPage();
        //parkingLot = new ListParkingLotPage();
        page.navigateTo('/vehile/list-parking-lot');
    });

    // it('should dispay table headers', async () => {
    //     const data = await parkingLot.getRows();
    //     console.log('data =========> ', data);
    //     expect(data[0]).toEqual('ID ');
    // });

    // it('should reditect to update parking lot', async () => {
    //     const id = 1;
    //     await parkingLot.clickActionButton(id);
    //     expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}parking-lot/update-parking-lot/${id}`);
    // });
});
