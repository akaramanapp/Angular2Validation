import { Angular2ValidationPage } from './app.po';

describe('angular2-validation App', function() {
  let page: Angular2ValidationPage;

  beforeEach(() => {
    page = new Angular2ValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
