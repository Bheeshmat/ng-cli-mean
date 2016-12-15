import { NgCliMeanPage } from './app.po';

describe('ng-cli-mean App', function() {
  let page: NgCliMeanPage;

  beforeEach(() => {
    page = new NgCliMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
