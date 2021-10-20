import { AppPage } from './../../app.po';
import { CreateOrderPage } from './../../page/order/create-order.po';

describe('workspace-project Create order', () => {
    let page: AppPage;
    let order: CreateOrderPage;

    beforeEach( () => {
        page = new AppPage();
        order = new CreateOrderPage();
        page.navigateTo('/order/create-order');
    });

    it('should see error "* Select an order type"', () => {
        expect(order.getRequiredOrderTypeError()).toEqual('* Select an order type');
    });

    it('should see error "* Parking lot is required"', () => {
        expect(order.getRequiredParkingLotError()).toEqual('* Parking lot is required');
    });

    it('should see error "* Vehicle is required"', () => {
        expect(order.getRequiredVehicleError()).toEqual('* Vehicle is required');
    });

});
