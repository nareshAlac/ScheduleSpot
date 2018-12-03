import { ManageSpotInstancesModule } from './manage-spot-instances.module';

describe('ManageSpotInstancesModule', () => {
  let manageSpotInstancesModule: ManageSpotInstancesModule;

  beforeEach(() => {
    manageSpotInstancesModule = new ManageSpotInstancesModule();
  });

  it('should create an instance', () => {
    expect(manageSpotInstancesModule).toBeTruthy();
  });
});
