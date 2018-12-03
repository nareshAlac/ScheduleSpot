import { SpotRequestPredictorModule } from './spot-request-predictor.module';

describe('SpotRequestPredictorModule', () => {
  let spotRequestPredictorModule: SpotRequestPredictorModule;

  beforeEach(() => {
    spotRequestPredictorModule = new SpotRequestPredictorModule();
  });

  it('should create an instance', () => {
    expect(spotRequestPredictorModule).toBeTruthy();
  });
});
