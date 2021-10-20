//import { ListVehiclePage } from './../../page/vehicle/list-vehicle.po';
import { AppPage } from './../../app.po';

describe('workspace-project List vehicles', () => {
    let page: AppPage;
    //let vehicle: ListVehiclePage;

    beforeEach(async () => {
        page = new AppPage();
        //vehicle = new ListVehiclePage();
        page.navigateTo('/vehile/list-vehicle');
    });

    // it('should dispay table headers', async () => {
    //     const data = await vehicle.getRows();
    //     console.log('data =========> ', data);
    //     expect(data[0]).toEqual('ID License plate Vehicle name Vehicle type Parked');
    // });

    // it('should reditect to update vehicle', async () => {
    //     const id = 1;
    //     await vehicle.clickActionButton(id);
    //     expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}vehicle/update-vehicle/${id}`);
    // });
});
